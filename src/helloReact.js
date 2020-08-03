import React from "react";



const HelloComponent = (props) => {
    return (
        <div>
          <h1>Hello React</h1>
          <h2>I am happy to use you again</h2>
          <h3>{props.name}</h3>
        </div>
      );
}
  
   


export default HelloComponent;
