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
  const display = () => {
    switch (currentCategory.name) {
      case "About":
        return <About />;
      case "Contact":
        return <Contact />;
      case "Portfolio":
        return <Portfolio />;
      case "resume":
        return <Resume />;
    }
  };

  return (
    <div>
      <Nav>
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      </Nav>
      <main>{display()};</main>
      <Footer></Footer>
    </div>
  );
}

export default App;
