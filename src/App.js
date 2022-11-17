import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";

function App() {
  const [categories] = useState([
    {
      name: "About Me",
    },
    {
      name: "Contact",
    },
    {
      name: "Portfolio",
    },
    {
      name: "Resume",
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        {currentCategory.name === "About" ? <About /> : <></>}
        {currentCategory.name === "Portfolio" ? <Portfolio /> : <></>}
        {currentCategory.name === "Contact" ? <Contact /> : <></>}
        {currentCategory.name === "Resume" ? <Resume /> : <></>}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
