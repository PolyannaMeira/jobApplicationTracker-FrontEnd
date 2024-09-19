import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Route } from "react-router-dom";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import JobsPage from "./components/JobsPage.jsx";
import JobDetails from "./components/JobDetails/JobDetails.jsx"
import AccountDetails from "./components/AccountDetails/AccountDetails.jsx";
import DeleteJob from "./components/DeleteJob/DeleteJob.jsx";
import JobProfileForm from "./components/JobProfileForm/JobProfileForm.jsx";
import UpdateJobProfileForm from "./components/UpdateJobProfileForm/UpdateJobProfileForm.jsx";
import Login from "./components/Login/Login.jsx";
import SignUp from "./components/SignUp/SignUp.jsx"

const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/myjobs", element: <JobsPage /> },
  { path: "/myjob/:id", element: <JobDetails /> },
  { path: "/delete/:id", element: <DeleteJob /> },
  { Route, path: "/account-details", element: <AccountDetails /> },
  { Route, path: "/JobProfileForm", element: <JobProfileForm/>},
  { Route, path: "/UpdateJobProfileForm/:id", element: <UpdateJobProfileForm/>},
  { Route, path:"/signup", element: <SignUp/>} 
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
