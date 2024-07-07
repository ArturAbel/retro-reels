import { useEffect, useState } from "react";

import "./SearchYear.css";

export const SearchYear = ({ setFilterData, data }) => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setFilterData(data);
  }, [data, setFilterData]);

  const handleSearch = (e) => {
    const search = e.target.value;
    setSearchTerm(search);

    if (search === "") {
      setFilterData(data);
      return;
    }

    const filterData = data.filter(
      (object) => parseInt(object.year) === parseInt(search)
    );
    setFilterData(filterData);
  };

  return (
    <div className="search-by-year">
      <input
        className="add-input search-by-year-input"
        placeholder={"Enter Year"}
        onChange={handleSearch}
        value={searchTerm}
        type="number"
        max={2000}
        min={1870}
      />
    </div>
  );
};
