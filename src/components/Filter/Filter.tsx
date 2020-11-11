import React from "react";
import "./Filter.css";

type FilterProps = {
  sortOption: string;
  onSelect: (option: string) => void;
};

function Filter(props: FilterProps) {
  const { onSelect } = props;

  return (
    <form className="filter">
      <label>
        <span className="filter__label">Sort</span>
        <select onChange={(e) => onSelect(e.target.value)}>
          <option value="Ascending">Sort ascending</option>
          <option value="Descending">Sort descending</option>
        </select>
      </label>
    </form>
  );
}

export default Filter;
