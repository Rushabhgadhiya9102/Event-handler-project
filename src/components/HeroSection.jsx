import React from "react";
import Logo from "../assets/react.svg";

const HeroSection = ({ handleMouseLeave, handleMouseOver, BtnMode2 }) => {
  return (
    <>
      <section className="Hero-section">
        <div className="h-screen w-full flex justify-center items-center">
          <div className="">
            <div className="herosection-content">
              <img
                src={Logo}
                className="size-30 mx-auto spinLogo"
                alt="React-logo"
              />
              <h1 className="text-5xl text-center font-semibold my-4">React</h1>
              <p className="text-3xl text-center font-semibold">
                The library for web and native user interfaces
              </p>
              <div className="font-semibold my-5 text-center">
                <button
                  className="bg-sky-400 text-white py-2 px-4 rounded-full me-3 duration-300"
                  onMouseOver={handleMouseOver}
                  onMouseLeave={handleMouseLeave}
                  ref={BtnMode2}
                >
                  Learn React
                </button>
                <button className=" border border-gray-300 py-2 px-4 rounded-full" >
                  API Reference
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
