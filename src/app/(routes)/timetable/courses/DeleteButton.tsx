"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function DeleteButton({
  idStr,
  path,
}: {
  idStr: string;
  path: string;
}) {
  const id = JSON.parse(idStr);
  const router = useRouter();
  const handleDelete = async () => {
    try {
      const res = await fetch(`/api/timetable${path}/${id}`, {method:"DELETE"});
      if (!res.ok) throw Error("An error has occurred!");
      alert("Item deleted successfully!");
      router.refresh();
    } catch (error: any) {
      alert("Error " + error.mrssage);
    }
  };
  return <Button className="bg-red-600 text-white" onClick={handleDelete}>Delete</Button>;
}
