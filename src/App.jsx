import React from 'react';
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Tools from "./components/tools/Tools";
import Contact from "./components/contact/Contact";
import Portfolio from "./components/portfolio/Portfolio";
import Footer from "./components/footer/Footer";


const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Tools />
      <Contact />
      <Footer />
    </>
  )
}

export default App;