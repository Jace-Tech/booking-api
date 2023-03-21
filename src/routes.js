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
import Index from "views/Index.js";
import Route from "views/examples/Route";
import Login from "views/examples/Login";
import Register from "views/examples/Register";
import Terminal from "views/examples/Terminal";


var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth",
  },
  {
    path: "/route",
    name: "Route",
    icon: "ni ni-delivery-fast text-blue",
    component: Route,
    layout: "/admin",
  },
  {
    path: "/terminal",
    name: "Terminal",
    icon: "ni ni-pin-3 text-orange",
    component: Terminal,
    layout: "/admin",
  },
];

export const dashRoutes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
  },
  {
    path: "/route",
    name: "Route",
    icon: "ni ni-delivery-fast text-blue",
    component: Route,
    layout: "/admin",
  },
  {
    path: "/terminal",
    name: "Terminal",
    icon: "ni ni-pin-3 text-orange",
    component: Terminal,
    layout: "/admin",
  },
];
export default routes;
