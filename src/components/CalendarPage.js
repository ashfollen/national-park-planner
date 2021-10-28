import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import acadia from "../images/acadia.jpeg"

const locales = {
    "en-US": require("date-fns/locale/en-US") 
  }
  const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales
  })

function CalendarPage({reservations}
) {
    return (
        <>
            <img className="calendar-bg" src={acadia} />
            <Calendar localizer={localizer} events={reservations} startAccessor="start" endAccessor="end" style={{height: 650, margin: "50px"}} />
        </>
    )
}

export default CalendarPage;