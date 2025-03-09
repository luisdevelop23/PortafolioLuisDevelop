import "./App.css";
import { Route, Routes } from "react-router-dom";

import Footer from "./common/Footer";
import NavBar from "./common/Navbar";
import Home from "./page/Home";
import About from "./page/About";

function App() {
  return (
    <main>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
