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
// import Footer from "./Components/Footer";
function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<RequestBlood />} />
        <Route path="/register" element={<RegisterUser admin={0}/>} />
        <Route path="/emergency" element={<EmergencyPage />} />
        <Route path="/search/:bloodgroup/:location" element={<SearchResult />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
