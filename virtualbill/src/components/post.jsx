import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { islogin } from "../actions";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

class post extends Component {
  state = {
    title: "demo title",
    auther: "demo auther"
  };
  componentDidMount() {
    axios
      .get("/api/posts", {
        headers: {
          "Content-type": "application/json",
          //i have set temp. token here this will be fix in future
          "auth-token": this.props.token
        }
      })
      .then(res => {
        console.log(res.data.posts);
        this.setState({ persons: res.data });
      });
  }
  render() {
    return (
      <div>
        <Card>
          <CardBody>
            <CardTitle>{this.state.title}</CardTitle>
            <CardSubtitle>{this.state.auther}</CardSubtitle>
            <CardText>
              {this.props.token}
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
            <Link to="/">
              <Button>Logout</Button>
            </Link>
          </CardBody>
        </Card>
      </div>
    );
  }
}

post.propTypes = {
  token: PropTypes.isRequired
};
const mapStateToProps = state => ({
  token: state.login.token
});
export default connect(mapStateToProps, { islogin })(post);
