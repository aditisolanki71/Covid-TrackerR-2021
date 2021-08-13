import React, { useState, useEffect } from 'react';
import { fetchCountries } from '../../api/index';
const StatePicker = ({ handleStateChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      setFetchedCountries(await fetchCountries());
    };
    fetchApi();
  }, [setFetchedCountries]);

  return (
    <div style={{ margin: '10px' }}>
      <select
        class="form-select"
        aria-label="Default select example"
        onChange={(e) => {
          handleStateChange(e.target.value);
        }}
      >
        {fetchedCountries.map((obj, i) => (
          <option key={i} value={`${obj.title},${obj.id}`} countryId={obj.id}>
            {obj.title}
          </option>
        ))}
      </select>
    </div>
  );
};
export default StatePicker;
