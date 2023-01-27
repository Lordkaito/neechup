import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainCalendar from "./components/MainCalendar.js";
import Menu from "./components/Menu";
import SingleTask from "./components/SingleTask";
import SingleSubTask from "./components/SingleSubTask";
import Inbox from "./components/Inbox";
import Nabvar from "./components/Navbar";
import { useState } from "react";
import Today from "./components/Today";

const App = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [transitionEnd, setTransitionEnd] = useState(false)
  return (
    <div className="App">
      <Router>
        <Nabvar showMenu={showMenu} setShowMenu={setShowMenu} setTransitionEnd={setTransitionEnd} transitionEnd={transitionEnd} />
        <div className="main-container">
          <Menu showMenu={showMenu} setShowMenu={setShowMenu} transitionEnd={transitionEnd}/>
          <Routes>
            <Route exact path="/" element={<Today />} />
            <Route exact path="/proximos" element={<MainCalendar />} />
            <Route exact path="/inbox" element={<Inbox />} />
            <Route exact path="/task" element={<SingleTask />} />
            <Route exact path="/subtask" element={<SingleSubTask />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
