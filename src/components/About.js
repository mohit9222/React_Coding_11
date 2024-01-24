import React from "react";
// import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

// const About = () => {
//   return (
//     <div className="about">
//       <h1>About</h1>
//       <h2>Testing the Route</h2>
//       {/* <User name={"Mohit (function)"} /> */}
//       <UserClass name={"Mohit (class)"} location={"Bangalore Class"} />
//     </div>
//   );
// };

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent component is mounted");
  }

  render() {
    console.log("Parent Render");
    return (
      <div className="about">
        <h1>About</h1>
        <h2>Testing the Route</h2>
        <UserContext.Consumer>
          {(data) => {
            console.log(data.loggedInUser);
          }}
        </UserContext.Consumer>
        {/* <User name={"Mohit (function)"} /> */}
        <UserClass name={"Mohit (class)"} location={"Bangalore Class"} />
        {/* <UserClass name={"Mohit 2(class)"} location={"Bangalore Class"} /> */}
      </div>
    );
  }
}

export default About;
