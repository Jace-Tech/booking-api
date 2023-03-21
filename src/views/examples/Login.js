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
  Col
} from "reactstrap";

import { Link, useHistory } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import useBoolean from "hooks/useBoolean";
import { useDispatch } from "react-redux";
import { STORAGE_NAME } from "config";
import { setUserToken } from "store/slices/user.slice";
import { setUser } from "store/slices/user.slice";
import { handleSignInAccount } from "apis/auth.api";

const Login = () => {
  const { bool: isChecked, toggle } = useBoolean(false)
  const { bool, open, close } = useBoolean()
  const history = useHistory()
  const dispatch = useDispatch()
  const { handleSubmit, control} = useForm({
    mode: "onTouched",
  });

  const handleLogin = async (data) => {
    // UPDATE BTN TEXT
    open()

    // MAKE REQUEST
    const result = await handleSignInAccount(data);

    // CHECK FOR ERROR
    if(result && !result?.success) {
      toast(result?.message, { type: "error" })
      close()
      return
    }

    // SHOW MESSAGE
    toast(result?.message, { type: "success" })
    close()

    // STORE DATA IN STORAGE
    localStorage.setItem(STORAGE_NAME, JSON.stringify(result.data))
    dispatch(setUserToken(result.data?.token))
    dispatch(setUser(result.data?.user))

    // REDIRECT TO DASHBOARD
    setTimeout(() => {
      history.replace("/admin/index")
    }, 3000)

  };
  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          <CardBody className="px-lg-5 py-lg-5">
            <Form role="form" onSubmit={handleSubmit(handleLogin)}>
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
              <div className="custom-control custom-control-alternative custom-checkbox">
                <input
                  className="custom-control-input"
                  id=" customCheckLogin"
                  type="checkbox"
                  checked={isChecked}
                  onClick={toggle}
                />
                <label
                  className="custom-control-label"
                  htmlFor=" customCheckLogin"
                >
                  <span className="text-muted">Remember me</span>
                </label>
              </div>
              <div className="text-center">
              <Button disabled={bool || !isChecked} className="mt-4" color="primary" type="submit">
                 {bool ? "Siging in..." :  "Sign in" }
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
            <Link
              className="text-light"
              to="/auth/register"
            >
              <small>Create new account</small>
            </Link>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default Login;
