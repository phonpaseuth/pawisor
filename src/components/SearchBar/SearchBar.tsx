import React, { useState } from "react";
import clsx from "clsx";
import XIcon from "../../assets/icons/delete.svg";
import SearchIcon from "../../assets/icons/search.svg";
import "./SearchBar.css";

type SearchBarProps = {
  onSearch: (searchedText: string) => void;
  showError: boolean;
  removeError: () => void;
  className?: string;
};

function SearchBar(props: SearchBarProps) {
  const { onSearch, showError, removeError, className } = props;
  const [text, setText] = useState<string>("");

  function handleChange(e: any) {
    setText(e.target.value);
    removeError();

    // Show all data immediately when a user delete all the text
    if (e.target.value === "") {
      onSearch("");
    }
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    onSearch(text.toLowerCase());
  }

  function handleCancel() {
    setText("");
    onSearch("");
  }

  return (
    <form className={clsx("search-bar", className)} onSubmit={handleSubmit}>
      <label className="search-bar__label">
        <span className="search-bar__label-text">Search</span>
        <input
          className="search-bar__label-input"
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="Search name"
        />

        <div className="search-bar__icons-container">
          <span
            className={clsx("search-bar__label-icon--delete", {
              "search-bar__label-icon--delete--hide": text.length === 0,
            })}
            onClick={handleCancel}
          >
            <img src={XIcon} alt="remove search field" />
          </span>
          <span
            className={clsx("search-bar__label-icon--pipe", {
              "search-bar__label-icon--pipe--hide": text.length === 0,
            })}
          >
            |
          </span>
          <span
            className="search-bar__label-icon--search"
            onClick={handleSubmit}
          >
            <img src={SearchIcon} alt="search" />
          </span>
        </div>

        <div
          className={clsx("search-bar__fail-search", {
            "search-bar__fail-search--hidden": !showError,
          })}
        >
          <i>{text}</i> doesn't exist
        </div>
      </label>
    </form>
  );
}

export default SearchBar;
