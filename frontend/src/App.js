import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./components/Header";
import { Home } from "./pages/Home";
import  Events  from "./pages/Events";
import { Create } from "./pages/Create";
import Spinner from "./components/Spinner";

function App() {
  return (
    <>
      <Router>
        <div className="container font-custom w-full">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/events" element={<Events />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/spinner" element={<Spinner/>} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />

    </>
  );
}

export default App;
