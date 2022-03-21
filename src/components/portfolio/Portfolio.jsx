import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Deployed Websites",
    },
    {
      id: "web",
      title: "Deployed Websites",
    },
    {
      id: "mobile",
      title: "Video Walktroughs",
    },
    {
      id: "design",
      title: "Coming Soon",
    },
    {
      id: "content",
      title: "Coming Soon",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      case "content":
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Projects</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}

            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          
            <div className="item">
              <img
                src={d.img}
                alt=""
              />

              <h3 ><a id="top" href={d.link} target="_blank">{d.title}</a></h3>
              <a  href={d.repo} target="_blank">
              <img id="right" src="assets/github_white.png"/> </a>
                
            </div>
          
        ))}
      </div>
    </div>
  );
}
