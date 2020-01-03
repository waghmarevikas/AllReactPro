
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './Demo2.css'
const Demo2 = (props) =>
{
    return <div className = "maindiv2_style">
            <h1> Vikas from Demo2 </h1>
            <p> This is my first paragraph {props.name}</p>
            <p> using functinal Component in React js  </p> 
            </div>
}
export default Demo2