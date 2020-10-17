import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Alert,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";

export default class signupModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      name: "",
      email: "",
      role: "",
      password: "",

      status: "idle"
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleName = event => {
    this.setState({ name: event.target.value });
  };
  handleRole = event => {
    this.setState({ role: event.target.value });
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
        role: this.state.role,
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
    console.log(
      this.state.email,
      this.state.password,
      this.state.name,
      this.state.role
    );
  };
  render() {
    return (
      <div>
        <Button color="primary" onClick={this.toggle}>
          Signup
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className="dark">
          <ModalHeader toggle={this.toggle}>Signup</ModalHeader>
          <ModalBody>
            <div>
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
                      placeholder="ex: abc@gmail.com"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleSelect">Select</Label>

                    <Input
                      type="select"
                      name="select"
                      id="exampleSelect"
                      onChange={this.handleRole}
                    >
                      <option>Manufacturer</option>
                      <option>Supplier</option>
                      <option>Wholesaler</option>
                      <option>Distributor</option>
                      <option>Pharma</option>
                    </Input>
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
                  <Button onClick={this.handleSubmit}>Signup</Button>
                  {/* same as conditional operation in login */}
                  {this.state.status == "idle" ? (
                    ""
                  ) : this.state.status == "sucess" ? (
                    <div>
                      <Alert color="success">Successfully Registerd !!!</Alert>
                    </div>
                  ) : this.state.status == "failed" ? (
                    <Alert color="danger">Please Enter Correct values</Alert>
                  ) : (
                    ""
                  )}
                </Form>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <a href="">Already user ?</a>{" "}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
