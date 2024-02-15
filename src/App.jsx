import "./index.css";
import Intro from "./components/Intro";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Navbar from "./components/Navbar";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <About />
      <Portfolio />
      <Resume />
      <Contact />
    </>
  );
}

export default App;
