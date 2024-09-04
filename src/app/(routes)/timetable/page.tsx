'use client'
import React, { useEffect, useRef, useState } from 'react'
import { useReactToPrint } from 'react-to-print';
import Timetable from '@/components/Timetable';



export default function Page() {
  const [tableData, setTableData] = useState<any>(null)
  const sessions = [
    { teacher: 'Mr. Smith', className: 'Math 101', name: 'Algebra' },
    { teacher: 'Ms. Johnson', className: 'Science 101', name: 'Biology' },
    // Add more sessions as needed
  ];
  useEffect(() => {
    async function getData() {
      const data = await (await fetch('/api/timetable')).json()
      setTableData(data.data)
      
    }

    //call getData
    getData()
  })
  // return <div>{JSON.stringify(tableData)}</div>
  const timetableRef = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => timetableRef.current,
    documentTitle: 'Timetable',
  });

  return (
    <div className="min-h-screen bg-slate-200/0.50 p-8 text-black">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">School Timetable</h1>
        <button
          onClick={handlePrint}
          className="px-4 py-2 bg-blue-500  rounded shadow"
        >
          Print Timetable
        </button>
      </div>
      <div ref={timetableRef}>
        <Timetable tableData={tableData} />
      </div>
    </div>
  );
};