// node.js library that concatenates classes (strings)
// javascipt plugin for creating charts
// react plugin used to create charts
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  Table,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components

import Header from "components/Headers/Header.js";
import { useStatsContext } from "contexts/StatsContext";
import { useHistory } from "react-router-dom";

const Index = (props) => {
  const { routes, terminals } = useStatsContext()
  const history = useHistory()
  
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="mb-5 mb-xl-0" xl="12">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">All Routes</h3>
                  </div>
                  <div className="col text-right">
                    <Button
                      color="primary"
                      onClick={(e) => history.push("/admin/route")}
                      size="sm"
                    >
                      See all
                    </Button>
                  </div>
                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">From</th>
                    <th scope="col">To</th>
                    <th scope="col">AC Price</th>
                    <th scope="col">Non AC Price</th>
                    <th scope="col">Buses</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {routes && routes.length ? (
                    routes.slice(0, 5).map((route) => (
                      <tr>
                        <th>{route?.from.name}</th>
                        <th>{route?.to.name}</th>
                        <td>&#8358; {(+route?.acPrice).toLocaleString()}</td>
                        <td>&#8358; {(+route?.nonAcPrice).toLocaleString()}</td>
                        <td>{route?.buses.length}</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <Button className="" color="primary" size="sm">
                              Add Bus
                            </Button>

                            <Button className="" color="danger" size="sm">
                              Delete Route
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <th
                        colSpan={7}
                        className={"text-center text-muted"}
                        scope="row"
                      >
                        No Routes Found
                      </th>
                    </tr>
                  )}
                </tbody>
              </Table>
            </Card>
          </Col>

          <Col className="mb-5 mb-xl-0" xl="12">
            <Card className="shadow mt-4">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">All Terminals</h3>
                  </div>
                  <div className="col text-right">
                    <Button
                      color="primary"
                      onClick={(e) => history.push("/admin/terminal")}
                      size="sm"
                    >
                      See all
                    </Button>
                  </div>
                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Address</th>
                    <th scope="col">State</th>
                    <th scope="col">Phone</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {terminals && terminals.length ? (
                    terminals.slice(0, 5).map((terminal) => (
                      <tr>
                        <th>{terminal.name}</th>
                        <th>{terminal.address}</th>
                        <th>{terminal.state}</th>
                        <td>{terminal.phone}</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <Button className="" color="primary" size="sm">
                              Add Bus
                            </Button>

                            <Button className="" color="danger" size="sm">
                              Delete
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <th
                        colSpan={7}
                        className={"text-center text-muted"}
                        scope="row"
                      >
                        No Routes Found
                      </th>
                    </tr>
                  )}
                </tbody>
              </Table>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Index;
