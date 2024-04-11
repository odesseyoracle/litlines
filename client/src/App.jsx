import "./App.css";
import Navbar from "./features/Navbar.jsx";
import AddBook from "./pages/AddBook.jsx";
import AddPost from "./pages/AddPost.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";

function App() {
  return (
    <>
      <Navbar />
      <RegisterPage />

      <AddPost />
    </>
  );
}

export default App;
