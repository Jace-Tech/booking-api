/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";
import { Provider } from "react-redux";
import store from "store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import UserContextProvider from "contexts/UserContext";
import StatsContextProvider from "contexts/StatsContext";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <UserContextProvider>
        <StatsContextProvider>
          <ToastContainer />
          <Switch>
            <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
            <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
            <Redirect from="/" to="/admin/index" />
          </Switch>
        </StatsContextProvider>
      </UserContextProvider>
    </Provider>
  </BrowserRouter>
);
