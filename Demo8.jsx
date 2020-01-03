import React ,{ Component } from "react";
import {Button} from '@material-ui/core';
class Demo8 extends Component{
    constructor (){
        super()
            this.state = {
                demo : 'hi...'
            }
        
    }

    handleChange (){
        this.setState({
            demo:'hello'
        })
    }

    render () {
        return (
            <div className = 'App' >
                <h1>{this.state.demo}</h1>
                <Button onClick = { ()=> this.handleChange() } >Click</Button>
            </div>
        )
    }
}
export default Demo8;