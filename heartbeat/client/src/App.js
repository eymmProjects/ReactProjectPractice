import "./App.css";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddNews from "./pages/AddNews";
import LandingPage from "./pages/LandingPage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NewsDesc from "./pages/NewsDesc";
import PostedNewsItems from "./pages/PostedNewsItems";
import EditNews from "./pages/EditNews";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/add" element={<AddNews />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

export const ProtectedRoute = ({ children }) => {
  if (localStorage.getItem("sheynews-user")) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
};
