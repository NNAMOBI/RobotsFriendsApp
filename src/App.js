import React from "react";
// import logo from './logo.svg';
import "./App.css";
// import HelloComponent from './helloReact'
// import Card from "./card";
import 'tachyons'
import {robots} from './robot'
import CardList from "./cardList";

const App = () =>{
  return (
    <div className="">
      <CardList robots={robots} />
     
    </div>
  );
}

export default App;
