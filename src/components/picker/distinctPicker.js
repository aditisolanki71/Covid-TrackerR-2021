import React, { useState, useEffect } from 'react';
import { fetchCountries } from '../../api/index';
import distinct from '../../distinctdb';
const DistinctPicker = ({ handleDistinctChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      setFetchedCountries(await fetchCountries());
    };
    fetchApi();
  }, [setFetchedCountries]);

  return (
    <div>
      <select
        class="form-select"
        aria-label="Default select example"
        onChange={(e) => {
          handleDistinctChange(e.target.value);
        }}
      >
        {distinct.map((obj, i) => (
          <option key={i} value={`${obj.district_id},${obj.state_id}`}>
            {obj.district_name}
          </option>
        ))}
      </select>
    </div>
  );
};
export default DistinctPicker;
