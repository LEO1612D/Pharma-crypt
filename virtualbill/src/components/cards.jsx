import React, { Component } from "react";
import { Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";
export default class cards extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col sm="4" style={{ marginBottom: "2rem" }}>
            <Card body>
              <CardTitle>
                {" "}
                <div style={{ fontWeight: "bold" }}>Lamborghini</div>
              </CardTitle>
              <CardText>
                <div class="ui grid">
                  <div class="six wide column">
                    <div class="ui list">
                      <div class="item">
                        From :<div class="header">New York City</div>
                      </div>
                      <div class="item">
                        To :<div class="header">India</div>
                      </div>
                    </div>
                  </div>
                  <div class="five wide column">
                    <div class="ui list">
                      <div class="item">
                        Status :<div class="header">On going</div>
                      </div>
                      <div class="item">
                        Id :<div class="header">8458293474830</div>
                      </div>
                    </div>
                  </div>
                  <div class="five wide column">
                    <div class="ui list">
                      <div class="item">
                        From :<div class="header">New York City</div>
                      </div>
                      <div class="item">
                        To :<div class="header">India</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="ui right aligned segment">Left</div>
              </CardText>
              <Button>Go somewhere</Button>
            </Card>
          </Col>
          <Col sm="4">
            <Card body>
              <CardTitle>
                {" "}
                <div style={{ fontWeight: "bold" }}>Lamborghini</div>
              </CardTitle>
              <CardText>
                <div class="ui grid">
                  <div class="six wide column">
                    <div class="ui list">
                      <div class="item">
                        From :<div class="header">New York City</div>
                      </div>
                      <div class="item">
                        To :<div class="header">India</div>
                      </div>
                    </div>
                  </div>
                  <div class="five wide column">
                    <div class="ui list">
                      <div class="item">
                        Status :<div class="header">On going</div>
                      </div>
                      <div class="item">
                        Id :<div class="header">On going</div>
                      </div>
                    </div>
                  </div>
                  <div class="five wide column">
                    <div class="ui list">
                      <div class="item">
                        From :<div class="header">New York City</div>
                      </div>
                      <div class="item">
                        To :<div class="header">India</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="ui right aligned segment">Left</div>
              </CardText>
              <Button>Go somewhere</Button>
            </Card>
          </Col>
          <Col sm="4">
            <Card body>
              <CardTitle>
                {" "}
                <div style={{ fontWeight: "bold" }}>Lamborghini</div>
              </CardTitle>
              <CardText>
                <div class="ui grid">
                  <div class="six wide column">
                    <div class="ui list">
                      <div class="item">
                        From :<div class="header">New York City</div>
                      </div>
                      <div class="item">
                        To :<div class="header">India</div>
                      </div>
                    </div>
                  </div>
                  <div class="five wide column">
                    <div class="ui list">
                      <div class="item">
                        Status :<div class="header">On going</div>
                      </div>
                      <div class="item">
                        Id :<div class="header">On going</div>
                      </div>
                    </div>
                  </div>
                  <div class="five wide column">
                    <div class="ui list">
                      <div class="item">
                        From :<div class="header">New York City</div>
                      </div>
                      <div class="item">
                        To :<div class="header">India</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="ui right aligned segment">Left</div>
              </CardText>
              <Button>Go somewhere</Button>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
