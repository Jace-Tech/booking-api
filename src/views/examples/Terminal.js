import React, { useState } from 'react'
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
import useBoolean from 'hooks/useBoolean';
import { handleDeleteTerminal } from 'apis/terminal.api';
import { logMessage } from 'config/functions';
import { toast } from 'react-toastify';

const Terminal = () => {
  const { terminals, fetchTerminal } = useStatsContext()
  const {open, close, bool} = useBoolean()
  const [index, setIndex] = useState(null)

  const handleDelete = async (id, _index) => {
    setIndex(_index)
    open()

    // MAKE REQUEST
    const result = await handleDeleteTerminal(id);

    logMessage(result)
    // CHECK FOR ERROR
    if(result && !result?.success) {
      toast(result?.message, { type: "error" })
      close()
      setIndex(null)
      return
    }

    // UPDATE THE STATE
    fetchTerminal()

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
                            terminals.map((terminal, _index) => (
                              <tr>
                                <th>{terminal.name}</th>
                                <th>{terminal.address}</th>
                                <th>{terminal.state}</th>
                                <td>{terminal.phone || "None"}</td>
                                <td>
                                  <div className="d-flex align-items-center">

                                  <Button
                                      disabled={bool}
                                      color="danger"
                                      size="sm"
                                      onClick={() =>
                                        handleDelete(terminal._id, _index)
                                      }
                                    >
                                      {bool && index === _index
                                        ? "Deleting..."
                                        : "Delete Terminal"}
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
                                No Terminal Found
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