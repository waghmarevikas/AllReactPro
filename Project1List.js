import React from 'react';
//import Project1List from './Project1';
const Project1List = (props) =>{
    return(
        <div className = "project_style ma4 bg-light-purple dib pa3">
            <img src =" https://joeschmoe.io/api/v1/vik" alt="Project1"/> 
            <h1 className="tc">  {props.name} </h1>
            <p className='tc'> {props.work}</p>
        </div>

    );
}
export default Project1List