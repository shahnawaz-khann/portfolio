import './App.css';
import './styles/colors.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ModernNavbar from "./components/ModernNavbar";
import AnimatedSpaceBackground from "./components/AnimatedSpaceBackground";
import { Banner } from "./components/Banner";
import { IntroSection } from "./components/IntroSection";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <AnimatedSpaceBackground />
      <ModernNavbar />
      <Banner />
      <IntroSection />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;