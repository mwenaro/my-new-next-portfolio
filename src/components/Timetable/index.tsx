import React from 'react';
import SessionList from './SessionList';

interface TimetableProps {
    //   timetable: {
    //     teacher: string;
    //     className: string;
    //     name: string;
    //   }[];
    tableData: any
}

const Timetable: React.FC<TimetableProps> = ({ tableData }) => {
    
    return (
        <div className="p-6 bg-gray-100 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Timetable</h2>
            <div className=''>
                {
                    tableData ? Object.entries(tableData).map(([k, periods], index) => <div className={'flex border-black border-1'} key={index}>
                        {/* col 1 */}
                        <div className='p-3 flex items-center justify-center text-lg font-bold'><h3>{k}</h3></div>

                        {/* cratew period columns */}
                        {periods ? Object.entries(periods).map(([period, sessions], indx) => <div key={indx}>
                            <h5>{period}</h5>
                            
                            <SessionList sessions={sessions as any} />
                        </div>) : ''}



                    </div>) : null
                }
            </div>
            {/* <SessionList sessions={timetable} /> */}
        </div>
    );
};

export default Timetable;
