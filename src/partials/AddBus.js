/* eslint-disable no-unused-vars */
import { handleCreateBus } from "apis/route.api";
import { handleCreateRoute } from "apis/route.api";
import { logMessage } from "config/functions";
import { useStatsContext } from "contexts/StatsContext";
import useBoolean from "hooks/useBoolean";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { toast } from "react-toastify";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Form,
  FormGroup,
  Input,
  Row,
} from "reactstrap";

const AddBus = ({ routeId, handleFinish }) => {
  const {bool, open, close} = useBoolean()
  const { routes, fetchRoutes, fetchBuses } = useStatsContext();
  const { control, handleSubmit, reset } = useForm({ mode: "onTouched" });

  const getPrice = (type) => {
    const route = routes.find(r => r._id === routeId)
    if(!route) return 0
    if(type === "acBus") return route.acPrice
    return route.nonAcPrice
  }

  const handleBus = async (data) => {
    open()

    data = { ...data, price: getPrice(data.type) }
    // MAKE REQUEST
    const result = await handleCreateBus(data, routeId);

    logMessage(result)
    // CHECK FOR ERROR
    if(result && !result?.success) {
      toast(result?.message, { type: "error" })
      close()
      return
    }

    // UPDATE THE STATE
    fetchRoutes()
    fetchBuses()

    // SHOW MESSAGE 
    toast(result?.message, { type: "success" })
    close()

    // RESET THE FORM
    reset()
    handleFinish()
  }
  return (
    <Col xl="12">
      <Card className="bg-white shadow">
        <CardHeader className="bg-white border-0">
          <Row className="align-items-center">
            <Col xs="8">
              <h3 className="mb-0">Add Bus</h3>
            </Col>
          </Row>
        </CardHeader>
        <CardBody>
          <Form onSubmit={handleSubmit(handleBus)}>
            <div className="pl-lg-4">
              <Row>
                <Col lg="6">
                  <Controller
                    name="name"
                    rules={{
                      required: "Bus Name is required",
                    }}
                    control={control}
                    render={({ field, formState: { errors } }) => (
                      <>
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Bus Name
                          </label>

                          <Input
                            className="form-control-alternative"
                            id="input-first-name"
                            placeholder="eg. Toyota Sienna"
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
                    name="type"
                    rules={{
                      required: "Bus Type is required",
                    }}
                    control={control}
                    render={({ field, formState: { errors } }) => (
                      <>
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Type
                          </label>

                          <select
                            className="form-control form-control-select"
                            {...field}
                          >
                            <option value="" selected disabled>
                              Choose type
                            </option>
                            <option value="acBus">AC Bus</option>
                            <option value="nonAcBus">Non AC Bus</option>
                          </select>
                          {errors?.type && (
                            <small className="d-flex mt-2 text-sm text-danger">
                              {errors?.type.message}
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
                    name="boardingDate"
                    rules={{
                      required: "Boarding Date is required",
                    }}
                    control={control}
                    render={({ field, formState: { errors } }) => (
                      <>
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-first-name"
                          >
                            Boarding Date
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-first-name"
                            placeholder="Boarding Date"
                            type="datetime-local"
                            {...field}
                          />
                          {errors?.boardingDate && (
                            <small className="d-flex mt-2 text-sm text-danger">
                              {errors?.boardingDate.message}
                            </small>
                          )}
                        </FormGroup>
                      </>
                    )}
                  />
                </Col>
                <Col lg="6">
                  <Controller
                    name="seatNumber"
                    rules={{
                      required: "Number of seats is required",
                    }}
                    control={control}
                    render={({ field, formState: { errors } }) => (
                      <>
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                           Number of seats
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-last-name"
                            placeholder="6"
                            type="number"
                            {...field}
                          />
                          {errors?.seatNumber && (
                            <small className="d-flex mt-2 text-sm text-danger">
                              {errors?.seatNumber.message}
                            </small>
                          )}
                        </FormGroup>
                      </>
                    )}
                  />
                </Col>
                <Col>
                  <Button color="primary" disabled={bool}>
                   { bool ? "Adding..." : "Add Bus"}
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

export default AddBus;
