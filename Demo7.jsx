import React,{Component} from 'react';
import { Button } from '@material-ui/core';

class Demo7 extends Component{

    constructor(props){
        super(props)
        this.state = {
            count : 0,

        }
        
    }
    incrementCount = () => {
        this.setState(prevState =>{
            return { count : prevState.count +1 }
        })
    }
    render(){
        const {count} = this.state;
        return(
            <div>
                hello Demo7
                <br></br>
                <div>
                <Button onClick = {this.incrementCount}>count {count} click</Button>
                </div>

            </div>
        )
    }
}

export default Demo7;