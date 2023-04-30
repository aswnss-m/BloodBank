import Home from "./Pages/Home";
import RequestBlood from "./Pages/RequestBlood";
import { Route,Routes} from "react-router-dom";
import Navbar from "./Components/Navbar";
import RegisterUser from "./Pages/RegisterUser";
import EmergencyPage from "./Pages/EmergencyPage";
import SearchResult from "./Pages/SearchResult";
import Profile from "./Pages/Profile";
function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/request_blood" element={<RequestBlood />} />
        <Route path="/register" element={<RegisterUser />} />
        <Route path="/emergency" element={<EmergencyPage />} />
        <Route path="/search" element={<SearchResult />} />
        <Route path="/profile" element={<Profile />} />

      </Routes>
    </div>
  );
}

export default App;
