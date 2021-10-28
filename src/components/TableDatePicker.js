import { useState } from "react";
import DatePicker from "react-datepicker";
import { FaCalendarAlt } from 'react-icons/fa';

function TableDatePicker({toDo, user, handleResData}) {
    const [date, setDate] = useState(new Date());
    const [resData, setResData] = useState({})

    function renderResData() {
        const newResData = {
            title: `${toDo.title}`,
            category: "to-do",
            start: date,
            end: date,
            user_id: `${user.id}`,
        }
        setResData(newResData);
        console.log(newResData);
        handleResData(newResData);
    }
    return(
        <div className="schedule">
            <div className="date-picker">  
                <DatePicker selected={date} onChange={date => setDate(date)} />   
            </div>
            <h5 onClick={renderResData}><FaCalendarAlt /> Add to Itinerary</h5>
        </div>
    )
}

export default TableDatePicker;