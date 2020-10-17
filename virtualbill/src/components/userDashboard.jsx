import React, { Component } from "react";
import {
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText
} from "reactstrap";
import Cards from "./cards";

export default class userDashboard extends Component {
  render() {
    return (
      <div>
        <Card>
          <CardHeader>
            <h2>Track Shipment</h2>
          </CardHeader>
          <CardBody>
            <div class="ui icon input">
              <input type="text" placeholder="Search Track id"></input>
            </div>{" "}
            <button class="ui primary icon button">
              <i class="search icon"></i>
            </button>
            <div class="ui divider"></div>
            <div class="blue three ui buttons">
              <button class="ui button">Delivering</button>
              <button class="ui button">Received</button>
              <button class="ui button">All</button>
            </div>
            <div class="ui divider"></div>
            <Cards></Cards>
          </CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
      </div>
    );
  }
}
