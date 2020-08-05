import React from "react";
// import logo from './logo.svg';
import "./App.css";
// import HelloComponent from './helloReact'
// import Card from "./card";
import 'tachyons'
import {robots} from './robot'
import CardList from "./cardList";
import SearchBox from "./searchBox";

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      robots: robots,
      searchField: ""
    }

  }
  searchBoxOnChangeHandler=(event)=>{
   this.setState({searchField: event.target.value})
  }

  render(){
    const filterRobots = this.state.robots.filter((robot)=>{
   return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    })
    return (
      <div className="tc">
        <h1 className="f1">RobotsFriends</h1>
        <SearchBox  searchFieldChange={this.searchBoxOnChangeHandler}/>
        <CardList robots={filterRobots} />
       
      </div>
    );

  }
 
}

export default App;
