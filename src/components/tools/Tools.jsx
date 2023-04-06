import React from 'react';
import "./tools.css";
import IMG1 from "../../assets/github.png";
import IMG2 from "../../assets/npm.png";
import IMG3 from "../../assets/netlify.png";
import IMG4 from "../../assets/postman.png";
import IMG5 from "../../assets/render.png";
import IMG6 from "../../assets/vscode.png";

const Portfolio = () => {


  const data =[
    {
      id:1,
      image: IMG1,
      title: "Github",
    },
    {
      id:2,
      image: IMG2,
      title: "NPM",
    },
    {
      id:3,
      image: IMG3,
      title: "Netlify",
    },
    {
      id:4,
      image: IMG4,
      title: "Postman",
    },
    {
      id:5,
      image: IMG5,
      title: "Render",
    },
    {
      id:5,
      image: IMG6,
      title: "Vs Code",
    }
  ]

  return (
    <section id='projects'>
      <h2>Tools</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, title, image, github, demo, about})=>{
            return(
              <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio
