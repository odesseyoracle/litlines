import "./App.css";
import Navbar from "./features/Navbar.jsx";
import AddBook from "./pages/AddBook.jsx";
import LoginPage from "./pages/LoginPage.jsx";

function App() {
  return (
    <>
      <Navbar />
      <LoginPage />
      <AddBook />
    </>
  );
}

export default App;
