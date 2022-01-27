import "./App.css";
import Blog from "./components/BlogSection";
import FirstSection from "./components/FirstSection";
import NavBar from "./components/nav";
//import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <NavBar />
      <FirstSection />
      <Skills />
      <Blog />
    </div>
  );
}

export default App;
