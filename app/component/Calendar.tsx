import {Event} from "../../../Laviree/laviree/sanity/types/componentTypes";
import React, {useState} from "react";

interface CalendarProps {
    events: Event[];
    onDayClick: (day: number) => void;
}

const Calendar: React.FC<CalendarProps> = ({events, onDayClick}) => {
    const [month, setMonth] = useState<number>(new Date().getMonth());
    const [year, setYear] = useState<number>(new Date().getFullYear());

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();

    const days = [...Array(daysInMonth)].map((_, i) => i + 1);

    const handlePrevMonth = () => {
        if (month === 0) {
            setMonth(11);
            setYear(year - 1);
        } else {
            setMonth(month - 1);
        }
    };

    const handleNextMonth = () => {
        if (month === 11) {
            setMonth(0);
            setYear(year + 1);
        } else {
            setMonth(month + 1);
        }
    };

    const hasEvent = (day: number) => {
        if (!events) {
            return false
        } else {
            return events.some(event => {
                const eventDate = new Date(event.start_time);
                return (
                    eventDate.getFullYear() === year &&
                    eventDate.getMonth() === month &&
                    eventDate.getDate() === day
                );
            });
        }
    };

    return (
        <div className="p-4">
            <div className="flex justify-between items-center mb-4">
                <button onClick={handlePrevMonth}>Prev</button>
                <div>
                    {new Date(year, month).toLocaleString('default', {month: 'long'})} {year}
                </div>
                <button onClick={handleNextMonth} className="bg-gray-200 p-2 rounded">
                    Next
                </button>
            </div>
            <div className="grid grid-cols-7 gap-2">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                    <div key={day} className="text-center font-bold">
                        {day}
                    </div>
                ))}
                {[...Array(firstDayOfMonth)].map((_, i) => (
                    <div key={i}/>
                ))}
                desses
                {days.map(day => (
                    <div key={day} className="text-center border p-2 rounded">
                        {day}
                        {hasEvent(day) && (
                            <div className="h-1 bg-red-500 mt-2 rounded"/>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Calendar;