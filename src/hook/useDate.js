export const useDate = (element) => {
  const dateNow = new Date();
  const datePost = new Date(element.createdAt);
  let timeLaps = Math.abs(dateNow - datePost) / 1000;
  const days = Math.floor(timeLaps / 86400);
  timeLaps = timeLaps - days * 86400;
  const hours = Math.floor(timeLaps / 3600) % 24;
  timeLaps = timeLaps - hours * 3600;
  const minutes = Math.floor(timeLaps / 60) % 60;
  timeLaps = timeLaps - minutes * 60;
  return { days, hours, minutes };
};
