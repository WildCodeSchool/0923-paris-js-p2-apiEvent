// import { useState } from "react";
import * as React from "react";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
// import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
// import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";

export default function Calendar({ filters, setFilters }) {
  const currentDate = new Date();

  function formatDateForCalendar(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

  const formattedDateForCalendar = formatDateForCalendar(currentDate);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={[
          "DatePicker",
          "MobileDatePicker",
          "DesktopDatePicker",
          "StaticDatePicker",
        ]}
      >
        <DemoItem label="">
          <DatePicker
            disablePast
            defaultValue={dayjs(formattedDateForCalendar)}
            value={filters.date ? dayjs(filters.date) : null}
            onChange={(newDate) =>
              setFilters({
                ...filters,
                date: newDate ? newDate.format("YYYY/MM/DD") : null,
              })
            }
          />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
}
