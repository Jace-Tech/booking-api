import React from 'react'
// react component that copies the given text inside your clipboard
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import { useStatsContext } from 'contexts/StatsContext';
import AddRoute from 'partials/AddRoute';

const Route = () => {
  const { routes } = useStatsContext()
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <h3 className="mb-0">Routes</h3>
              </CardHeader>
              <CardBody>
                <Row>
                  <AddRoute />

                  <Col className="mb-5 mb-xl-0" xl="12">
                    <Card className="shadow">
                      <CardHeader className="border-0">
                        <Row className="align-items-center">
                          <div className="col">
                            <h3 className="mb-0">All Routes</h3>
                          </div>
                        </Row>
                      </CardHeader>
                      <Table
                        className="align-items-center table-flush"
                        responsive
                      >
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
                            routes.map((route) => (
                              <tr>
                                <th>{route.from.name}</th>
                                <th>{route.to.name}</th>
                                <td>&#8358; {(+route.acPrice).toLocaleString()}</td>
                                <td>&#8358; {(+route.nonAcPrice).toLocaleString()}</td>
                                <td>{route.buses.length}</td>
                                <td>
                                  <div className='d-flex align-items-center'>
                                    <Button className='' color='primary' size='sm'> 
                                      Add Bus
                                    </Button>

                                    <Button className='' color='danger' size='sm'> 
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
                </Row>
              </CardBody>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default Route