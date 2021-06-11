import React from "react";
import { useDate } from "../../hook/useDate";

const Date = ({ element }) => {
  const { days, hours, minutes } = useDate(element);
  return (
    <div>
      {days > 0 && <span>Il y a {days} jours </span>}
      {days === 0 && hours > 0 && <span>Il y a {hours} heures </span>}
      {days === 0 && hours === 0 && <span>Il y a {minutes} minutes</span>}
    </div>
  );
};

export default Date;
