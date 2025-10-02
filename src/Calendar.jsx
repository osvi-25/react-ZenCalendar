import { TbArrowBadgeLeftFilled } from "react-icons/tb";
import { TbArrowBadgeRightFilled } from "react-icons/tb";
import './Calendar.css'
import { useState } from "react";


export const Calendar = () => {
    
    const daysOfWeek = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"]

    const [selectedDate, setSelectedDate] = useState(new Date())
   
    const daysInMonth = () => {
      const daysArray = []
     
      const firstDay = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1)
      const lastDay = new Date(selectedDate.getFullYear(), selectedDate.getMonth()+1, 0)

      for(let i=0;i<firstDay.getDay();i++){
        daysArray.push(null)
      }
      for(let i=1;i<=lastDay.getDate();i++){
        daysArray.push(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), i))
      }

      return daysArray
    }

    const isSameDay = (date1, date2) => {
      return date1.getDate() === date2.getDate() && date1.getMonth() === date2.getMonth() && date1.getFullYear() === date2.getFullYear()
    }
    
    const changeMonth = (e) => {
      const newMonth = parseInt(e.target.value, 10)
      setSelectedDate(new Date(selectedDate.getFullYear(), newMonth, 1))
    }

    const changeYear = (e) => {
      const newYear = parseInt(e.target.value, 10)
      setSelectedDate(new Date(newYear, selectedDate.getMonth(), 1))
    }

  return (
    <>
     <h2>ZenCalendar</h2>
     <div className="calendar-app">
      <div className="header">
       <button onClick={()=>{setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth()-1, 1))}}><TbArrowBadgeLeftFilled className="arrow" /></button>
       <select value={selectedDate.getMonth()} onChange={changeMonth}>
        {months.map((month,index)=>(<option key={index} value={index}>{month}</option>))}
       </select>
       <select value={selectedDate.getFullYear()} onChange={changeYear}>
        {Array.from({length : 200},(_, i) => selectedDate.getFullYear() - 100 + i).map((year)=>(<option key={year} value={year}>{year}</option>))}
       </select>
       <button onClick={()=>{setSelectedDate(new Date(selectedDate.getFullYear(),selectedDate.getMonth()+1, 1))}}><TbArrowBadgeRightFilled className="arrow" /></button>
      </div>
      <div className="daysOfWeek">
        {daysOfWeek.map((day)=>(<div key={day}>{day}</div>))}
      </div>
      <div className="days">
        {daysInMonth().map((day, index)=>(<div key={index} className={day? (isSameDay(day, new Date())) ?"day current":"day" : "empty"}>{day?day.getDate():""}</div>))}      
      </div>
     </div>
    </>
  )
}
