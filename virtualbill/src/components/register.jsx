import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
//reactstrap is same as bootstrap
import {
  Alert,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";

export default class register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    status: "idle"
  };

  handleName = event => {
    this.setState({ name: event.target.value });
  };
  handleEmail = event => {
    this.setState({ email: event.target.value });
  };
  handlePassword = event => {
    this.setState({ password: event.target.value });
  };
  handleSubmit = event => {
    axios
      .post("/api/user/register", {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      })
      .then(response => {
        console.log(response);
        this.setState({ status: "sucess" });
        console.log("Registered...");
      })
      .catch(error => {
        console.log(error);
        this.setState({ status: "failed" });
      });
    console.log(this.state.email, this.state.password, this.state.name);
  };
  render() {
    return (
      <div>
        <button className="ui icon button">
          <i className="cloud icon"></i>
          <div>helllo</div>
        </button>
        <div className="container">
          <Form>
            <FormGroup>
              <Label for="exampleName">Name</Label>
              <Input
                type="text"
                name="name"
                id="exampleName"
                onChange={this.handleName}
                placeholder="with a placeholder"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
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
            <Button onClick={this.handleSubmit}>Register</Button>
            {/* same as conditional operation in login */}
            {this.state.status == "idle" ? (
              ""
            ) : this.state.status == "sucess" ? (
              <Link to="/">
                <Button>Go to Login Page</Button>
              </Link>
            ) : this.state.status == "failed" ? (
              <Alert color="danger">Please Enter Correct values</Alert>
            ) : (
              ""
            )}
          </Form>
        </div>
      </div>
    );
  }
}
