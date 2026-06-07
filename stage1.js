const notifications = [
  {
    ID: "1",
    Type: "Result",
    Message: "mid-sem",
    Timestamp: "2026-04-22 17:51:30",
  },
  {
    ID: "2",
    Type: "Placement",
    Message: "CSX Corporation hiring",
    Timestamp: "2026-04-22 17:51:18",
  },
  {
    ID: "3",
    Type: "Event",
    Message: "farewell",
    Timestamp: "2026-04-22 17:51:06",
  },
  {
    ID: "4",
    Type: "Placement",
    Message: "AMD hiring",
    Timestamp: "2026-04-22 17:49:42",
  },
  {
    ID: "5",
    Type: "Result",
    Message: "project-review",
    Timestamp: "2026-04-22 17:50:42",
  },
];

function getWeight(type) {
  switch (type) {
    case "Placement":
      return 3;
    case "Result":
      return 2;
    case "Event":
      return 1;
    default:
      return 0;
  }
}

function sortNotifications(data) {
  return data.sort((a, b) => {
    const weightDiff =
      getWeight(b.Type) - getWeight(a.Type);

    if (weightDiff !== 0) return weightDiff;

    return (
      new Date(b.Timestamp) -
      new Date(a.Timestamp)
    );
  });
}

const top10 = sortNotifications(notifications).slice(0, 10);

console.table(top10);