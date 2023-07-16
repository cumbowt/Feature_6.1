import React from "react";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import Home from "../Home";
import {
  BrowserRouter as Router,
  Navigate,
  //Redirect,
  Routes,
  Route
  //Switch
} from "react-router-dom";
import AuthModule from "./Auth/Auth.js";
import AuthRegister from "./Auth/AuthRegister";
import AuthLogin from "./Auth/AuthLogin";

//Use the below with Switch and Redirect, but it threw an error
// const Components = () => {
//   return (
//     <Router>
//       <Switch>
//         <Route path="/auth" component={AuthModule} />
//         <Route path="/auth/register" component={AuthRegister} />
//         <Route path="/auth/login" component={AuthLogin} />
//         {/*<Route path="/" component={<ProtectedRoute path="/" replace />} />*/}
//         <Redirect to="/auth" />
//       </Switch>
//     </Router>
//   );
// };

// export default Components;

const Components = () => {
  return (
    <Router>
      {/*<switch>*/}
      {/*<Home />*/}
      {/*The Auth isn't working yet. Not sure why yet*/}
      {/*<AuthModule>*/}
      <Routes>
        <Route path="/auth" element={<AuthModule />} />
        <Route path="/auth/register" element={<AuthRegister />} />
        <Route path="/auth/login" element={<AuthLogin />} />
        <Route
          path="/"
          element={<ProtectedRoute path="/" component={<Home />} replace />}
        />
        <Route path="*" element={<Navigate to="/auth" replace />} />
      </Routes>
      {/*</AuthModule>*/}
      {/*</switch>*/}
    </Router>
  );
};

export default Components;

//started with this:
//export default function Components() {
//return (
// <Router>
