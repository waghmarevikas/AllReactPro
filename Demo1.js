import React,{Component} from 'react';
import ReactDom from 'react-dom';
import './Demo1.css'

function CustomException(message) {
    const error = new Error(message);
    return error;
  }
  
  CustomException.prototype = Object.create(Error.prototype);

class Demo1 extends Component
{
    render()
    {
        return <div class = "maindiv_style">
               <h1> Vikas  {this.props.name} from Demo </h1>
                <p> This is my first paragraph </p>
                
               </div>
                
    }
}

export default Demo1