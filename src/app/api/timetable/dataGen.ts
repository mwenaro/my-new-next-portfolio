import { ICourse } from "@/models/Course";
import { ITeacher } from "@/models/Teacher";

// Define the types for Teachers, Classes, and Sessions
interface Teacher extends ITeacher{

}

interface ClassInfo {
  name: string;
}

interface Session extends ICourse{
  class: ClassInfo;
  teachers: Teacher[];
  name: string;
}

interface TimePeriod {
  period: string;
  time: string;
}

interface TimetableEntry {
  className: string;
  teachers: Teacher[];
  name: string;
}

interface Timetable {
  [day: string]: {
    [period: string]: TimetableEntry[];
  };
}




// Define the time periods and days
const timePeriods: TimePeriod[] = [
  { period: "Period1", time: "08:00 - 10:00" },
  { period: "Period2", time: "10:00 - 12:00" },
  { period: "Period3", time: "13:00 - 15:00" },
];

const days: string[] = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// Shuffle an array randomly
function shuffleArray<T>(array: T[]): T[] {
  return array.sort(() => Math.random() - 0.5);
}

// Check if the teachers are valid for the session
function validTeachers(subjectTrs: string[], sessionTrs: string[]): boolean {
  const sessionSet = new Set(sessionTrs);
  return !subjectTrs.some((teacher) => sessionSet.has(teacher));
}

// Generate the timetable based on the data
export const generateTimetable = (data: Session[]): Timetable => {
  const timetable: Timetable = {};

  days.forEach((day) => {
    timetable[day] = {};
    timePeriods.forEach((period) => {
      timetable[day][period.period] = [];
    });
  });

  let wData = shuffleArray([...data]);
  let counter = 1;

  while (wData.length > 0 && counter < 40000) {
    console.log({ count: counter++, len: wData.length });
    const { class: classInfo, teachers, name } = wData[wData.length - 1];
    const { name: className } = classInfo;

    days.forEach((day) => {
      const uniquedailySessions: string[] = [];
      timePeriods.forEach(({ period }) => {
        const sessionData = (timetable[day][period]).reduce((acc:any, session) => {
          acc.classes.push(session.className);
          acc.trs = [...acc.trs, ...session.teachers.map(tr => tr._id)];
          return acc;
        }, { trs: [] as string[], classes: [] as string[] });

        if (
          timetable[day][period].length < 4 &&
          validTeachers((teachers as any).map((tr:any) => tr._id), sessionData.trs) &&
          !sessionData.classes.includes(className) &&
          !uniquedailySessions.includes(name)
        ) {
          timetable[day][period].push({
            className,
            teachers,
            name
          });
          uniquedailySessions.push(name);
          wData.pop();
        }
      });
    });

    // Optional: shuffle remaining data after each iteration if needed
    wData = shuffleArray([...wData]);
  }

  console.log({ wData });
  return timetable;
};
