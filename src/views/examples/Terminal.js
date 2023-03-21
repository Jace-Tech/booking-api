import React from 'react'
// react component that copies the given text inside your clipboard
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
  Button,
  Table} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import { useStatsContext } from 'contexts/StatsContext';
import AddTerminal from 'partials/AddTerminal';

const Terminal = () => {
  const { terminals } = useStatsContext()
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
                <h3 className="mb-0">Terminal</h3>
              </CardHeader>
              <CardBody>
                <Row>
                  {/* Add Terminal */}
                  <AddTerminal />

                  {/* Add Terminal */}
                  <Col className="mb-5 mb-xl-0" xl="12">
                    <Card className="shadow mt-4">
                      <CardHeader className="border-0">
                        <Row className="align-items-center">
                          <div className="col">
                            <h3 className="mb-0">All Terminals</h3>
                          </div>
                        </Row>
                      </CardHeader>
                      <Table
                        className="align-items-center table-flush"
                        responsive
                      >
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
                            terminals.map((terminal) => (
                              <tr>
                                <th>{terminal.name}</th>
                                <th>{terminal.address}</th>
                                <th>{terminal.state}</th>
                                <td>{terminal.phone}</td>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <Button
                                      className=""
                                      color="primary"
                                      size="sm"
                                    >
                                      Add Bus
                                    </Button>

                                    <Button
                                      className=""
                                      color="danger"
                                      size="sm"
                                    >
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
              </CardBody>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default Terminal