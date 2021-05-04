import React, { useState } from 'react';
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

function CalendarComponent() {
    const [value, onChange] = useState(new Date());
    console.log(value);

    return (
        <>
            <Calendar
                onChange={onChange}
                value={value}
                selectRange={true}
                minDate={new Date()}
            />
            <button className="spot__book-spot">Check availability</button>
        </>
    )
}

export default CalendarComponent
