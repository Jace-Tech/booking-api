import React, { useState } from 'react'
// react component that copies the given text inside your clipboard
// reactstrap components
/* eslint-disable no-unused-vars */

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Table,
  Container,
  Row,
  Col
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import { useStatsContext } from 'contexts/StatsContext';
import AddRoute from 'partials/AddRoute';
import AddBus from 'partials/AddBus';
import { handleDeleteRoute } from 'apis/route.api';
import useBoolean from 'hooks/useBoolean';
import { logMessage } from 'config/functions';
import { toast } from 'react-toastify';

const Route = () => {
  const {open, close, bool} = useBoolean()
  const [index, setIndex] = useState(null)
  const { routes, fetchRoutes } = useStatsContext()
  const [routeId, setRouteId] = useState(null)

  const handleDelete = async (id, _index) => {
    setIndex(_index)
    open()

    // MAKE REQUEST
    const result = await handleDeleteRoute(id);

    logMessage(result)
    // CHECK FOR ERROR
    if(result && !result?.success) {
      toast(result?.message, { type: "error" })
      close()
      setIndex(null)
      return
    }

    // UPDATE THE STATE
    fetchRoutes()

    // SHOW MESSAGE 
    toast(result?.message, { type: "success" })
    close()
    setIndex(null)
  }

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
                  {routeId ? (
                    <AddBus
                      routeId={routeId}
                      handleFinish={() => setRouteId(null)}
                    />
                  ) : (
                    <AddRoute />
                  )}

                  <Col className="mb-5 mb-xl-0" xl="12">
                    <Card className="shadow mt-4">
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
                          {routes && routes?.length ? (
                            routes?.map((route, _index) => (
                              <tr>
                                <th>{route?.from.name}</th>
                                <th>{route?.to.name}</th>
                                <td>
                                  &#8358; {(+route?.acPrice).toLocaleString()}
                                </td>
                                <td>
                                  &#8358; {(+route?.nonAcPrice).toLocaleString()}
                                </td>
                                <td>{route?.buses.length}</td>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <Button
                                      className=""
                                      color="primary"
                                      size="sm"
                                      onClick={() => {
                                        setRouteId(route?._id);
                                        window.scrollTo(0, 0);
                                      }}
                                    >
                                      Add Bus
                                    </Button>

                                    <Button
                                      disabled={bool}
                                      color="danger"
                                      size="sm"
                                      onClick={() =>
                                        handleDelete(route?._id, _index)
                                      }
                                    >
                                      {bool && index === _index
                                        ? "Deleting..."
                                        : "Delete Route"}
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