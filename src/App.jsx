import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import { AdminRecords } from "./pages/AdminRecords/AdminRecords";
import { BookReview } from "./components/BookReview/BookReview";
import { AdminMovies } from "./pages/AdminMovies/AdminMovies";
import { AdminBooks } from "./pages/AdminBooks/AdminBooks";
import { Navigation } from "./pages/Navigation/Navigation";
import { AddRecord } from "./pages/AddRecord/AddRecord";
import { AddMovie } from "./pages/AddMovie/AddMovie";
import { AuthProvider } from "./context/AuthContext";
import { DataProvider } from "./context/DataContext";
import { AddBook } from "./pages/AddBook/AddBook";
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
    children: [
      {
        path: "admin-records",
        element: <AdminRecords />,
      },
      {
        path: "admin-records/add-record",
        element: <AddRecord />,
      },
      {
        path: "admin-books",
        element: <AdminBooks />,
      },
      {
        path: "admin-books/add-book",
        element: <AddBook />,
      },
      {
        path: "admin-movies",
        element: <AdminMovies />,
      },
      {
        path: "admin-movies/add-movie",
        element: <AddMovie />,
      },
    ],
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
