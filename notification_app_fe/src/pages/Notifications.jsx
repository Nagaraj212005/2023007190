import { useEffect, useState } from "react";

import { getNotifications } from "../services/api";

import NotificationCard from "../components/NotificationCard";
import FilterBar from "../components/FilterBar";
import Pagination from "../components/Pagination";

function Notifications() {
  const [notifications, setNotifications] =
    useState([]);

  const [selectedType, setSelectedType] =
    useState("all");

  const [currentPage, setCurrentPage] =
    useState(1);

  const pageSize = 10;

  useEffect(() => {
    loadNotifications();
  }, []);

  const loadNotifications = async () => {
    const data =
      await getNotifications();

    const updatedData = data.map(
      (item) => ({
        ...item,
        viewed: false,
      })
    );

    setNotifications(updatedData);
  };

  const markViewed = (id) => {
    const updated =
      notifications.map((item) =>
        item.ID === id
          ? {
              ...item,
              viewed: true,
            }
          : item
      );

    setNotifications(updated);
  };

  const filteredNotifications =
    selectedType === "all"
      ? notifications
      : notifications.filter(
          (item) =>
            item.Type === selectedType
        );

  const totalPages = Math.max(
  1,
  Math.ceil(
    filteredNotifications.length /
    pageSize
  )
);

  const startIndex =
    (currentPage - 1) * pageSize;

  const currentNotifications =
    filteredNotifications.slice(
      startIndex,
      startIndex + pageSize
    );

    console.log(notifications);
    console.log(filteredNotifications);
    console.log(currentNotifications);

  return (
    <div
      style={{
        padding: "20px",
      }}
    >
      <h1>Notifications</h1>

      <FilterBar
        selectedType={selectedType}
        setSelectedType={
          setSelectedType
        }
      />

      <br />
      <br />

      {currentNotifications.map(
        (notification) => (
          <NotificationCard
            key={notification.ID}
            notification={
              notification
            }
            onMarkViewed={
              markViewed
            }
          />
        )
      )}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={
          setCurrentPage
        }
      />
    </div>
  );
}

export default Notifications;