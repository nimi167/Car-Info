import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 ",
    component: <Index />,
    layout: "/admin",
  },
  {
    path: "/cars",
    name: "Cars",
    icon: "ni ni-planet ",
    component: <Icons />,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "ni ni-pin-3 ",
    component: <Maps />,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 ",
    component: <Profile />,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Tables",
    icon: "ni ni-bullet-list-67 ",
    component: <Tables />,
    layout: "/admin",
  }
];
export default routes;

// icon: "ni ni-tv-2 text-primary",
// icon: "ni ni-planet text-blue",
// icon: "ni ni-pin-3 text-orange",
// icon: "ni ni-single-02 text-yellow",
// icon: "ni ni-bullet-list-67 text-red",
// icon: "ni ni-key-25 text-info",