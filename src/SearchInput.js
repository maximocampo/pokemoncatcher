import React, {useState} from 'react';

const SearchInput = ({search}) => {
  const [value, setValue] = useState('pikachu');
  
  function handleChange(e) {
    setValue(e.target.value)
  }
  
  function onSubmit(e) {
    e.preventDefault();
    search(value)
  }
  
  return (
    <form style={{marginTop: 30, display: 'flex', justifyContent: 'center'}} onSubmit={onSubmit}>
      <input
        onChange={handleChange}
        className="searchinput"
        type="text"
        placeholder="Search Pokemon"
      />
      <button
        className="searchinputbutton"
        onClick={() => search(value)}
      >Catch!</button>
    </form>
  );
};

export default SearchInput;