export const useNotification = (title, options) => {
  const fireNotif = () => {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        new Notification(title, options);
      } else {
        return;
      }
    });
  };
  return fireNotif;
};
