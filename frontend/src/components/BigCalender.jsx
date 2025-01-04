import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css"
import { CalenderEvent } from "../libs/CalenderEvent.js";

const localizer = momentLocalizer(moment)

function BigCalender(props) {
  return (
      <Calendar
        localizer={localizer}
        events={CalenderEvent}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
  );
}

export default BigCalender;
