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
function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/request_blood" element={<RequestBlood />} />
        <Route path="/register" element={<RegisterUser admin={0}/>} />
        <Route path="/emergency" element={<EmergencyPage />} />
        <Route path="/search" element={<SearchResult />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />

      </Routes>
    </div>
  );
}

export default App;
