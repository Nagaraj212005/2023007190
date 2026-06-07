export const getPriority = (type) => {
  switch (type.toLowerCase()) {
    case "placement":
      return 3;

    case "result":
      return 2;

    case "event":
      return 1;

    default:
      return 0;
  }
};

export const sortNotifications = (
  notifications
) => {
  return [...notifications].sort(
    (a, b) => {

      const priorityDiff =
        getPriority(b.Type) -
        getPriority(a.Type);

      if (priorityDiff !== 0) {
        return priorityDiff;
      }

      return (
        new Date(b.Timestamp) -
        new Date(a.Timestamp)
      );
    }
  );
};