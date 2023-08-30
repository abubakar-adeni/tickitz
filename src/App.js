import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Home from './pages/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { store } from "./store";
import { Provider } from "react-redux";
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Movies from "./pages/Movies";
import axios from 'axios';
import ViewALL from "./pages/view-all";
import Seat from "./components/seat";
import Test from "./pages/Test";
import Payment from "./pages/Payment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/movies/:id",
    element: <Movies />,
  },
  {
    path: "/view-all",
    element: <ViewALL />,
  },
  {
    path: "/seat/:id",
    element: <Seat />,
  },
  {
    path: "/test",
    element: <Test />,
  },
  {
    path: "/payment/:id",
    element: <Payment />,
  },
])

function App() {
  axios.interceptors.request.use(
    (config) => {
      if (localStorage.getItem("token")) {
        config.headers["Authorization"] = `Bearer ${localStorage.getItem(
          "token"
        )}`;
      }
      return config;
    },
    (error) => {
      Promise.reject(error);
    }
  );
  return (
    <div className="App">
      <Provider store={store}>
      <RouterProvider router={router} />
      </Provider>
  </div>
  );
}

export default App;
