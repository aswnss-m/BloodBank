import Home from "./Pages/Home";
import RequestBlood from "./Pages/RequestBlood";
import { Route,Routes} from "react-router-dom";
import Navbar from "./Components/Navbar";
import RegisterUser from "./Pages/RegisterUser";
import EmergencyPage from "./Pages/EmergencyPage";
import SearchResult from "./Pages/SearchResult";
import Profile from "./Pages/Profile";
import Login from "./Pages/Login";
import Admin from "./Pages/Admin";
import { useState } from "react";
// import Footer from "./Components/Footer";
function App() {
  const [islogged, setIslogged] = useState(localStorage.getItem('isAuth'));

const handleLogin = (isLoggedIn) => {
  setIslogged(isLoggedIn);
}

const handleLogout = () => {
  setIslogged(false);
}
  return (

    <div className="app">
      <Navbar onLogout={handleLogout}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<RequestBlood />} />
        <Route path="/register" element={<RegisterUser admin={0}/>} />
        <Route path="/emergency" element={<EmergencyPage />} />
        <Route path="/search/:bloodgroup/:location" element={<SearchResult />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login onLogin={handleLogin}/>} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
