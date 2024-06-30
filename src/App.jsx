import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navigation } from "./pages/Navigation/Navigation";
import { DataProvider } from "./context/DataContext";
import { Records } from "./pages/Records/Records";
import { Books } from "./pages/Books/Books";
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
  {
    path: "books",
    element: <Books />,
  },
]);

function App() {
  return (
    <DataProvider>
      <RouterProvider router={router} />;
    </DataProvider>
  );
}
export default App;
