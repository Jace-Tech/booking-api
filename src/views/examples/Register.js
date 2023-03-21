/*!

=========================================================
* Argon Dashboard React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";

import { Link, useHistory } from "react-router-dom";
import { handleCreateAccount } from "apis/auth.api";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import useBoolean from "hooks/useBoolean";

const Register = () => {
  const { bool, open, close } = useBoolean()
  const history = useHistory()
  const { handleSubmit, control} = useForm({
    mode: "onTouched",
  });

  const handleRegister = async (data) => {
    // UPDATE BTN
    open()

    // MAKE REQUEST
    const result = await handleCreateAccount(data);

    // CHECK FOR ERROR
    if(result && !result?.success) {
      toast(result?.message, { type: "error" })
      close()
      return
    }

    // SHOW SUCCESS MESSAGE
    toast(result?.message, { type: "success" })
    close()

    // REDIRECT TO LOGIN PAGE
    setTimeout(() => {
      history.replace("/auth/login")
    }, 3000)
  };
  return (
    <>
      <Col lg="6" md="8">
        <Card className="bg-secondary shadow border-0">
          <CardBody className="px-lg-5 py-lg-5">
            <Form role="form" onSubmit={handleSubmit(handleRegister)}>
              <Controller
                control={control}
                name="name"
                rules={{
                  required: "Name is required",
                  minLength: {
                    value: 4,
                    message: "Name is required",
                  },
                }}
                render={({ field, formState: { errors } }) => (
                  <FormGroup className="mb-3">
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-hat-3" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Name"
                        type="text"
                        {...field}
                      />
                    </InputGroup>
                    {errors?.name && (
                      <small className="text-xs text-danger mt-2 d-flex">
                        {errors?.name?.message}
                      </small>
                    )}
                  </FormGroup>
                )}
              />

              <Controller
                control={control}
                name="email"
                rules={{
                  required: "Email is required",
                }}
                render={({ field, formState: { errors } }) => (
                  <FormGroup className="mb-3">
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-email-83" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Email"
                        type="email"
                        autoComplete="new-email"
                        {...field}
                      />
                    </InputGroup>
                    {errors?.email && (
                      <small className="text-xs text-danger mt-2 d-flex">
                        {errors?.email?.message}
                      </small>
                    )}
                  </FormGroup>
                )}
              />

              <Controller
                control={control}
                name="password"
                rules={{
                  required: "Password is required",
                }}
                render={({ field, formState: { errors } }) => (
                  <FormGroup>
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-lock-circle-open" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Password"
                        type="password"
                        autoComplete="new-password"
                        {...field}
                      />
                    </InputGroup>
                    {errors?.password && (
                      <small className="text-xs text-danger mt-2 d-flex">
                        {errors?.password?.message}
                      </small>
                    )}
                  </FormGroup>
                )}
              />

              <div className="text-center">
                <Button disabled={bool} className="mt-4" color="primary" type="submit">
                 {bool ? "Creating..." :  "Create account" }
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
        <Row className="mt-3">
          <Col xs="6">
            <a
              className="text-light"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <small>Forgot password?</small>
            </a>
          </Col>
          <Col className="text-right" xs="6">
            <Link className="text-light" to="/auth/login">
              <small>Sign in</small>
            </Link>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default Register;
