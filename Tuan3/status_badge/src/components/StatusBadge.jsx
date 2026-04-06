import "./StatusBadge.css";

const StatusBadge = ({ status }) => {
    console.log(status)
  return (
    <span className={`badge ${status}`}>
      {status.toUpperCase()}
    </span>
  );
};

export default StatusBadge;
