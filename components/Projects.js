import React, { Component } from 'react';

class Projects extends Component {

    state = {
		personal_projects: [
            {
                name: "The Adventures of Little Tikka",
                image_default: "static/Little-Tikka-XL.png",
                image_s: "static/Little-Tikka-S.png",
                image_m: "static/Little-Tikka-M.png",
                image_l: "static/Little-Tikka-L.png",
                description: `This is one of the first projects that I created because I saw a website that used parallax scrolling to tell a beautiful love story 
                of a couple named Jess and Russ and it really inspired me. I created my own version 
                to tell the story of my youngest son. Think Look Who's Talking meets James Bond. This is a work in progress and does not work on tablet or 
                mobile devices.`
            },
            {
                name: "Houston Art Crawl",
                image_default: "static/Houston-Art-Crawl-XL.png",
                image_s: "static/Houston-Art-Crawl-S.png",
                image_m: "static/Houston-Art-Crawl-M.png",
                image_l: "static/Houston-Art-Crawl-L.png",
                description: `This is a conceptual remake of the Houston Area Art Crawl website. I used Materialize, vanilla Javascript and used the 
                Google Maps API.`
            },
            {
                name: "US Time Zones",
                image_default: "static/US-Time-Zones-XL.png",
                image_s: "static/US-Time-Zones-S.png",
                image_m: "static/US-Time-Zones-M.png",
                image_l: "static/US-Time-Zones-L.png",
                description: `I originally saw this tutorial as part of Wes Bos's Javascript 30 course and thought 
                why show one clock when you can show 4? So I created a timezone site that shows you the timezones in the United States no matter what time 
                zone the user is in. I used vanilla Javascript as well as the Moment library.`
            },
        ],
        professional_projects: [
            {
                name: "Dimas Landscaping",
                image_default: "static/Dimas-Landscaping-XL.png",
                image_s: "static/Dimas-Landscaping-S.png",
                image_m: "static/Dimas-Landscaping-M.png",
                image_l: "static/Dimas-Landscaping-L.png",
                description: `This is a website I created for a landscape company. I created it with React. The contact form uses Nodemailer and uses
                Express on the backend. There is a login verification for the payment gateway that works using the Stripe API.`
            },
            {
                name: "Bold Body Fitness",
                image_default: "static/Bold-Body-Fitness-XL.png",
                image_s: "static/Bold-Body-Fitness-S.png",
                image_m: "static/Bold-Body-Fitness-M.png",
                image_l: "static/Bold-Body-Fitness-L.png",
                description: `This is a squeeze page that I created for a fitness training company. I created it with React and I also 
                used Materialize for the components. The contact form uses Formspree on the backend. The companies FB and IG feed are also loaded 
                using their respective API's.`
            },
            {
                name: "Dumpy House Buyers",
                image_default: "static/Dumpy-House-Buyers-XL.png",
                image_s: "static/Dumpy-House-Buyers-S.png",
                image_m: "static/Dumpy-House-Buyers-M.png",
                image_l: "static/Dumpy-House-Buyers-L.png",
                description: `This is a squeeze page that I created for a wholesaling real estate company. I created it with vanilla Javascript and I also 
                used Materialize for the components. The contact form uses Formspree on the backend.`
            }
        ],
        active_page: null  
    }

    componentDidMount() {
        const page = window.next.router.pathname;
        this.setState({
            active_page: page
        });

        //Displays the project info either under the image or toggled behind depending on screen size
        const images = document.querySelectorAll("img");
        const articles = document.querySelectorAll("article");

        if (screen.width > 550) {
            images.forEach(image => {
                image.addEventListener("click", () => {
                    image.classList.toggle("hide");
                });
            });
    
            articles.forEach(article => {
                article.addEventListener("click", () => {
                    image.classList.remove("hide");
                });
            });
        }
    }
   
	render() {   
        const personalProjects = this.state.personal_projects;
        const professionalProjects = this.state.professional_projects;

        return (
            <div className="container">
                <div className="fade-container"></div>
                {this.state.active_page === "/professional" ?
                    professionalProjects.map((item, index) =>  
                        <div className="project-container" key={index}>
                            <picture>
                                <source media="(max-width: 650px)" srcSet={item.image_s}></source>
                                <source media="(max-width: 1050px)" srcSet={item.image_m}></source>
                                <source media="(max-width: 1450px)" srcSet={item.image_l}></source>
                                <img src={item.image_default} alt={item.name}></img>
                            </picture>
                            <article>
                                <h3>{item.name}</h3>
                                <p>{item.description}</p>
                            </article>
                        </div>
                    ) :
                    personalProjects.map((item, index) =>  
                        <div className="project-container" key={index}>
                            <picture>
                                <source media="(max-width: 650px)" srcSet={item.image_s}></source>
                                <source media="(max-width: 1050px)" srcSet={item.image_m}></source>
                                <source media="(max-width: 1450px)" srcSet={item.image_l}></source>
                                <img src={item.image_default} alt={item.name}></img>
                            </picture>
                            <article>
                                <h3>{item.name}</h3>
                                <p>{item.description}</p>
                            </article>
                        </div>
                    )
                } 

                <style jsx>
                    {`
                        a {
                            text-decoration: none;
                            color: #FC4445;
                        }

                        article {
                            position: absolute;
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            align-items: center;
                            background-color: white;
                            height: 100%;
                            z-index: -1;
                        }

                        .container {
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            flex-wrap: wrap;
                            margin: 5%;
                        }

                        .hide {
                            opacity: 0;
                            transition: opacity 1s ease-in-out;
                        }

                        img {
                            max-width: 100%;
                            height: auto;
                            transition: transform .5s ease-in-out, box-shadow .5s ease-in-out;
                            transition: opacity 1s ease-in-out;
                        }
                        
                        img:hover {
                            box-shadow: 0 10px 20px;
                            transform: scale(1.01);
                            cursor: pointer;
                        }

                        h2, h3, p {
                            font-family: 'Montserrat', sans-serif;
                            color: #FFA69E;
                        }

                        p {
                            line-height: 1.75;
                            color: #333333;
                            max-width: 75%;
                        }

                        .project-container {
                            position: relative;
                            margin-bottom: 50px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                        }

                        @media only screen and (max-width: 550px) {
                            article {
                                position: relative;
                            }

                            .container {
                                margin: 0;
                            }

                            h3 {
                                font-size: .85em;
                            }

                            p {
                                font-size: .75em;
                                line-height: 1.25;
                                max-width: 100%;
                            }

                            .project-container {
                                flex-direction: column;
                            }                             
                        }
                    `}
                </style>

            </div>           
        )
    }
}

export default Projects;