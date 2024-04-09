import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo : {
        id: 1,
        name: "xxxx",
        avatar_url : "jsdfisf",
      }
    };
    // console.log("child constructor called");
  }
  async componentDidMount() {
    // console.log("child componentDidMount called");
    const data = await fetch("https://api.github.com/users/VibhorPatel04");
    const json = await data.json();
    console.log(json)
    this.setState({
      userInfo : json,
    })
  }
  render() {
    // console.log("child render called");
    return (
      <div>
              <h3>Id: {this.state.userInfo.id}</h3>
              <h3>Name: {this.state.userInfo.name}</h3>
              <img className="w-40 mx-auto mt-4" src={this.state.userInfo.avatar_url} />
      </div>
    );
  }
}
export default UserClass;
