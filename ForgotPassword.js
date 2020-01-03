import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'; 
import { IconContext } from "react-icons";
import EmailIcon from '@material-ui/icons/Email';
import firebase from 'firebase';
import  '../CssFile/ForgotPassword.css';
import { withStyles } from "@material-ui/core/styles";

const OverRidedTextField  = withStyles({
    root : {
      '& .MuiFormLabel-root' : {
        lineHeight: 0,
      },
    }
  })(TextField); 

class ForgotPassword extends Component {
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
        emailError : 'Email  is required' });
    }
    else {
        this.resetPassword(this.state.emailID);
    }
    // // else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(!this.state.username))
    // {
    //   this.setState({userError: 'Invalid email id ...'})
    // }
  }

  handleEmailIdChange=(evt)=> {
    this.setState({
      emailID : evt.target.value,
    },()=>{});
  }

resetPassword = (email) =>{
  firebase.auth().sendPasswordResetEmail(email).then((success)=>{
    alert(" Password send on register email Id ")
    this.props.history.push('/');
  })
  .catch((error)=>{
      alert(" Error... Please Enter Register Email Id only ")
    })
}
  render() {
    return (
      <div >
      <div className = "mainDiv">
        <form onSubmit = {this.handleSubmit} 
            style = {{  height: '60vh', width:'60vh',border : '1px solid lightgray',borderRadius:'2px', marginBottom:'140px' } }>

            <div className = "titleForgot">
                <h1> Forgot Password </h1><br/>  
            </div>

            <div className = "username" >
            <OverRidedTextField 
                id = "outlined-basic" 
                type = "text" 
                error = { this.state.emailError === '' ? false : true } 
                id = "standard-error" 
                variant = "outlined" 
                label = "email"
                value = {this.state.emailID} 
                onChange = {this.handleEmailIdChange} 
                helperText = { this.state.emailError } /> <br/>
            
            </div>
            <div className = " button ">
            <Button variant = "contained" 
                color = "primary" 
                onClick={this.handleSubmit} >
                send
            </Button>
            </div>

            <div className = " registerButton">
              <Button color = "primary" onClick = {()=>{
                  this.props.history.push('/')
                  }} > Registration </Button>
            </div>
        </form>

      </div>
    </div>
    );
  }
}
export default ForgotPassword;