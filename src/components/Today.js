import "../styles/today.css";
import { AiOutlinePlus } from "react-icons/ai";
import { useEffect, useState } from "react";

const Today = () => {
  const currentDay = new Date();
  const shortFullDate = currentDay.toLocaleString("es-Es", {
    weekday: "short",
    day: "2-digit",
    month: "short",
  });

  const shortDay = currentDay.toLocaleString("es-Es", {
    day: "2-digit",
    month: "short",
  });

  const justDay = currentDay.toLocaleDateString("es-Es", {
    weekday: "long",
  });

  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  const handlePlusClick = () => {
    setTasks([...tasks, taskInput]);
    setTaskInput("");
  };

  // useEffect(() => {
  //   console.log(tasks)
  //   tasks.push(['1'])
  // }, [tasks])

  return (
    <div className="today-container">
      <div className="today-title">
        <h3>
          Hoy <span className="little-date"> {shortFullDate}</span>{" "}
        </h3>
      </div>
      <div className="gone-tasks">
        <h2>Vencidas</h2>
        <div>
          {tasks.length > 0 ? (
            <>
              <ul>
                {tasks.map((task, index) => (
                  <li key={task.id || index}>{task}</li>
                ))}
              </ul>
              <div className="add-task">
                <p>
                  <AiOutlinePlus className="add-task-icon" />
                  <span className="add-task-text">Agregar tarea</span>
                </p>
              </div>
            </>
          ) : (
            <div className="add-task">
              <p>
                <AiOutlinePlus className="add-task-icon" />
                <span className="add-task-text">Agregar tarea</span>
              </p>
            </div>
          )}
        </div>
      </div>
      {/* <div className="today-tasks">
        <h2>
          {shortDay}
          <span> Hoy </span>
          {justDay}
        </h2>
        <div>
          <ul>
            <li>Task 1</li>
            <li>Task 2</li>
          </ul>
        </div>
      </div> */}
    </div>
  );
};

export default Today;
