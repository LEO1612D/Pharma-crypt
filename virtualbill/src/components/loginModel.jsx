import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { islogin, havetoken } from "../actions";

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

class loginModel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      email: "",
      password: "",
      //date is to check user sucessfully logged in or not
      date: "idle"
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  //login-state

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
      .then(async response => {
        console.log(response);
        //set token when sucessfully logged in
        this.setState({ date: "sucess" });
        await this.props.islogin(response.data);
        console.log(response.data);
        this.toggle();

        // await this.props.havetoken(response.data);

        //this will set token to parent component app because we need token in future when we trying to access post component
        // this.props.cc(this.state.token);
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
        <Button color="primary" onClick={this.toggle}>
          Login
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className="dark">
          <ModalHeader toggle={this.toggle}>Login</ModalHeader>
          <ModalBody>
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
                    placeholder="ex: abc@gmail.com"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    id="examplePassword"
                    onChange={this.handlePassword}
                    placeholder=""
                  />
                </FormGroup>

                <Button
                  color="success"
                  className="align-middle"
                  onClick={this.handleSubmit}
                >
                  Login
                </Button>

                {this.state.date == "sucess" ? (
                  ""
                ) : this.state.date == "wrong" ? (
                  <Alert color="danger">Email or Password is Wrong</Alert>
                ) : (
                  ""
                )}
                {"  "}
              </Form>
            </div>
          </ModalBody>
          <ModalFooter>
            <a href="">Forgot password ?</a>{" "}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

loginModel.propTypes = {
  islogin: PropTypes.func.isRequired,
  login: PropTypes.isRequired
};
const mapStateToProps = state => ({
  login: state.login
});
export default connect(mapStateToProps, { islogin })(loginModel);
