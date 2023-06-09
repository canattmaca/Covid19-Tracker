import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL,geoApiOptions } from "../../api";


function Search({ onSearchChange }) {
  
  const [search, setSearch] = useState(null);
  const loadOptions = (inputValue) => {
    return fetch(`${GEO_API_URL}/countries?namePrefix=${inputValue}`, geoApiOptions)
      .then((response) => response.json())
      .then((response) => {
        return{
          options: response.data.map((country )=>{ 
            return{
              label:`${country.name},${country.code}`
            }
          })
        }
      })
      .catch((err) => console.error(err));
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <AsyncPaginate
      placeholder="Search for Country"
      debounceTimeout={1000}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
}

export default Search;
