import { useState } from "react";

const User = ({name,location}) =>{
    const [count,setCount] = useState(0);
    return(
        <div>
            <h3>Name: {name}</h3>
            <h3>Count: {count}</h3>
            <button onClick={()=>setCount(count + 1)}>+</button>
            <button onClick={()=>setCount(count - 1)}>-</button>
            <h3>Location: {location}</h3>
            <h3>Date: 14/03/2024</h3>
        </div>
    )
}
export default User;