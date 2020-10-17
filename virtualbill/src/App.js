import React, { Component, useState } from "react";
import Login from "./components/login";
import Register from "./components/register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Post from "./components/post";
import logo from "./logo.svg";
import Home from "./components/home";

import "./App.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from "reactstrap";

export default class App extends Component {
  state = {
    token: "nhello"
  };
  getToken = data => {
    this.setState({ token: data });
  };

  render() {
    const myLogin = props => {
      return <Login cc={this.getToken} {...props}></Login>;
    };
    console.log("IN app", this.state.token);
    return (
      <Router>
        <div>
          <Home></Home>
          {/* <Switch>
            <Route path="/" exact render={myLogin} />
            <Route path="/register" component={Register} />
            <Route path="/posts" component={Post} />
          </Switch> */}
          {/* <Login cc={this.getToken}></Login> */}

          {/* <Register></Register>
        <Post></Post> */}
        </div>
      </Router>
    );
  }
}

//routing structure

//<Router>

//what ever component you want to route put it in here
//ex <Route path="your path" component={comp. name}/>
//render will use when you want to send props with your comp.
//<Swith> this is use for showing one comp. at time on page </Swith>
//</Router>
