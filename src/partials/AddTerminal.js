/* eslint-disable no-unused-vars */
import { handleCreateTerminal } from "apis/terminal.api";
import { logMessage } from "config/functions";
import { useStatsContext } from "contexts/StatsContext";
import useBoolean from "hooks/useBoolean";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Button, Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Row } from "reactstrap";

const AddTerminal = () => {
  const {bool, open, close} = useBoolean()
  const { terminals, fetchTerminal } = useStatsContext();
  const { control, handleSubmit, reset } = useForm({ mode: "onTouched" });

  const handleAddTerminal = async (data) => {
    open()

    // MAKE REQUEST
    const result = await handleCreateTerminal(data);

    logMessage(result)
    // CHECK FOR ERROR
    if(result && !result?.success) {
      toast(result?.message, { type: "error" })
      close()
      return
    }

    // UPDATE THE STATE
    fetchTerminal()

    // SHOW MESSAGE 
    toast(result?.message, { type: "success" })
    close()

    // RESET THE FORM
    reset()
  }
  return (
    <Col xl="12">
      <Card className="bg-white shadow">
        <CardHeader className="bg-white border-0">
          <Row className="align-items-center">
            <Col xs="8">
              <h3 className="mb-0">Add Terminal</h3>
            </Col>
          </Row>
        </CardHeader>
        <CardBody>
          <Form onSubmit={handleSubmit(handleAddTerminal)}>
            <div className="pl-lg-4">
            <Row>
                <Col lg="6">
                  <Controller
                    name="name"
                    rules={{
                      required: "Name is required",
                    }}
                    control={control}
                    render={({ field, formState: { errors } }) => (
                      <>
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Name
                          </label>

                          <Input
                            className="form-control-alternative"
                            id="input-first-name"
                            placeholder="eg. Awka, Uni-Zik Junction Opposite"
                            type="text"
                            {...field}
                          />
                          {errors?.name && (
                            <small className="d-flex mt-2 text-sm text-danger">
                              {errors?.name.message}
                            </small>
                          )}
                        </FormGroup>
                      </>
                    )}
                  />
                </Col>
                <Col lg="6">
                  <Controller
                    name="address"
                    rules={{
                      required: "Address is required",
                    }}
                    control={control}
                    render={({ field, formState: { errors } }) => (
                      <>
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Address
                          </label>

                          <Input
                            className="form-control-alternative"
                            id="input-first-name"
                            placeholder="eg. No, 112 Arthur Eze Avenue, Uni-zik Junction Opp. Sinai-Oil, Awka, Anambra State."
                            type="text"
                            {...field}
                          />
                          {errors?.to && (
                            <small className="d-flex mt-2 text-sm text-danger">
                              {errors?.to.message}
                            </small>
                          )}
                        </FormGroup>
                      </>
                    )}
                  />
                </Col>
              </Row>
              <Row>
                <Col lg="6">
                  <Controller
                    name="state"
                    rules={{
                      required: "State is required",
                    }}
                    control={control}
                    render={({ field, formState: { errors } }) => (
                      <>
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-first-name"
                          >
                            State
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-first-name"
                            placeholder="eg. Anambra State"
                            type="text"
                            {...field}
                          />
                          {errors?.state && (
                            <small className="d-flex mt-2 text-sm text-danger">
                              {errors?.state.message}
                            </small>
                          )}
                        </FormGroup>
                      </>
                    )}
                  />
                </Col>
                <Col lg="6">
                  <Controller
                    name="phone"
                    rules={{
                      required: false,
                    }}
                    control={control}
                    render={({ field, formState: { errors } }) => (
                      <>
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            Phone Number
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-last-name"
                            placeholder="eg. 09012345678"
                            type="tel"
                            {...field}
                          />
                          {errors?.phone && (
                            <small className="d-flex mt-2 text-sm text-danger">
                              {errors?.phone.message}
                            </small>
                          )}
                        </FormGroup>
                      </>
                    )}
                  />
                </Col>
                <Col>
                  <Button color="primary" disabled={bool}>
                   { bool ? "Adding..." : "Add Terminal"}
                  </Button>
                </Col>
              </Row>
            </div>
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AddTerminal;
