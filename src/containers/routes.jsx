import NewContact from "../components/NewContact";
import NotFound from "../components/NotFound";
import About from "./About";
import Contact from "./Contact";
import Dashboard from "./Dashboard";
import Home from "./Home";

export default [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
    rights: ['READ', 'WRITE'],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/contact",
    element: <Contact />,
    children: {
      path: "/contact/new",
      element: <NewContact />,
    },
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
