import { ChangeEvent } from "react";
import SearchIcon from "../assets/svg/Search";

interface SearchbarProps {
  searchedValue: string;
  handleChange: (value: string) => void;
}

function Searchbar({ searchedValue, handleChange }: SearchbarProps) {
  function onChange(e: ChangeEvent<HTMLInputElement>) {
    handleChange(e.target.value);
  }
  return (
    <div className="relative my-4">
      <input
        type="text"
        value={searchedValue}
        onChange={onChange}
        className="w-full border h-8 pl-8"
        placeholder="Поиск по названию статьи"
      />
      <SearchIcon />
    </div>
  );
}

export default Searchbar;
