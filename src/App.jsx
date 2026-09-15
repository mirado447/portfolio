import './App.css';
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";
import Stack from "./components/Stack";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <Project />
      <Stack />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;