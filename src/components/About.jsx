import  React  from "react";
import UserClass from "./UserClass";

class About extends React.Component{
    constructor (props){
        super(props)
    //    console.log('parent constructor');
   
    }

    componentDidMount(){
        // console.log('parent component didmount');
        
    }

    render (){
        // console.log("parent render");
  return(      
        <div>
            <h1>About</h1>
            <UserClass name={"Hamdan"}/>

        </div>
  )
    }
}

export default About;