import { AiOutlineInbox } from "react-icons/ai";
import { BsCalendarDay, BsCalendar3 } from "react-icons/bs";
// import { useRef, useEffect } from "react";
import "../styles/menu.css";
import { Link } from "react-router-dom";

const Menu = ({ showMenu, transitionEnd }) => {
  console.log(showMenu, transitionEnd);
  return (
    <aside className={`menu-aside ${showMenu ? "visible" : "hidden"}`}>
      {transitionEnd ? (
        <ul className="menu-ul">
          <li>
            <Link to="/inbox">
              <AiOutlineInbox /> Bandeja de entrada
            </Link>
          </li>
          <li>
          <Link to="/">
            <BsCalendarDay /> Hoy
          </Link>
          </li>
          <li>
          <Link to="/proximos">
            <BsCalendar3 /> Proximos
          </Link>
          </li>
        </ul>
      ) : null}
    </aside>
  );
};

export default Menu;
