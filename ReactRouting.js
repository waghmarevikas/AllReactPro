import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Registration from '../components/Registration';
import LoginPage from '../components/LoginPage';
import Basic from './Demo4';
import Welcome from '../components/Welcome';
import ForgotPassword from '../components/ForgotPassword';
import Demo5 from '../components/Demo5';
import Demo6 from '../components/Demo6';
import Dashboard from '../components/Dashboard';
import Demo1 from '../components/Demo1';
import CustomeException from '../components/CustomeException'
import Notes from '../components/Notes';
import Demo7 from '../components/Demo7';
import MainNote from '../components/MainNote';
import CreateNote from '../components/CreateNote';
import NodeAddInCard from '../components/NodeAddInCard'
import Demo8 from '../components/Demo8';
import EditMainNote from '../components/EditMainNode';


function ReactRouting(){
    return (
        <Router>
            <Switch>
                <Route path = '/' exact component = {Registration} />
                <Route path = '/LoginPage' component = {LoginPage} /> 
                <Route path = '/Basic' component = {Basic} />
                <Route path = '/Welcome' component = {Welcome} />
                <Route path = '/ForgotPassword' component = {ForgotPassword} />
                <Route path = '/Demo5' component = {Demo5} />
                <Route path = '/Demo1' component = {Demo1} />
                <Route path = '/Demo6' component = {Demo6} />
                <Route path = '/Dashboard/' component = {Dashboard} />
                <Route path = '/Notes' component = {Notes} />
                <Route path = '/Demo7' component = {Demo7} />
                <Route path = '/MainNote' component = {MainNote} />
                <Route path = '/CreateNote' component = {CreateNote} />
                <Route path = '/NodeAddInCard' component = { NodeAddInCard} />
                <Route path = '/Demo8' component = { Demo8}/>
                <Route path = '/EditMainNote' component = { EditMainNote} /> 
            </Switch>
        </Router>
    )
}

export default ReactRouting;
