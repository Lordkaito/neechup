import { useState, useEffect } from "react";
import Days from "./Days";
import '../styles/calendar.css'
const MainCalendar = () => {
  const dayArr = ['lun', 'mar', 'mier', 'jue', 'vier','lun', 'mar', 'mier', 'jue', 'vier','lun', 'mar', 'mier', 'jue', 'vier','lun', 'mar', 'mier', 'jue', 'vier','lun', 'mar', 'mier', 'jue', 'vier','lun', 'mar', 'mier', 'jue', 'vier']
  return (
    <div className="main-calendar">
      {dayArr.map((dayt, index) => {
        return <Days day={dayt} date={index}/>
      })}
    </div>
  );
};

export default MainCalendar;
