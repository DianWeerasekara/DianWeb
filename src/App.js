import AboutMe from "./components/about-me/AboutMe";
import VantaBackground from "./components/background/VantaBackground";
import Education from "./components/education/Education";
import MyDetails from "./components/myDetails/MyDetails";
import Skills from "./components/skills/Skills";
import Topbar from "./components/Topbar/Topbar";

function App() {
  return (
    <>
      <VantaBackground />
      <Topbar />
      <MyDetails />
      <AboutMe />
      <Skills />
      <Education />
    </>
  );
}

export default App;
