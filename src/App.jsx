import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import { BookReview } from "./components/BookReview/BookReview";
import { Navigation } from "./pages/Navigation/Navigation";
import { AuthProvider } from "./context/AuthContext";
import { DataProvider } from "./context/DataContext";
import { Records } from "./pages/Records/Records";
import { Movies } from "./pages/Movies/Movies";
import { Books } from "./pages/Books/Books";
import { Login } from "./pages/Login/Login";
import { Admin } from "./pages/Admin/Admin";
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
  {
    path: "books/:id",
    element: <BookReview />,
  },
  {
    path: "movies",
    element: <Movies />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "admin",
    element: (
      <PrivateRoute>
        <Admin />
      </PrivateRoute>
    ),
  },
]);

function App() {
  return (
    <AuthProvider>
      <DataProvider>
        <RouterProvider router={router} />
      </DataProvider>
    </AuthProvider>
  );
}
export default App;
