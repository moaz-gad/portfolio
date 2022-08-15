import React from "react"
import "./portfolio.css"
import IMG1 from "../../assets/bootstrap-project.png"
import IMG2 from "../../assets/mansoug-website.png"
import IMG3 from "../../assets/memory-game.png"
import IMG4 from "../../assets/maven.png"
import IMG5 from "../../assets/portfolio.png"
import IMG6 from "../../assets/souqgomaa.png"
import IMG7 from "../../assets/maady.png"
import IMG8 from "../../assets/experts.png"
import IMG9 from "../../assets/customCatPage.png"
import IMG10 from "../../assets/educational website.png"

const data = [
  {
    id: 2,
    image: IMG2,
    title: "Wordpress E-commerce website for mansoug company",
    github: "#portfolio",
    demo: "https://mansoug.com/",
  },
  {
    id: 6,
    image: IMG6,
    title: "Large E-commerce website Laravel| Bootstrap| CSS| javaScript ",
    github: "#",
    demo: "https://souqelgomaa.com/",
  },
  {
    id: 7,
    image: IMG7,
    title: "Saudi office for legal matters |WordPress",
    github: "#",
    demo: "https://moazz.pkbs.org/",
  },
  {
    id: 8,
    image: IMG8,
    title: "Experts company for large projects |WordPress |Elementor",
    github: "#",
    demo: "https://co.khksa.com/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Wordpress commercial website for American maven company ",
    github: "https://github.com",
    demo: "http://www.mavenexpertsusa.com/",
  },
  {
    id: 3,
    image: IMG3,
    title: " Memory game with REACT| REACT ROUTER",
    github: "https://github.com/moaz-gad/React-memory-game-project",
    demo: "https://moaz-gad.github.io/React-memory-game-project/",
  },
  {
    id: 1,
    image: IMG1,
    title: "Bootstrap 5 project & CSS3 styles",
    github: "https://github.com/moaz-gad/bootStrap-5-page",
    demo: "https://moaz-gad.github.io/bootStrap-5-page/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Personal portolio using REACT| React-icons| EmailJS",
    github: "https://github.com/moaz-gad/portfolio",
    demo: "https://moaz-gad.github.io/portfolio",
  },
  {
    id: 9,
    image: IMG9,
    title: "Custom category page Wordpress| woocommerce |CSS",
    github: "#",
    demo: "https://w.souqelgomaa.com/product-category/%D8%A3%D8%AC%D9%87%D8%B2%D8%A9-%D9%85%D9%86%D8%B2%D9%84%D9%8A%D8%A9/",
  },
  {
    id: 10,
    image: IMG10,
    title: "Education website for courses WordPress",
    github: "#",
    demo: "https://expks.com/",
  },
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My recent work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a className="btn" href={github}>
                  GitHUb
                </a>
                <a
                  className="btn btn-primary"
                  href={demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
export default Portfolio
