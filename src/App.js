import AOS from "aos";
import 'aos/dist/aos.css';
import React , { useEffect} from "react";
import Header from "./components/section/Header";
import About from "./components/section/About";
import Works from "./components/section/Works";
import Contact from "./components/section/Contact";
import Cursor from "./components/layouts/Cursor";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@fortawesome/fontawesome-free/css/all.css';
import "./styles/resets.css";
import "./styles/main.css";
import "./styles/heading.css";
import "./styles/images.css";
import "./styles/mediaq.css";
import "./styles/about.css";
import "./styles/projects.css";
import "./styles/contact.css";
import "./styles/carousel.css";
import "./styles/neonAnimations/linesanimation.css";
import "./styles/neonAnimations/flicker.css";
import "./styles/neonAnimations/cursor.css";
import "./styles/neonAnimations/neonBackground.css"; 
import "./styles/neonAnimations/mailme.css";
import "./styles/neonAnimations/gradientBorder.css";
import "./styles/neonAnimations/neonButton.css";
import "./styles/neonAnimations/neonScrollbar.css";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });


  }, []);

  return (
    <div className="App">
      <Cursor />
      <Header />
      <About />
      <Works />
      <Contact />
    </div>
  );
}

export default App;
