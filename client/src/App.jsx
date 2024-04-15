import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./features/Navbar.jsx";
import AddPost from "./pages/AddPost.jsx";
import { Login } from "./pages/Login.jsx";
import PostList from "./pages/PostList.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>

      <RegisterPage />

      <AddPost />
      <PostList />
    </>
  );
}

export default App;
