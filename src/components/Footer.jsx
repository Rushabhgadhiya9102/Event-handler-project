import React from "react";
import Logo from "../assets/react.svg";

const Footer = () => {
  return (
    <>
      <section className="Footer-section">
        <div className="h-screen w-full flex justify-center items-center">
          <div className="">
            <div className="Footersection-content">
              <div className="h-auto py-20 w-full flex justify-center items-center">
                <div className="">
                  <div className="herosection-content">
                    <h1 className="text-5xl text-center mx-auto font-semibold my-4 w-200">
                      Join a community of millions
                    </h1>
                    <p className="text-xl text-center mx-auto font-semibold w-200 my-5">
                      You’re not alone. Two million developers from all over the
                      world visit the React docs every month. React is something
                      that people and teams can agree on.
                    </p>
                    <p className="text-xl text-center mx-auto font-semibold w-200 my-5">
                      This is why React is more than a library, an architecture,
                      or even an ecosystem. React is a community. It’s a place
                      where you can ask for help, find opportunities, and meet
                      new friends. You will meet both developers and designers,
                      beginners and experts, researchers and artists, teachers
                      and students. Our backgrounds may be very different, but
                      React lets us all create user interfaces together.
                    </p>
                  </div>
                </div>
              </div>

              <img
                src={Logo}
                className="size-30 mx-auto spinLogo"
                alt="React-logo"
              />
              <h2 className="text-5xl text-center font-semibold my-4">
                Welcome to the <br /> React community
              </h2>
              <div className="font-semibold my-5 text-center">
                <button className="bg-sky-400 text-white py-2 px-4 rounded-full me-3">
                  Get started
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="main-footer">
        <div className="p-20">
          <div className="grid grid-cols-4">
            <ul className="mx-auto">
              <li>
                <h2 className="font-semibold text-xl mb-5">Learn React</h2>
              </li>
              <li>
                <p>Quick Start</p>
              </li>
              <li>
                <p>Installation</p>
              </li>
              <li>
                <p>Describing the UI</p>
              </li>
              <li>
                <p>Adding Interactivity</p>
              </li>
              <li>
                <p>Managing State</p>
              </li>
              <li>
                <p>Escape Hatches</p>
              </li>
            </ul>
            <ul className="mx-auto">
              <li>
                <h2 className="font-semibold text-xl mb-5">API Reference</h2>
              </li>
              <li>
                <p>React APIs</p>
              </li>
              <li>
                <p>React DOM APIs</p>
              </li>
            </ul>
            <ul className="mx-auto">
              <li>
                <h2 className="font-semibold text-xl mb-5">Community</h2>
              </li>
              <li>
                <p>Code of Conduct</p>
              </li>
              <li>
                <p>Meet the Team</p>
              </li>
              <li>
                <p>Docs Contributiors</p>
              </li>
              <li>
                <p>Acknowledgements</p>
              </li>
            </ul>
            <ul className="mx-auto">
              <li>
                <h2 className="font-semibold text-xl mb-5">More</h2>
              </li>
              <li>
                <p>Blog</p>
              </li>
              <li>
                <p>React Native</p>
              </li>
              <li>
                <p>Privacy</p>
              </li>
              <li>
                <p>Terms</p>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
