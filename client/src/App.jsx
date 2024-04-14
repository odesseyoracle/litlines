import "./App.css";
import Navbar from "./features/Navbar.jsx";
import AddPost from "./pages/AddPost.jsx";
import { Login } from "./pages/Login.jsx";
import PostList from "./pages/PostList.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";

function App() {
  return (
    <>
      <Navbar />

      <Login />

      <RegisterPage />

      <AddPost />
      <PostList />
    </>
  );
}

export default App;
