function NotificationCard({
  notification,
  onMarkViewed,
}) {
  return (
    <div
      style={{
        border: "1px solid white",
        padding: "10px",
        margin: "10px",
      }}
    >
      <h3>{notification.Message}</h3>

      <p>Type: {notification.Type}</p>

      <p>
        Time: {notification.Timestamp}
      </p>

      <p>
        Status:
        {notification.viewed
          ? " Viewed"
          : " Unread"}
      </p>

      <button
        onClick={() =>
          onMarkViewed(notification.ID)
        }
      >
        Mark Viewed
      </button>
    </div>
  );
}

export default NotificationCard;