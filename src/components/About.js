import User from "./User";
import UserClass from "./UserClass";
const About = (props) =>{
    return(
        <>
        <h1>About</h1>
        <h2>This is about page</h2>
        <User name={"Vibhor Patel"} location={"Anuppur"} />
        <UserClass name={"Vibhor Patel2"} location={"Anuppur2"} />
        </>
    )
}
export default About;