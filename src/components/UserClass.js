import React from "react";

class UserClass extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            count : 2,
            count2 : 3,
        }
    }
    render(){
        return(
            <div>
                <h3>Name: {this.props.name}</h3>
                <h3>Count: {this.state.count}</h3>
                <h3>Count: {this.state.count2}</h3>
                <h3>Location: {this.props.location}</h3>
                <h3>Date: 14/03/2024</h3>
            </div>
        )
    }
} 
export default UserClass;