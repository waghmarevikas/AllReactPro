
import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Img from 'react-image';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';
//import { IconButton } from '@material-ui/core';
import '../CssFile/Registration.css';
import firebase from './FireBase';
import { createUser , } from './FirebaseServices';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { InputAdornment,IconButton} from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";

const OverRidedTextField  = withStyles({
    root : {
      '& .MuiFormLabel-root':{
        lineHeight: 0,
  },}
  })(TextField); 


class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname : "",
      lastname : "",
      
      emailId : "",
      password : "",
      confirm : "",
      firstNameError : "",
      lastNameError : "",
      emailError : "",
      
      passError : "",
      confirmError : "",
      showPassword : false, 
    };

    
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
    //this.dismissError = this.dismissError.bind(this);
  }

  // dismissError() {
  //   this.setState({ error: '' });
  // }

  handleSubmit (evt) {
    evt.preventDefault();
    
    if(!this.state.firstname ){
       this.setState({
         firstNameError:'First Name is require'});
    }
    if(!this.state.lastname){
       this.setState({
         lastNameError:'Last Name is require'})
    } 
    if(!this.state.emailId){
       this.setState({ 
        emailError: ' EmailID  is required' });
    }
    if(!this.state.password){
      this.setState({ 
        passError: 'Password is required' });
    }
    if(!this.state.confirm){
      if(this.state.password != this.state.confirm){
       return this.setState({confirmError:'Pass word is require '})
      }
      //this.setState({confirmError:' Confirm Password is require '})
    }

    var obj = {
      firstname : this.state.firstname,
      lastname : this.state.lastname, 

    }
     createUser(this.state.emailId,this.state.password,obj,(responce)=>{
      alert (responce);
     });
  }

  handleFirstNameChange(evt) {
    this.setState({
      firstname: evt.target.value,
    });
  }

  handleLastNameChange(evt) {
    this.setState({
      lastname: evt.target.value,
    });
  }

  handleEmailChange(evt) {
    this.setState({
      emailId: evt.target.value,
    });
  }

  handlePasswordChange(evt) {
    this.setState({
      password: evt.target.value,
    });
  }

  handleConfirmPasswordChange(evt){
    this.setState({
      confirm:evt.target.value,
    });
  }

  

  render() {
    return (
      <div>
        
      <div className = "Registration"   >
          <div className = "h2div">
          Fundoo App 
          </div>
          <div className = "h1div">
          Create your Fundoo Account
          </div>

          <div className = "space">  
          </div>

        <div className = "name">
          < OverRidedTextField 
              id = "outlined-basic"   
              label = "First Name" 
              error = {this.state.firstNameError === '' ? false : true} 
              id = "standard-error" variant = "outlined" 
              value = {this.state.firstname} 
              onChange = {this.handleFirstNameChange} 
              helperText = {this.state.firstNameError}
          />
           
          <OverRidedTextField 
              id = "outlined-basic"  
              label = "Last Name" 
              error = {this.state.lastNameError === '' ? false : true} 
              id = "standard-error" variant="outlined" 
              value = {this.state.lastname} 
              onChange = {this.handleLastNameChange} 
              helperText = {this.state.lastNameError} />
        </div>

        <div className = "email">
          <OverRidedTextField 
              id = "outlined-basic" 
              type = "email" label = "Email ID" 
              error = {this.state.emailError === '' ? false : true} 
              id = "standard-error" 
              variant = "outlined" 
              value = {this.state.emailId} 
              onChange = {this.handleEmailChange} 
              helperText = {this.state.emailError}/>
        </div>

        <div className = "name">
          < OverRidedTextField 
                id = "outlined-basic" 
                type = "password" label = "PassWord" 
                error = {this.state.passError === '' ? false : true} 
                id = "standard-error"  variant = "outlined" 
                value = {this.state.password} 
                onChange = {this.handlePasswordChange} 
                helperText = {this.state.passError} 
            />
          < OutlinedInput 
                
                id = "outlined-adornment-password" 
                type ={!this.state.showPassword ? "password" : "text"}
                //error= {!this.state.confirmError ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="middle">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick = {() => {
                      this.setState({showPassword :!this.state.showPassword})
                      }}
                      edge="end">
                      {this.state.showPassword ? 
                      <VisibilityIcon /> : <VisibilityOffIcon />}
                    </IconButton>
                  </InputAdornment>
                }
                label = "confirm PassWord" 
                error = {this.state.confirmError === '' ? false : true} 
                //id = "standard-error"  
                variant = "outlined" 
                value = {this.state.confirm} 
                onChange = {this.handleConfirmPasswordChange} 
                // helperText = {this.state.confirmError} />
                />
            {/* </div> */}
          </div>
    
         <div className = "buttondiv">
          <Button variant = "contained" 
          color = "primary" 
          onClick = {this.handleSubmit} >
          Registration
         </Button>
          </div>

        <div className = "name">
          <Button color = "primary" onClick = {()=>{
            this.props.history.push('/LoginPage')
            }} > Sign In </Button>
          <Button color = "primary" onClick = {()=>{
            this.props.history.push('/ForgotPassword')
            }} > Forgot Password </Button>
        </div>
        
      </div>
        
      </div>
      
    );
  }
}

export default Registration;