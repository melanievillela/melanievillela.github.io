import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import checkscreenSize from "../utility/checkscreenSize"

// code
class FrontEnd extends React.Component {
	componentDidMount() {
		checkscreenSize();
		window.addEventListener('resize', checkscreenSize);
	}

  render() {
		return (
			<Layout>
				<section className="marginStyles">
					<h2>OVERVIEW</h2>
					<div className="flexRow">
						<p className="boldStyles flexRowL">ROLE:</p>
						<p className="pStyles flexRowL">Front End Developer</p>
					</div>
					<div className="flexRow">
						<p className="boldStyles flexRowL">TECH:</p>
						<p className="pStyles flexRowL">Google Maps API, Bootstrap, React, Firebase, Heroku</p>
					</div>  
					<div className="flexRow">
						<p className="boldStyles flexRowL">SUMMARY:</p>
						<p className="pStyles flexRowL">This is a capstone project of a website re-design using the technology 
                        stack listed above to showcase my front end development work. You can click 
                        <strong><a href="https://houston-art-crawl.herokuapp.com/" target="_blank" rel="noreferrer" title="Live Site"> HERE </a></strong> 
                        to see live site and <strong><a href="https://github.com/melanievillela/art-crawl" target="_blank" rel="noreferrer" title="GIT Repo">HERE </a></strong> 
                        to see the GIT repo.
						</p>
					</div>
				</section>
				<section className="marginStyles flexRow ux">
					<StaticImage src="../images/houstonartcrawl.png" alt="Front End Work" />
				</section>    
			</Layout>
		)
	}
}

export default FrontEnd