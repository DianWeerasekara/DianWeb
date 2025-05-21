import AboutMe from "./components/about-me/AboutMe";
import Education from "./components/education/Education";
import MyDetails from "./components/myDetails/MyDetails";
import Skills from "./components/skills/Skills";
import Topbar from "./components/Topbar/Topbar";

function App() {
  return (
    <>
      <Topbar />
      <MyDetails />
      <AboutMe />
      <Skills />
      <Education />
      <h1>Hello World</h1>
    </>
  );
}

export default App;
