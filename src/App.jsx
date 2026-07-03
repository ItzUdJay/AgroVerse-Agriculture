import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import Marketplace from "./components/pages/Marketplace";
import Learn from "./components/pages/Learn";
import Experts from "./components/pages/Experts";
import Register from "./components/pages/Register";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/experts" element={<Experts />} />

        <Route path="/register" element={<Register />}></Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
