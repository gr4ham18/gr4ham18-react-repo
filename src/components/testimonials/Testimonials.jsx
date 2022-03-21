import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "GitHub",
      title: "gitHub.com/gr4ham18",
      img:
        "assets/mygithub.png",
      icon: "assets/github.png",
      desc:
        "View all my Projects and Repos!",
        link:"https://github.com/gr4ham18"
    },
    {
      id: 2,
      name: "Resume",
      title: "...",
      img:
        "assets/writing.png",
      icon: "assets/resume.jpg",
      desc:
        "Check out my resume here!",
      featured: true,
      
    },
    {
      id: 3,
      name: "LinkedIn",
      title: "linkedin.com/in/gabriel-dornelles-graham/",
      img:
        "assets/mylinked.png",
      icon: "assets/linkedin.png",
      desc:
        "Connect with me on LinkedIn",
        link:"https://linkedin.com/in/gabriel-dornelles-graham/"
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Find Me</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />

              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img className="right" src={d.icon} alt="" />
            </div>
            <a href={d.link} target="_blank">
            <div className="center" id="description">
              {d.desc}
            </div>
            </a>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
