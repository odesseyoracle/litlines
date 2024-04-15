import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./features/Navbar.jsx";
import { Login } from "./pages/Login.jsx";

import RegisterPage from "./pages/RegisterPage.jsx";
import { Home } from "./pages/Home.jsx";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  );
}

export default App;
