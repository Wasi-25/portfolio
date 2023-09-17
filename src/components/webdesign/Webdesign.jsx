import React from 'react';
import "./webdesign.css";
import IMG1 from "../../assets/modern-webpage-1.png";
import IMG2 from "../../assets/modern-webpage-2.png";
import IMG3 from "../../assets/modern-webpage-3.png";
import IMG4 from "../../assets/modern-webpage-4.png";

const Webdesign = () => {

    const data = [
        {
            id: 1,
            image: IMG1,
            title: "Coca-Cola",
        },
        {
            id: 2,
            image: IMG2,
            title: "Clothing Brand",
        },
        {
            id: 3,
            image: IMG3,
            title: "Starbucks Coffee",
        },
        {
            id: 4,
            image: IMG4,
            title: "musai: Music with AI",
        }
    ]


    return (
        <section id='webdesign'>
            <h5>Some of my</h5>
            <h2>Modern Web Pages</h2>
            <div className="container webdesign__container">
                {
                    data.map(({id, title, image}) => {
                        return (
                            <article key={id} className="webdesign__item">
                                <div className="webdesign__item-image">
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

export default Webdesign