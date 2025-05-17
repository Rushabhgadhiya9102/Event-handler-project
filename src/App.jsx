import React, { useRef } from "react";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

const App = () => {
  const ThemeMode = useRef(null);
  const BtnMode = useRef(null);
  const BtnMode2 = useRef(null);

  const handleMouseOver = ()=>{
    BtnMode2.current.style.width='150px'
    console.log("mouse over")

  }

  const handleMouseLeave = ()=>{
    BtnMode2.current.style.width='120px'
    console.log("mouse leave")    

  }


  const handleToggleTheme = () => {
    if (BtnMode.current.innerText === "Dark Mode") {

      ThemeMode.current.style.backgroundColor = "black";
      BtnMode.current.innerText = "Light Mode";
      ThemeMode.current.style.color = "white";
      console.log("Dark Mode on")

    } else {

      ThemeMode.current.style.backgroundColor = "white";
      BtnMode.current.innerText = "Dark Mode";
      ThemeMode.current.style.color = "black";
      console.log("Dark Mode off")

    }
  };

  return (
    <>
      <section ref={ThemeMode}>
        <Navigation
          handleToggleTheme={handleToggleTheme}
          BtnMode={BtnMode}
        />
        <HeroSection handleMouseLeave={handleMouseLeave} handleMouseOver={handleMouseOver} BtnMode2={BtnMode2}/>
        <Banner />
        <Footer />
      </section>
    </>
  );
};

export default App;
