import { useState } from 'react';
import Categories from './component/Categories';
import SearchBar from './component/SearchBar';
import ShowData from './component/ShowData';
import NameData from './data/fakeInfo.json';

function App() {
  // const names = require('./data/fakeInfo.json');
  const names = NameData;

  const [firstEntry] = names;
  const allfields = Object.keys(firstEntry);
  const [id, ...field] = allfields;
  // console.log(field, id);
  // eslint-disable-next-line no-unused-vars
  const [filterName, setFilterName] = useState(names);
  const [searchResults, setSearchResults] = useState([]);
  const [selectedField, setSelectedField] = useState(field[1]);
  // Object.values(names.map((entry) => console.log(Object.keys(entry))));
  // console.log(Object.entries(names));

  return (
    <div className="App">
      <SearchBar
        content={names}
        filterName={filterName}
        setFilterName={setFilterName}
        placeholder="Search for Entry here"
        selected={selectedField}
        searchResults={searchResults}
        setSearchResults={setSearchResults}
      />
      <Categories
        content={names}
        fields={field}
        selected={selectedField}
        setSelected={setSelectedField}
      />
      <ShowData names={searchResults} />
    </div>
  );
}

export default App;
