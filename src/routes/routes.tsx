import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navigation";
import {
  About,
  Blogs,
  Gallery,
  Homepage,
  Services,
  Testimonials,
} from "../pages";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Blogs />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
