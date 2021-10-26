import { useState } from "react";
import DatePicker from "react-datepicker";

function TableDatePicker({toDo, user, handleResData}) {
    const [date, setDate] = useState(new Date());
    const [resData, setResData] = useState({})

    function renderResData() {
        const newResData = {
            name: `${toDo.title}`,
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
        <div>
            <DatePicker selected={date} onChange={date => setDate(date)} />
            <button onClick={renderResData}>Add to Itinerary</button>
        </div>
    )
}

export default TableDatePicker;