import "./App.css";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import About from "./Components/About";
import Footer from "./Components/Footer";
import { DarkMode, LightMode } from "./Global/Variable";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function App() {
  const [theme, setTheme] = useState(DarkMode);

  const handleTheme = () => {
    if (theme.name === "light") setTheme(DarkMode);
    else setTheme(LightMode);
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".greet", { opacity: 0, y: 100, duration: 1 });
    gsap.from(".intro", { opacity: 0, y: 100, duration: 1, delay: 0.2 });
    gsap.from("#description", { opacity: 0, y: 100, duration: 1, delay: 0.4 });
    gsap.from(".illustration", { opacity: 0, y: 100, duration: 1, delay: 0.5 });
    gsap.from(".btn", {
      opacity: 0,
      y: 50,
      duration: 0.5,
      delay: 0.5,
      stagger: 0.3,
    });

    gsap.from(".para", {
      scrollTrigger: {
        trigger: "#top-para",
      },
      y: 50,
      duration: 1,
      delay: 0.5,
      opacity: 0,
      stagger: 1,
    });

    gsap.from(".project-head", {
      duration: 1,
      delay: 1,
      opacity: 0,
      y: 50,
      scrollTrigger: "#project-head",
    });

    gsap.from(".head", {
      duration: 1,
      delay: 1.1,
      opacity: 0,
      y: 50,
      scrollTrigger: "#left",
    });

    gsap.from("#project-desc", {
      duration: 1,
      delay: 1.2,
      opacity: 0,
      y: 50,
      scrollTrigger: "#left",
    });
    gsap.from(".btns", {
      duration: 1,
      delay: 1.2,
      opacity: 0,
      stagger: 0.3,
      y: 50,
      scrollTrigger: "#left",
    });

    gsap.from(".image", {
      duration: 0.7,
      delay: 1.4,
      opacity: 0,
      y: 50,
      scrollTrigger: "#left",
    });

    gsap.from(".skills-head", {
      duration: 1,
      y: 50,
      opacity: 0,
      delay: 1,
      scrollTrigger: "#skills-head",
    });
    gsap.from(".skills-subhead", {
      duration: 1,
      y: 50,
      opacity: 0,
      scrollTrigger: "#skills-subhead",
      delay: 1,
    });
    gsap.from(".sec-head", {
      duration: 1,
      y: 50,
      opacity: 0,
      delay: 1,
      scrollTrigger: "#sec-head",
    });
    gsap.from(".skill-icon", {
      duration: 0.4,
      y: 20,
      opacity: 0,
      delay: 1,
      stagger: 0.1,
      scrollTrigger: "#skill-icons",
    });

    gsap.from(".footer-head", {
      duration: 1,
      y: 50,
      opacity: 0,
      delay: 1,
      scrollTrigger: "#footer-head",
    });
    gsap.from("#btm", {
      duration: 1,
      y: 50,
      opacity: 0,
      delay: 1,
      scrollTrigger: "#skill-icons",
    });

    gsap.from(".social-link", {
      duration: 1,
      y: 50,
      opacity: 0,
      delay: 1,
      stagger: 0.1,
      scrollTrigger: "#social",
    });
  }, []);

  return (
    <div
      className="App"
      style={{
        backgroundColor: `${theme.background}`,
        color: `${theme.text}`,
      }}
    >
      <Header theme={theme} changeTheme={handleTheme} />
      <div className="app-container">
        <Home theme={theme} />
        <About theme={theme} />
        <Skills theme={theme} />
        <Projects theme={theme} />
      </div>
      <Footer theme={theme} />
    </div>
  );
}

export default App;
