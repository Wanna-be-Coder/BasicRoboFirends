import React, { useState, useEffect } from "react";
import CardList from "../CardList";
import SearchBox from "../SearchBox";
import Scroll from "../extras/Scroll";
import MyErrorBoundary from "../extras/MyErrorBoundary";
import { setSearchField } from "../../action";
import { connect } from "react-redux";
import "./App.css";

const mapStateToProps = (state) => {
  return {
    searchFields: state.searchFields,
  };
};
const mapDispatchtoProps = (dispatch) => {
  return {
    onChangeSearch: (event) => dispatch(setSearchField(event.target.value)),
  };
};
function App(props) {
  const [info, setInfo] = useState([]);
  const { searchFields, onChangeSearch } = props;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((robots) => {
        setInfo(robots);
      });
  }, []);

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

export default connect(mapStateToProps, mapDispatchtoProps)(App);
