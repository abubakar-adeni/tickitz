import logo from './logo.svg';
import Home from './pages/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';

const router = createBrowserRouter([

  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },

])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
  </div>
  );
}

export default App;
