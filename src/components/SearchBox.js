import React from "react";

const SearchBox = ({ placeholder, searchChange, searchFields }) => {
  return (
    <div>
      <input
        className='pa3 ba b==green bg-lightest-blue'
        type='search'
        placeholder={placeholder}
        onChange={searchChange}
        value={searchFields}
      />
    </div>
  );
};

export default SearchBox;
