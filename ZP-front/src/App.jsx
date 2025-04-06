import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Content from "./components/Content";
import MyNames from "./components/MyNames";
import Register from "./components/Register";
import "./App.css";

function App(props) {
  return (
    <Router>
      <div className="bg-gradient-to-b from-[#11131F] to-[#2C3155] min-h-screen">
        <Header />
        {/* <Ethers/> */}
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/names" element={<MyNames />} />
          <Route path="/reg" element={<Register name={name} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
