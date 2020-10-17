import React, { Component } from "react";
import Register from "../components/register";

//react-router-dom provides you routing functionality
import { BrowserRouter as router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";

//axios provides you to send get or post request interact with backend .
import axios from "axios";

import {
  Alert,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";

export default class login extends Component {
  //login-state
  state = {
    email: "",
    password: "",
    token: "",
    //date is to check user sucessfully logged in or not
    date: "idle"
  };

  handleEmail = event => {
    this.setState({ email: event.target.value });
  };
  handlePassword = event => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = event => {
    axios
      //send post request with email, and passwor given by user
      .post("/api/user/login", {
        email: this.state.email,
        password: this.state.password
      })
      .then(response => {
        console.log(response);
        //set token when sucessfully logged in
        this.setState({ token: response.data, date: "sucess" });
        console.log(this.state.token);
        //this will set token to parent component app because we need token in future when we trying to access post component
        this.props.cc(this.state.token);
      })
      .catch(error => {
        console.log(error);
        //set status to wrong
        this.setState({ date: "wrong" });
      });
    console.log(this.state.email, this.state.password);
  };

  render() {
    return (
      <div>
        <div className="container">
          {/* simple form creation  you can found it in reactstrap.com forms*/}
          <Form>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                // on change we call handle email method which set email in state provided by user
                onChange={this.handleEmail}
                placeholder="with a placeholder"
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                onChange={this.handlePassword}
                placeholder="password placeholder"
              />
            </FormGroup>

            <Button onClick={this.handleSubmit}>Login</Button>

            {/* link means what you use <a href=""> </a> tag in html and "to" means href  this is possible because of react-route */}
            <Link to="/register">
              <Button>Register</Button>
            </Link>

            {/* this is 
      if(sucess){
        show go to home butten
      }
      else if(wrong){
         show alert message email or password is wrong

      } 
      else{
        nothing
      }
      
      conditional operation used here
      condition ? true : false
      */}

            {this.state.date == "sucess" ? (
              <Link to="/posts">
                {" "}
                <Button>Go To Home</Button>
                {"  "}
              </Link>
            ) : this.state.date == "wrong" ? (
              <Alert color="danger">Email or Password is Wrong</Alert>
            ) : (
              ""
            )}
            {"  "}
          </Form>
        </div>
      </div>
    );
  }
}
