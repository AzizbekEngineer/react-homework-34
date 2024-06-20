import React from "react";
import Login from "./pages/login/Login";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Admin from "./pages/admi/Admi";
import Auth from "./pages/auth/Auth";
import SinglePage from "./pages/singlePage/SinglePage";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<SinglePage />} />
        <Route path="/" element={<Auth />}>
          <Route path="admin" element={<Admin />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
