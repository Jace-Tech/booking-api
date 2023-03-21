import Index from "views/Index.js";
import Route from "views/examples/Route";
import Terminal from "views/examples/Terminal";


var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin"
  },
  {
    path: "/route",
    name: "Route",
    icon: "ni ni-delivery-fast text-blue",
    component: Route,
    layout: "/admin"
  },
  {
    path: "/terminal",
    name: "Terminal",
    icon: "ni ni-pin-3 text-orange",
    component: Terminal,
    layout: "/admin"
  }
];
export default routes;
