import React from "react";
import {  BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AboutScreen from "./AboutScreen";
import HomeScreen from "./HomeScreen";
import LoginScreen from "./LoginScreen";
const AppRouter = () => {
    return (
       <Router>
           <div>
                <Route exact path="/" component={ HomeScreen } />
                <Route exact path="/about" component={ AboutScreen } />
                <Route exact path="/login" component={ LoginScreen } />


           </div>
       </Router>
    )  
}

export default AppRouter
