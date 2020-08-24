import React, { useEffect } from "react";
import CardList from "../CardList";
import SearchBox from "../SearchBox";
import Scroll from "../extras/Scroll";
import MyErrorBoundary from "../extras/MyErrorBoundary";
import { setSearchField, requestRobots } from "../../action";
import { connect } from "react-redux";
import "./App.css";

const mapStateToProps = (state) => {
  return {
    searchFields: state.searchRobots.searchFields,
    isPending: state.requestRobots.isPending,
    robots: state.requestRobots.robots,
    error: state.requestRobots.error,
  };
};
const mapDispatchtoProps = (dispatch) => {
  return {
    onChangeSearch: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => requestRobots(dispatch),
  };
};
function App(props) {
  const {
    searchFields,
    onChangeSearch,
    onRequestRobots,
    robots,
    isPending,
  } = props;

  useEffect(() => {
    onRequestRobots();
  }, [onRequestRobots]);

  const filterRobots = robots.filter((robot) =>
    robot.name.toLowerCase().includes(searchFields.toLowerCase())
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
      {isPending ? (
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
