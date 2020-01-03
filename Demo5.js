import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'; 
import { IconContext } from "react-icons";
import EmailIcon from '@material-ui/icons/Email';
import firebase from 'firebase';

class Demo5 extends Component {
  constructor(props) 
  {
    super(props);
    this.state = {
        emailID: '',
        emailError: '',
    };
    this.handleEmailIdChange = this.handleEmailIdChange.bind(this);
    this.dismissError = this.dismissError.bind(this);
  }

  dismissError=()=> 
  {
    this.setState({ error : '' });
  }

  handleSubmit=(evt)=> 
  {
    evt.preventDefault();
    if (!this.state.emailID) {
        this.setState({ 
        emailError: 'Email  is required' });
    }
    else {
        this.resetPassword(this.state.emailID);
    }
    // // else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(!this.state.username))
    // {
    //   this.setState({userError: 'Invalid email id ...'})
    // }
  }

  handleEmailIdChange=(evt)=> 
  {
    this.setState({
      emailID : evt.target.value,
    },()=>{});
  }

resetPassword = (email) =>{
firebase.auth().sendPasswordResetEmail(email).then((success)=>{
    alert("Password send on register email Id")
    this.props.history.push('/');
})
.catch((error)=>{
alert(" Error... Please Enter Register Email Id only ")
})
}
  render() {
    return (
      <div >
      <div className = "Loginpage">
        <form className = "main" 
            onSubmit = {this.handleSubmit} 
            style = {{  height: '70vh', width:'70vh'} }>

            <h1>Forgot Password</h1>

            <div className = "username" >
            <TextField id = "outlined-basic" 
                type = "text" 
                error = { this.state.emailError === '' ? false : true } 
                id = "standard-error" 
                variant = "outlined" 
                label = "email"
                value = {this.state.emailID} 
                onChange = {this.handleEmailIdChange} 
                helperText = { this.state.emailError } /> <br/>

            <Button variant = "contained" 
                color = "primary" 
                onClick={this.handleSubmit} >
                send
            </Button>
         </div>
        </form>
      </div>
    </div>
    );
  }
}
export default Demo5;