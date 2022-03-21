import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/github.png",
      title: "Resu_me",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img:
        "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
      img_app: "./assets/coming-soon-store-placeholder-image.gif",
      link: "",
      repo_link: ""
    },
    {
      id: "2",
      icon: "./assets/github.png",
      title: "Words Are Hard",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
      img_app: "./assets/wah-login.JPG",
      link: "https://immense-peak-70880.herokuapp.com/",
      repo_link: "https://github.com/gr4ham18/words-are-hard"
    },
    {
      id: "3",
      icon: "./assets/github.png",
      title: "Weather To Walk",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
      img_app: "./assets/weather to walk.png",
      link: "https://gr4ham18.github.io/weather-to-walk/",
      repo_link: "https://github.com/gr4ham18/weather-to-walk"

    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                <a href={d.repo_link} target="_blank">
                  <div className="imgContainer">                 
                    <img src={d.icon} alt="" />                   
                  </div>
                  </a>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Top Projects</span>
                </div>
              </div>
              <div className="right">
              <a href={d.link} target="_blank">
                <img
                  src={d.img_app}
                  alt=""
                />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
