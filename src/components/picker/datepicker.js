import React, { useState, useEffect } from 'react';
import { fetchDates } from '../../api/index';
const DatePicker = ({ handleDateChange }) => {
  const [fetchedDates, setFetchedDates] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      setFetchedDates(await fetchDates());
    };
    fetchApi();
  }, [setFetchedDates]);

  return (
    <div style={{ margin: '10px' }}>
      <select
        class="form-select"
        aria-label="Default select example"
        onChange={(e) => {
          handleDateChange(e.target.value);
        }}
      >
        {fetchedDates.map((date, i) => (
          <option key={i} value={date}>
            {date}
          </option>
        ))}
      </select>
    </div>
  );
};
export default DatePicker;
