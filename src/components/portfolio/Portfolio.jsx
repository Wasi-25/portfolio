import React from 'react';
import "./portfolio.css";
import IMG1 from "../../assets/mygram.png";
import IMG2 from "../../assets/chat-app.png";
import IMG3 from "../../assets/note-app.png";
import IMG4 from "../../assets/weather-react.png";
import IMG5 from "../../assets/weather-node.png";
import IMG6 from "../../assets/portfolio.png";
import IMG7 from "../../assets/food.png";

const Portfolio = () => {


  const data =[
    {
      id:1,
      image: IMG1,
      title: "Social Media App",
      about:"myGram is a Social Media Web App created with MERN (MongoDB, ExpressJS, ReactJS, NodeJS) with the capability to create, update, delete, like posts, etc.",
      github:"https://github.com/Wasi-25/socialmedia",
      demo: "https://mygram.onrender.com/"
    },
    {
      id:7,
      image: IMG7,
      title: "Food Delivery App",
      about:"FoodHut is a Food Delivery Web App created with MERN (MongoDB, ExpressJS, ReactJS, NodeJS)",
      github:"https://github.com/Wasi-25/FoodHut/",
      demo: "https://foodhut.onrender.com/"
    },
    {
      id:2,
      image: IMG2,
      title: "Real-time Chat Application",
      about:"WhatsChat is a Real-time Chat Application created using React JS and Socket.io",
      github:"https://github.com/Wasi-25/ChatApp",
      demo: "https://whats-chat2.netlify.app/"
    },
    {
      id:3,
      image: IMG3,
      title: "Note Taking App",
      about:"Scratch Notes is a note taking app similar to GoogleKeep that saves data on local storage, it is created using HTML, CSS and Javacript.",
      github:"https://github.com/Wasi-25/Google-Keep-Clone",
      demo: "https://scratchnotepad.netlify.app/"
    },
    {
      id:4,
      image: IMG4,
      title: "Weather App using React",
      about:"MyWeatherApp is a Real-Time Weather Web Application that is created using React JS and OpenWeatherMap API",
      github:"https://github.com/Wasi-25/weatherApp",
      demo: "https://myyweatherapp1.netlify.app/"
    },
    {
      id:5,
      image: IMG5,
      title: "Weather App using Node JS",
      about:"WeatherLive is a Real-Time Weather Web Application that is created using Node JS and OpenWeatherMap API",
      github:"https://github.com/Wasi-25/weatherapp-node",
      demo: "https://weatherapp-z762.onrender.com/"
    },
    {
      id:6,
      image: IMG6,
      title: "Portfolio Website",
      about:"Created this Portfolio Website by using React JS.",
      github:"https://github.com/Wasi-25/portfolio",
      demo: "https://wasiullahkhalique.netlify.app/"
    }
  ]

  return (
    <section id='projects'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, title, image, github, demo, about})=>{
            return(
              <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <p>{about}</p>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target="_blank">Github</a>
                <a href={demo} className='btn btn-primary' target="_blank">Live Demo</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio
