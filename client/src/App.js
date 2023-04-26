import Home from "./Pages/Home";
import RequestBlood from "./Pages/RequestBlood";
import { Route,Routes} from "react-router-dom";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/request_blood" element={<RequestBlood />} />
      </Routes>
    </div>
  );
}

export default App;
