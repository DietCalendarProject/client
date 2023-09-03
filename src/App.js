import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "./components/MainLayout";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CalendarPage from "./pages/CalendarPage";
import ProjectDescription from "./pages/ProjectDescription";
import MyPage from "./pages/MyPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/login", element: <LoginPage /> },
        { path: "/register", element: <RegisterPage /> },
        { path: "/calendar", element: <CalendarPage /> },
        { path: "/project-description", element: <ProjectDescription /> },
        { path: "/my-page", element: <MyPage /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
