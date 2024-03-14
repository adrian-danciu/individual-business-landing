import "./App.css";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HeroBanner from "./components/HeroBanner";
import MyMission from "./components/MyMission";
import Navigation from "./components/Navigation";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="font-sans">
      <Navigation />
      <HeroBanner />
      <MyMission />
      <Services />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
