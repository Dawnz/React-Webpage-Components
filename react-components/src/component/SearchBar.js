import { useEffect, useState } from 'react';

export default function SearchBar({
  content,
  filterName,
  placeholder,
  setSearchResults,
}) {
  const [searchTerm, setSearchTerm] = useState('');
  //   console.log(content);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  useEffect(() => {
    const results = content.filter((cont) =>
      cont.first_name.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);
  console.log(content, filterName);
  return (
    <div>
      <p> Hello World Searchbar</p>
      {/* <label htmlFor="search">Hello World Searchbar</label> */}
      <input
        name="SearchBar"
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
}
