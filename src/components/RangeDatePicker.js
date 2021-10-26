import { useState } from "react";
import DatePicker from "react-datepicker";

function RangeDatePicker({campground, user, handleResData}) {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [resData, setResData] = useState({})

    function renderResData(e) {
        setResData({
            name: `${campground.name}`,
            category: "campground",
            start: startDate,
            end: endDate,
            user_id: `${user.id}`,
        });
        console.log(resData);
        handleResData(resData);
    }

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
            <button onClick={(e) => renderResData(e)}>Add to Itinerary</button>
   </div>
        
    )
}

export default RangeDatePicker;