"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function UpdateButton({
  selectedCourse,
  path,
}: {
  selectedCourse: string;
  path: string;
}) {
  const {_id, ...others}= JSON.parse(selectedCourse);
  const router = useRouter();
  const handleUpdate = async () => {
    try {
      const res = await fetch(`/api/timetable${path}/${_id}`, { method: "PUT",  });
      if (!res.ok) throw Error("An error has occurred!");
      alert("Item Updated successfully!");
      router.refresh();
    } catch (error: any) {
      alert("Error " + error.mrssage);
    }
  };
  return (
    <Button
      className="bg-orange-600 text-white"
      variant={"destructive"}
      onClick={handleUpdate}
    >
      Update
    </Button>
  );
}
