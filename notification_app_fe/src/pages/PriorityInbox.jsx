import { useEffect, useState } from "react";
import { getNotifications } from "../services/api";
import { sortNotifications } from "../utils/priority";

function PriorityInbox() {
  const [count, setCount] = useState(10);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const data = await getNotifications();
    const sorted = sortNotifications(data);
    setNotifications(sorted);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Priority Inbox</h1>

      <select
        value={count}
        onChange={(e) => setCount(Number(e.target.value))}
      >
        <option value={10}>10</option>
        <option value={15}>15</option>
        <option value={20}>20</option>
      </select>

      {notifications.slice(0, count).map((item) => (
        <div
          key={item.ID}
          style={{
            border: "1px solid #ccc",
            margin: "10px 0",
            padding: "10px",
          }}
        >
          <h3>{item.Message}</h3>
          <p>Type: {item.Type}</p>
          <p>{item.Timestamp}</p>
        </div>
      ))}
    </div>
  );
}

export default PriorityInbox;