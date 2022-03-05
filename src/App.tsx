import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { AuthRoute } from "./components/AuthRoute";
import { PublicRoute } from "./components/PublicRoute";
import HomePage from "./pages/HomePage/HomePage";
import { LinkPage } from "./pages/LinkPage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";

export default function App() {
  // const [isAuthenticating, setIsAuthenticating] = useState(true);
  // const [user, setUser] = useState<User | null>(null);
  // // Code for componentWillMount here
  // // This code is called only one time before intial render

  // useEffect(() => {
  //   const auth = getAuth();
  //   onAuthStateChanged(auth, (user) => {
  //     console.log("app is rerendered");
  //     if (user) {
  //       setUser(user);
  //     } else {
  //       setUser(null);
  //     }
  //     setIsAuthenticating(false);
  //   });
  // }, []);

  // if (isAuthenticating) {
  //   return <div>Loading...</div>;
  // }
  return (
    <Routes>
      <Route path="/link" element={<LinkPage />} />
      {/* <Route
        path="/"
        element={
          <AuthRoute redirect="/auth/login" authed={user ? true : false} />
        }
      >
        <Route path="/" element={<HomePage />} />
      </Route>
      <Route
        path="/auth/login"
        element={<PublicRoute redirect="/" authed={user ? true : false} />}
      >
        <Route path="" element={<LoginPage />} />
      </Route>
      <Route
        path="/auth/register"
        element={<PublicRoute redirect="/" authed={user ? true : false} />}
      >
        <Route path="" element={<RegisterPage />} />
      </Route> */}
    </Routes>
  );
}
