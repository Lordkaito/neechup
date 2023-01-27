import '../styles/days.css'

const Days = ({ day, date }) => {
  return (
    <div className="day">
      <h3>{day} {date}</h3>
    </div>
  );
};

export default Days;
