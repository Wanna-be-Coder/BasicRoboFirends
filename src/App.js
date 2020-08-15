import React, { useState, useEffect } from "react";
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";
import Scroll from "./components/extras/Scroll";
import MyErrorBoundary from "./components/extras/MyErrorBoundary";
import "./App.css";

function App() {
  const [info, setInfo] = useState([]);
  const [searchFields, setSearch] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((robots) => {
        setInfo(robots);
      });
  }, []);
  const onChangeSearch = (event) => {
    setSearch(event.target.value);
  };

  const filterRobots = info.filter((robots) =>
    robots.name.toLowerCase().includes(searchFields.toLowerCase())
  );
  return (
    <div className='tc'>
      <h1 className='f1'>RoboFriends</h1>
      <SearchBox
        placeholder='Search Robot'
        searchChange={onChangeSearch}
        searchFields={searchFields}
      />
      <br />
      {info.length === 0 ? (
        <h1>Loading</h1>
      ) : (
        <Scroll>
          <MyErrorBoundary>
            <CardList robots={filterRobots} />
          </MyErrorBoundary>
        </Scroll>
      )}
    </div>
  );
}

export default App;
