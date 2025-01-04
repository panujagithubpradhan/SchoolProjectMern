import { CiMenuKebab } from 'react-icons/ci';
import BigCalender from '../components/BigCalender';
import "react-big-calendar/lib/css/react-big-calendar.css"
import EventCalendar from '../components/EventCalender';

function Student() {
  return (
    <div className='min-h-[70vh] bg-slate-100 w-full flex gap-2'>
      {/* /* Schedule Calender */}
      <div className='bg-white lg:w-2/3 min-h-[100%]'>
        {/* Title */}
        <div className='flex justify-between w-full px-8'>
          <h1 className='text-2xl'>Schedule Classes</h1>
          <CiMenuKebab className='rotate-90 text-4xl text-gray-500' />
        </div>
        {/* Calender */}
        <div className='w-full min-h-[100%]'>
          <BigCalender/>
        </div>
      </div>
      {/* Event Calender */}
      <div className='bg-white lg:w-1/3 flex flex-col gap-2'>
        <EventCalendar/>
      </div>
    </div>
  )
}

export default Student