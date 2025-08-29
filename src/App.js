// import React, { useState, useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  Outlet,
} from "react-router-dom";
import Home from "./pages/Home";
import Skill from "./pages/Skillset";
import Project from "./pages/Projects";
import Resume from "./pages/Resume";
import Certificates from "./pages/Certificates";
import Contact from "./pages/Contact";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop";
import CopyPopup from "./components/copypop/CopyPopup";
import { useVisitTracker } from "./hooks/useVisitTracker";

import "./App.css";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Preloader = ({ load }) => {
  return (
    load && (
      <div className="preloader active">
        <div className="spinner"></div>
      </div>
    )
  );
};

const AppLayout = ({ load }) => (
  <>
    <Preloader load={load} />
    <Navbar />
    <CopyPopup />
    <ScrollToTop />
    <VisitTracker />
    <div className="App" id={load ? "no-scroll" : "scroll"}>
      <Outlet />
    </div>
    <Footer />
  </>
);

const VisitTracker = () => {
  useVisitTracker();
  return null;
};

const AdminLayout = () => (
  <>
    <Outlet />
  </>
);
function AppRouter() {
  // const [load, setLoad] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => setLoad(false), 5);
  //   return () => clearTimeout(timer);
  // }, []);

  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <AppLayout />,
        children: [
          { index: true, element: <Home /> },
          { path: "skillset", element: <Skill /> },
          { path: "project", element: <Project /> },
          { path: "resume", element: <Resume /> },
          { path: "certificates", element: <Certificates /> },
          { path: "contact", element: <Contact /> },
          { path: "*", element: <Navigate to = "/" replace /> },
        ],
      },
      {
        path: "/admin-:adminId",
        element: <AdminLayout />,
        children: [
          { index: true, element: <AdminLogin /> },
          { path: "dashboard", element: <AdminDashboard /> },
        ],
      },
    ],
    {
      future: {
        v7_startTransition: true,
        v7_normalizeFormMethod: true,
        v7_normalizeFormAction: true,
        v7_normalizeHead: true,
        v7_normalizePathname: true,
        v7_relativePath: true,
        v7_relativeSplatPath: true,
      },
    }
  );

  return <RouterProvider router={router} />;
}

export default AppRouter;
