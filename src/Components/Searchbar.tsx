interface SearchbarProps {
  searchedValue: string;
  handleChange: (value: string) => void;
}

function Searchbar({ searchedValue, handleChange }: SearchbarProps) {
  return (
    <div>
      <input
        type="text"
        value={searchedValue}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
}

export default Searchbar;
