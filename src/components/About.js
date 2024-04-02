import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";
class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("parent constructor called");
  }
  componentDidMount() {
    // console.log("parent componentDidMount called");
  }
  
  render() {
    return (
      <div className="about-div">
        <h1>About</h1>
        <div>
        <UserContext.Consumer>
            {(value) =><h3 className="font-bold">loggedInUser : {value.loggedInUser}</h3>}
          </UserContext.Consumer>
        </div>
        <h2>This is about page</h2>
        <User name={"Vibhor Patel"} location={"Anuppur"} />
        <UserClass  />
      </div>
    );
  }
}
export default About;
