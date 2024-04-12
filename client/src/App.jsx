import "./App.css";
import Navbar from "./features/Navbar.jsx";
import AddPost from "./pages/AddPost.jsx";
import PostList from "./pages/PostList.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";

function App() {
  return (
    <>
      <Navbar />
      <RegisterPage />

      <AddPost />
      <PostList />
    </>
  );
}

export default App;
