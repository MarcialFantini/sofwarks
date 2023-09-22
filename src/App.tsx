import "./App.css";
import AboutUs from "./components/AboutUs";
import FeaturedContent from "./components/FeaturedContent";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import WeCan from "./components/WeCan";

function App() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Navbar></Navbar>
      <Header></Header>
      <AboutUs></AboutUs>
      <div style={{ background: "whitesmoke" }}>
        <Project></Project>
        <WeCan></WeCan>
      </div>
      <FeaturedContent></FeaturedContent>
      <Footer></Footer>
    </div>
  );
}

export default App;
