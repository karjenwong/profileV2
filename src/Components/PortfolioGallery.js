import React from "react";
import Carousel from "react-bootstrap/Carousel";
function PortfolioGallery() {
  const data = [
    {
      title: "Marvel Focus",
      caption:
        "An informational site about a Marvel film and their Marvel comic counterparts.",
      directory: "/images/www.marvelfocus.site_.png",
      git: "https://github.com/karjenwong/marvel-focus"
    },
    {
      title: "Login Page",
      caption: "A simple login form using Ajax, jquery, and php.",
      directory: "/images/login.png",
      git: "https://github.com/karjenwong/Login_Form_Basic"
    }
  ];

  const slides = data.map((item, i) => {
    return (
      <Carousel.Item key={i} >
        <img className="image" src={item.directory} alt={"slide " + i} />
        <Carousel.Caption>
          <h3>Project: {item.title}</h3>
          <p>
            {item.caption}{" "}
            <a href={item.git} target="_blank" rel="noopener noreferrer">
              Github
            </a>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  });
  return <Carousel interval={null}>{slides}</Carousel>;
}
export default PortfolioGallery;
