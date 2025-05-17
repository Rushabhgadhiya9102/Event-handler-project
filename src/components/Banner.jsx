import React from "react";
import BannerImg1 from "../assets/BannerImg1.png"
import BannerImg2 from "../assets/BannerImg2.png"
import BannerImg3 from "../assets/BannerImg3.png"
import BannerImg4 from "../assets/BannerImg4.png"
import BannerImg5 from "../assets/BannerImg5.png"

const Banner = () => {
  const BannerData = [
    {
      heading: "Create user interfaces from components",
      description:
        "React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.",
      description2:
        "Whether you work on your own or with thousands of other developers, using React feels the same. It is designed to let you seamlessly combine components written by independent people, teams, and organizations.",
      image: BannerImg1
    },
    {
      heading: "Write components with code and markup",
      description:
        "React components are JavaScript functions. Want to show some content conditionally? Use an if statement. Displaying a list? Try array map(). Learning React is learning programming.",
      description2:
        "This markup syntax is called JSX. It is a JavaScript syntax extension popularized by React. Putting JSX markup close to related rendering logic makes React components easy to create, maintain, and delete.",
      image: BannerImg2
    },
    {
      heading: "Add interactivity wherever you need it",
      description:
        "React components receive data and return what should appear on the screen. You can pass them new data in response to an interaction, like when the user types into an input. React will then update the screen to match the new data.",
      description2:
        "You don’t have to build your whole page in React. Add React to your existing HTML page, and render interactive React components anywhere on it.",
      image: BannerImg3
    },
    {
      heading: "Go full-stack with a framework",
      description:
        "React is a library. It lets you put components together, but it doesn’t prescribe how to do routing and data fetching. To build an entire app with React, we recommend a full-stack React framework like Next.js or Remix.",
      description2:
        "React is also an architecture. Frameworks that implement it let you fetch data in asynchronous components that run on the server or even during the build. Read data from a file or a database, and pass it down to your interactive components.",
      image: BannerImg4
    },
    {
      heading: "Use the best from every platform",
      description:
        "People love web and native apps for different reasons. React lets you build both web apps and native apps using the same skills. It leans upon each platform’s unique strengths to let your interfaces feel just right on every platform.",
      description2:
        "With React, you can be a web and a native developer. Your team can ship to many platforms without sacrificing the user experience. Your organization can bridge the platform silos, and form teams that own entire features end-to-end.",
      image: BannerImg5
    },
  ];

  return (
    <>
      {BannerData.map((val) => {
        const { heading, description, description2, image } = val;

        return (
          <section className="Hero-section">
            <div className="h-auto py-20 w-full flex justify-center items-center">
              <div className="">
                <div className="herosection-content">
                  <h1 className="text-5xl text-center mx-auto font-semibold my-4 w-200">
                    {heading}
                  </h1>
                  <p className="text-xl text-center mx-auto font-semibold w-200 my-5">
                    {description}
                  </p>
                  <img src={image} className="w-300 my-10 h-auto mx-auto" alt="banner-img" />
                  <p className="text-xl text-center mx-auto font-semibold w-200 my-5">
                    {description2}
                  </p>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default Banner;
