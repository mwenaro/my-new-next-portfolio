import React from 'react';

interface SessionProps {
  teacher: string;
  className: string;
  name: string;
}

const Session: React.FC<SessionProps> = ({ teacher, className, name }) => {
  return (
    <div className="p-4 bg-slate-300 text-black shadow rounded-md mb-2">
      <h3 className="text-lg font-bold">{name}</h3>
      <p className="text-sm text-gray-600">Class: {className}</p>
      <p className="text-sm text-gray-600">Teacher: {teacher}</p>
    </div>
  );
};

export default Session;
