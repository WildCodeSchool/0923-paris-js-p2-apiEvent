import useAllEventsContext from "../../contexts/AllEvents";
import "./SearchDate.css";
import Calendar from "../Calendar/Calendar";

function SearchDate({ filters, setFilters }) {
  const { dataEvents, setFilteredData } = useAllEventsContext();
  const currentDate = new Date();
  const currentDayOfWeek = currentDate.getDay();

  const daysUntilNextSaturday =
    6 - currentDayOfWeek + (currentDayOfWeek === 0 ? 6 : 0);
  const nextSaturday = new Date(currentDate);
  nextSaturday.setDate(currentDate.getDate() + daysUntilNextSaturday);

  const daysUntilNextSunday =
    7 - currentDayOfWeek + (currentDayOfWeek === 0 ? 7 : 0);
  const nextSunday = new Date(currentDate);
  nextSunday.setDate(currentDate.getDate() + daysUntilNextSunday);

  const daysUntilNextMonday = 7 - currentDate.getDay() + 1;
  const nextMonday = new Date(currentDate);
  nextMonday.setDate(currentDate.getDate() + daysUntilNextMonday);

  // const numberOfDays = 30;
  // const datesAfterNextSunday = Array.from(
  //   { length: numberOfDays },
  //   (_, index) => {
  //     const nextDate = new Date(nextMonday);
  //     nextDate.setDate(nextMonday.getDate() + index);
  //     return nextDate;
  //   }
  // );

  function isToday(date) {
    return (
      date.getFullYear() === currentDate.getFullYear() &&
      date.getMonth() === currentDate.getMonth() &&
      date.getDate() === currentDate.getDate()
    );
  }

  function isTomorow(date) {
    const tomorow = new Date(currentDate);
    tomorow.setDate(currentDate.getDate() + 1);

    return (
      (date.getDate() === tomorow.getDate() &&
        date.getMonth() === tomorow.getMonth() &&
        date.getFullYear() === tomorow.getFullYear()) ||
      (date.getDate() === 1 &&
        date.getMonth() === currentDate.getMonth() + 1 &&
        date.getFullYear() === currentDate.getFullYear()) ||
      (date.getDate() === 1 &&
        date.getMonth() === 0 &&
        date.getFullYear() === currentDate.getFullYear() + 1)
    );
  }

  function isThisWeekend(date) {
    const dayOfWeek = date.getDay();
    return dayOfWeek === 6 || dayOfWeek === 0;
  }
  function isAfterThisWeekend(date) {
    // const currentDayOfWeek = currentDate.getDay();
    // const daysUntilNextSunday =
    //   7 - currentDayOfWeek + (currentDayOfWeek === 0 ? 7 : 0);
    // const nextSunday = new Date(currentDate);
    // nextSunday.setDate(currentDate.getDate() + daysUntilNextSunday);

    const givenDateObj = new Date(date);

    return givenDateObj > nextSunday;
  }
  const groupedEvents = {
    today: [],
    tomorrow: [],
    thisWeekend: [],
    later: [],
    oldEvents: [],
  };

  dataEvents.forEach((event) => {
    const eventDate = new Date(event.date1);

    if (isToday(eventDate)) {
      groupedEvents.today.push(event);
    } else if (isTomorow(eventDate)) {
      groupedEvents.tomorrow.push(event);
    } else if (isThisWeekend(eventDate)) {
      groupedEvents.thisWeekend.push(event);
    } else if (isAfterThisWeekend(eventDate)) {
      groupedEvents.later.push(event);
    } else {
      groupedEvents.oldEvents.push(event);
    }
  });

  console.info(setFilteredData);
  // function renderDateSearch(dateCategory) {
  //   if (dateCategory) {
  //     setFilteredData(dateCategory);
  //   }
  // }

  return (
    <div className="date-list">
      <Calendar filters={filters} setFilters={setFilters} />
      {/* <button
        type="button"
        className="today-filter-btn"
        onClick={() => setFilters({ ...filters, date: currentDate })}
      >
        Today
      </button>
      <button
        type="button"
        className="tomorow-filter-btn"
        onClick={() =>
          setFilters({
            ...filters,
            date: currentDate.setDate(currentDate.getDate() + 1),
          })
        }
      >
        Tomorow
      </button>
      <button
        type="button"
        className="we-filter-btn"
        onClick={() =>
          setFilters({
            ...filters,
            date: [nextSaturday, nextSunday],
          })
        }
        // onClick={() => renderDateSearch(groupedEvents.thisWeekend)}
      >
        This Weekend
      </button>
      <button
        type="button"
        className="later-filter-btn"
        onClick={() =>
          setFilters({
            ...filters,
            date: datesAfterNextSunday,
          })
        }
        // onClick={() => renderDateSearch(groupedEvents.later)}
      >
        Later
      </button> */}
    </div>
  );
}

export default SearchDate;
