import { useState } from "react";

const User = ({name,location}) =>{
    const [count] = useState(0);
    const [count2] = useState(1);
    return(
        <div>
            <h3>Name: {name}</h3>
            <h3>Count: {count}</h3>
            <h3>Count: {count2}</h3>
            <h3>Location: {location}</h3>
            <h3>Date: 14/03/2024</h3>
        </div>
    )
}
export default User;