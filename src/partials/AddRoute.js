import React from "react";
import { Button, Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Row } from "reactstrap";

const AddRoute = () => {
  return (
    <Col xl="8">
      <Card className="bg-white shadow">
        <CardHeader className="bg-white border-0">
          <Row className="align-items-center">
            <Col xs="8">
              <h3 className="mb-0">Add Route</h3>
            </Col>
          </Row>
        </CardHeader>
        <CardBody>
          <Form>
            <div className="pl-lg-4">
              <Row>
                <Col lg="6">
                  <FormGroup>
                    <label
                      className="form-control-label"
                      htmlFor="input-username"
                    >
                      Username
                    </label>
                    <Input
                      className="form-control-alternative"
                      defaultValue="lucky.jesse"
                      id="input-username"
                      placeholder="Username"
                      type="text"
                    />
                  </FormGroup>
                </Col>
                <Col lg="6">
                  <FormGroup>
                    <label className="form-control-label" htmlFor="input-email">
                      Email address
                    </label>
                    <Input
                      className="form-control-alternative"
                      id="input-email"
                      placeholder="jesse@example.com"
                      type="email"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col lg="6">
                  <FormGroup>
                    <label
                      className="form-control-label"
                      htmlFor="input-first-name"
                    >
                      First name
                    </label>
                    <Input
                      className="form-control-alternative"
                      defaultValue="Lucky"
                      id="input-first-name"
                      placeholder="First name"
                      type="text"
                    />
                  </FormGroup>
                </Col>
                <Col lg="6">
                  <FormGroup>
                    <label
                      className="form-control-label"
                      htmlFor="input-last-name"
                    >
                      Last name
                    </label>
                    <Input
                      className="form-control-alternative"
                      defaultValue="Jesse"
                      id="input-last-name"
                      placeholder="Last name"
                      type="text"
                    />
                  </FormGroup>
                </Col>
              </Row>
            </div>
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AddRoute;
