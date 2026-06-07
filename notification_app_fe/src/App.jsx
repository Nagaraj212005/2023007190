import { useState } from "react";

import Notifications from "./pages/Notifications";
import PriorityInbox from "./pages/PriorityInbox";

function App() {
  const [page, setPage] = useState("notifications");

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={() => setPage("notifications")}>
        Notifications
      </button>

      <button
        onClick={() => setPage("priority")}
        style={{ marginLeft: "10px" }}
      >
        Priority Inbox
      </button>

      <hr />

      {page === "notifications" ? (
        <Notifications />
      ) : (
        <PriorityInbox />
      )}
    </div>
  );
}

export default App;