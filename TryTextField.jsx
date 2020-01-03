import React,{Component} from 'react';
import { TextField } from '@material-ui/core';

class TryTextField extends Component{
    render(){
        return(
            <div>
                <TextField
                label = "Try"
                variant = 'outlined'
                />
            </div>
        )
    }
}

export default TryTextField;