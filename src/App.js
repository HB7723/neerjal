import "./App.css";

// import HeroSection from "../src/components/HeroSection/HeroSection";
// import AboutUs from "../src/components/AboutUs/AboutUs";
// import Features from "../src/components/Features/Features";
// import Footer from "../src/components/Footer/Footer";

import Landing from "./pages/Landing";
import Book from "./pages/Book";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/book" element={<Book />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
