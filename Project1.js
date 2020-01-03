import React from 'react';
import './Project1.css'
import 'tachyons';
import Project1List from './Project1List'
const Project1 = (props) =>
{
    return( 
        <div> 
            <h1>Welcome in ReactJs </h1>
            <Project1List/>
            <Project1List/>
            <Project1List/>
            <Project1List/>
            <button>Subcribe</button> 
        </div>
    );
}
export default Project1;