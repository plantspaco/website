import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
import FloatingTopBar from "./components/FloatingTopBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Events from "./pages/Events";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import GrowClub from "./pages/GrowClub";
import SocialImpact from "./pages/SocialImpact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <FloatingTopBar />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/events" element={<Events />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/grow-club" element={<GrowClub />} />
          <Route path="/social-impact" element={<SocialImpact />} />
        </Routes>
        <Footer />
        <Toaster position="top-right" />
      </BrowserRouter>
    </div>
  );
}

export default App;
