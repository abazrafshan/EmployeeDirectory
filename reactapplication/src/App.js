import React from 'react';
import './App.css';
import Heading from './components/Heading';
import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';

function App() {
  return (
    <div className="">
      <Heading/><br></br>
      <SearchForm/>
      {/* <SearchResults/> */}
    </div>
  );
}

export default App;
