import AboutMe from "./components/about-me/AboutMe";
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
      <h1>Hello World</h1>
    </>
  );
}

export default App;
