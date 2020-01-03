import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'; 
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { IconContext } from "react-icons";
import EmailIcon from '@material-ui/icons/Email';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { InputAdornment, IconButton, FormControl, FormHelperText } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import firebase from 'firebase';
import AccountCircle from '@material-ui/icons/AccountCircle';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import { withStyles } from "@material-ui/core/styles";

const OverRidedTextField  = withStyles({
    root : {
      '& .MuiFormLabel-root':{
        lineHeight: 0,
  },}
  })(TextField); 
  
class LoginPage extends Component 
{
  constructor(props) 
  {
    super(props);
    this.state = {
      username: '',
      password: '',
      userError: '',
      passError:'',
      showPassword: false,
    };

    this.handleUserChange = this.handleUserChange.bind(this);
    this.handlePassChange = this.handlePassChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
  };

      dismissError() 
      {
        this.setState({ error: '' });
      }

      handleSubmit(evt) 
      {
        evt.preventDefault();
        if (!this.state.username){
            this.setState({ 
            userError: 'Username is required' });
        }
        if(!this.state.password){
            this.setState({ 
            passError: 'Password is required' });
        }
        else{
            this.chackeEmailPasswordAuth(this.state.username,this.state.password);
        }
      }

      chackeEmailPasswordAuth = (email,password) =>{
          firebase.auth().signInWithEmailAndPassword(email,password).then((sucess)=>{
          alert("Email Id and password is Authentic....")
          this.props.history.push('/Dashboard')
          })
          .catch((error)=>{
            alert(" Error.... Invalid User ")
          })
      }

      handleUserChange(evt) 
      {
        this.setState({
          username: evt.target.value,});
      };

      handlePassChange(evt) 
      {
        this.setState({
          password: evt.target.value,});
      }

  render() {
    return (
      <div >
      <div className = "Loginpage">

        <form className = "signIn" 
        onSubmit = {this.handleSubmit}>

          <div className = "titleForgot"> 
            <h1> Fundoo Login </h1> 
          </div>
        
        <div className = "username" >
          <FormControl>
            <label>EmailId</label>
            
          </FormControl>
          <OverRidedTextField 
            id = "outlined-basic" 
            label = "Email Id" type = "text" 
            error = { this.state.userError === '' ? false : true } 
            id = "standard-error" 
            variant = "outlined" 
            value = {this.state.username} 
            onChange = {this.handleUserChange} 
            helperText = { this.state.userError } /> <br/>
          </div>
      
        <div className = "password-icon">
          
        <FormControl>
        <label>Password</label>
        <InputLabel htmlFor="outlined-adornment-password"></InputLabel>
          <OutlinedInput
            value = {this.state.password}
            onChange = {this.handlePassChange}
            id = "outlined-adornment-password"
            type = {this.state.showPassword ? 'text' : 'password'}
            endAdornment = {
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick = {() => {
                  this.setState({showPassword:!this.state.showPassword})
                  }}
                  edge="end">
                  {this.state.showPassword ? 
                  <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </InputAdornment>
            }
          />
          <FormHelperText style={{color: 'red'}}>{this.state.passError}</FormHelperText>
          </FormControl>
          </div>

          <div className = "submit">
          <Button variant = "contained" 
          color = "primary" 
          onClick={this.handleSubmit} >
             Login
         </Button>

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

export default LoginPage;