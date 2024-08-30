import React, { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen w-full flex flex-col mx-auto max-w-7xl px-4 py-4">
      <h2 className="text-xl md:text-2xl">The Calculator Gen</h2>
      <div className="min-h-3/4">{children}</div>
    </div>
  );
}
