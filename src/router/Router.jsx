import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Header from "../components/Header";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <div className="bg-gray-200 h-screen">
          <Header />
          <div className="p-8 max-w-xl mx-auto">
            <Outlet />
          </div>
        </div>
      </>
    ),
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
    ],
  },
]);
function Router() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default Router;
