import { useState } from "react";

import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

import "./App.css";

function App() {
  const [darkMode, setDarkMode] =
    useState(false);

  return (
    <div
      className={
        darkMode ? "app dark" : "app"
      }
    >
      <Header
        darkMode={darkMode}
        toggleTheme={() =>
          setDarkMode(!darkMode)
        }
      />

      <div className="grid">
        <ProfileCard />
        <Skills />
        <Projects />
      </div>
    </div>
  );
}

export default App;