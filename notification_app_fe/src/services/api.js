const API_URL =
  "http://4.224.186.213/evaluation-service/notifications";

export const getNotifications = async () => {
  try {
    console.log("API Request Received");

    const response = await fetch(API_URL);

    const data = await response.json();

    console.log("API Response Received");
    console.log(
      "Notification Count:",
      data.notifications.length
    );

    return data.notifications;
  } catch (error) {
    console.error(error);
    return [];
  }
};