import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("parent constructor called");
  }
  componentDidMount() {
    // console.log("parent componentDidMount called");
  }

  render() {
    // console.log("parent render called");
    return (
      <div className="about-div">
        <h1>About</h1>
        <h2>This is about page</h2>
        <User name={"Vibhor Patel"} location={"Anuppur"} />
        <UserClass  />
      </div>
    );
  }
}
export default About;
