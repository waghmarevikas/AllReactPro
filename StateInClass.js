import React,{Component} from 'react';
class StateInClass extends Component
{
    state = {
        name:"vikas",
        roll:this.props.roll
    };
    render(){
        return(
            <div>
                <h1>Hello from Direct inside class</h1>
                <h2>name is {this.state.name}</h2>
                <h2>roll no is {this.state.roll}</h2>                
            </div>
        )
    }
} 
export default StateInClass