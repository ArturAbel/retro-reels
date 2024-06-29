import { Navigation } from "./pages/Navigation/Navigation";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Records } from "./pages/Records/Records";
import { Home } from "./pages/Home/Home";

import "./css/App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "nav",
    element: <Navigation />,
  },
  {
    path: "records",
    element: <Records />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
