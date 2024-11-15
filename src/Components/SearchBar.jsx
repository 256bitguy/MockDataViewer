import  { forwardRef } from "react";

const SearchBar = forwardRef(({ searchQuery, setSearchQuery }, ref) => {
  return (
    <input
      ref={ref}
      type="text"
      placeholder="Search by name or email..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="search-bar"
    />
  );
});

export default SearchBar;
