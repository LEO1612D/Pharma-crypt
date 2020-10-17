import React, { Component } from "react";
import LoginModel from "./loginModel";
import SignupModal from "./signupModal";
import Slide from "./welcomeSlides";
import Footer from "./footer";
import Logout from "./logoutModal";
import UserDashboard from "./userDashboard";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Post from "./post";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import {
  Badge,
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from "reactstrap";
import post from "./post";

class home extends Component {
  render() {
    const beforeLogin = (
      <div>
        <h1>hello..</h1> {}
        <Navbar color="dark" dark expand="sm" className="">
          <NavbarBrand href="/">Pharmacrypt</NavbarBrand>
          <NavbarToggler />
          <Collapse navbar>
            <Nav className="ml-auto" navbar>
              <LoginModel></LoginModel>
              <div style={{ marginLeft: "1rem" }}>
                <SignupModal></SignupModal>
              </div>
            </Nav>
          </Collapse>
        </Navbar>
        <Slide></Slide>
        <Footer></Footer>
      </div>
    );

    const afterLogin = (
      <div>
        <Navbar color="dark" dark expand="sm" className="">
          <NavbarBrand href="/">
            {" "}
            <Badge color="primary" style={{ padding: ".6rem" }}>
              <div style={{ fontSize: "1.5rem" }}>Pharmacrypt</div>
            </Badge>
          </NavbarBrand>
          <NavbarToggler />

          <Collapse navbar>
            <Nav>
              <NavItem>
                <Link to="/">
                  {" "}
                  <NavLink href="">Dashboard</NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/post">
                  {" "}
                  <NavLink href="">Posts</NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <NavLink href="">History</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="">Profile</NavLink>
              </NavItem>
            </Nav>

            <Nav className="ml-auto" navbar>
              <div>
                {" "}
                <Badge color="success" style={{ padding: ".8rem" }}>
                  <div style={{ fontSize: "1rem" }}>
                    <i
                      class="user circle icon"
                      style={{ fontSize: "1rem" }}
                    ></i>{" "}
                    Welcome Nikunj
                  </div>
                </Badge>
              </div>
              <div style={{ marginLeft: "1rem" }}>
                <Logout></Logout>
              </div>
            </Nav>
          </Collapse>
        </Navbar>
        <withRouter>
          <switch>
            <Route path="/" exact component={UserDashboard}></Route>
            <Route path="/post" component={Post}></Route>
          </switch>
        </withRouter>
        {/* <UserDashboard></UserDashboard>
        <Post></Post> */}
        <Footer></Footer>
      </div>
    );
    return <div>{this.props.login ? afterLogin : beforeLogin}</div>;
  }
}
home.propTypes = {
  login: PropTypes.isRequired
};
const mapStateToProps = state => ({
  login: state.login
});
export default withRouter(connect(mapStateToProps)(home));
