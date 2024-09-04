import React from "react";
import UserContext from "../utils/UserContext";
class UserClass extends React.Component{
    constructor(props){
  super(props)
  this.state={
    userInfo:''
  }
//   console.log(this.props.name+'child constructor');
  
    }

   async componentDidMount(){
        // console.log(this.props.name+'child componentDidMount');
        const data=await fetch("https://api.github.com/users/hamdanzbr")
        const json=await data.json()
        // console.log(json);
        this.setState({
            userInfo:json
        })
        
    }
    render(){
        const {name,location,login}=this.state.userInfo
        // debugger;
        // const {count}=this.state
        // console.log(name+'child render');
        
        return(
            <div>
                <h1>Namaste javascript</h1>
                <h2>{name} </h2>
                <h4>{login}</h4>
                <h3>{location}</h3>  
                <UserContext.Consumer>
                    {({loggedInUser})=>(<h1>{loggedInUser}</h1>)}
                </UserContext.Consumer>
               
            </div>
        )
    }
}

export default UserClass;
