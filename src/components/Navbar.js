import { Link } from "react-router-dom";
import "../styles/navbar.css";
import { AiOutlineHome } from "react-icons/ai";
import { FaBars } from "react-icons/fa";

const Nabvar = ({ showMenu, setShowMenu, transitionEnd, setTransitionEnd }) => {
  const showMenuFunc = () => {
    setShowMenu(!showMenu);
    if (!transitionEnd) {
      setTimeout(() => {
        setTransitionEnd(!transitionEnd);
      }, 200);
    } else {
      setTransitionEnd(!transitionEnd);
    }
  };

  return (
    <nav id="navbar">
      <ul className="nav-ul">
        <li onClick={showMenuFunc}>
          <FaBars className="trial" />
        </li>
        <li>
          <Link to="/">
            <AiOutlineHome />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nabvar;
