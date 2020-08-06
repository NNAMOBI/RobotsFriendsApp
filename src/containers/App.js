import React from "react";
// import logo from './logo.svg';
import "./App.css";
// import HelloComponent from './helloReact'
// import Card from "./card";
import axios from 'axios';
import 'tachyons'
import {robots} from '../robot' // this is an array of robots used an a mock database
import CardList from "../components/cardList";
import SearchBox from "../components/searchBox";
import Scroll from '../components/scrollCard'

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

  componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response =>{
   this.setState({
     robots: response.data
   })
    })
  .catch((err)=>{
   console.log('err', err)
    })
  }

  render(){
    const {robots, searchField} = this.state;
    const filterRobots = robots.filter((robot)=>{
   return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })
    
    return !this.state.robots ? <div><h1>Loading</h1></div> : 
    (
      <div className="tc">
        <h1 className="f1">RobotsFriends</h1>
        <SearchBox  searchFieldChange={this.searchBoxOnChangeHandler}/>
        <Scroll>
        <CardList robots={filterRobots} />
        </Scroll>
      </div>
    );

  }
 
}

export default App;
