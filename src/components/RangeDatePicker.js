import { useState } from "react";
import DatePicker from "react-datepicker";

function RangeDatePicker() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    return(
        
        <div>
            <p>Start Date:</p>
            <DatePicker
                selected={startDate}
                selectsStart
                startDate={startDate}
                endDate={endDate} 
                onChange={date => setStartDate(date)}
            />
            <p>End Date:</p>
            <DatePicker
                selected={endDate}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                onChange={date => setEndDate(date)}
            />
   </div>
        
    )
}

export default RangeDatePicker;