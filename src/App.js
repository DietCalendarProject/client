import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "./components/MainLayout";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CalendarPage from "./pages/Calendar/CalendarPage";
import ProjectDescription from "./pages/ProjectDescription";
import MyPage from "./pages/MyPage";
import Post from "./pages/post";
import theme from "./assets/theme";
import { ThemeProvider } from "styled-components";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "/", element: <LoginPage /> },
        { path: "/register", element: <RegisterPage /> },
        { path: "/calendar", element: <CalendarPage /> },
        { path: "/project-description", element: <ProjectDescription /> },
        { path: "/my-page", element: <MyPage /> },
        { path: "/post", element: <Post /> },
      ],
    },
  ]);
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />;
    </ThemeProvider>
  );
}

export default App;
