import { useState } from 'react';
import SearchBar from './component/SearchBar';
import ShowData from './component/ShowData';
import NameData from './data/fakeInfo.json';

function App() {
  // const names = require('./data/fakeInfo.json');
  const names = NameData;
  // eslint-disable-next-line no-unused-vars
  const [filterName, setFilterName] = useState(names);
  const [searchResults, setSearchResults] = useState([]);
  return (
    <div className="App">
      <SearchBar
        content={names}
        filterName={filterName}
        setFilterName={setFilterName}
        placeholder="Search for Entry here"
        searchResults={searchResults}
        setSearchResults={setSearchResults}
      />
      <ShowData names={searchResults} />
    </div>
  );
}

export default App;
