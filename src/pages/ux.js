import * as React from "react"
import { StaticImage, GatsbyImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Process from "../components/process"
import checkscreenSize from "../utility/checkscreenSize"

// code
class UXPage extends React.Component {

	constructor(props) {
		super(props);
		this.state = [
			{
				sectionclassName: "flexRow flexRowL",
				imageclassName: "flexRow imagecontainerStyles imageRcontainerStyles",
				title: "EXPLORE",
				copy: <p className="pStyles">I did <strong>user interviews</strong> with people that have food allergies to find out what their experiences have been when eating out, specifically ordering food to go.</p>,
				image: this.props.data.pics.edges[3].node.childImageSharp.gatsbyImageData,
				alt: "EXPLORE"
			},
			{
				sectionclassName: "flexRow flexRowR mobile",
				imageclassName: "flexRow imagecontainerStyles imageLcontainerStyles",
				title: "EMPATHIZE",
				copy: <p className="pStyles">I created <strong>empathy maps</strong> and <strong>user personas</strong> to help me figure out who the users were and what were their pain points.</p>,
				image: this.props.data.pics.edges[4].node.childImageSharp.gatsbyImageData,
				alt: "EMPATHIZE"
			},
			{
				sectionclassName: "flexRow flexRowL",
				imageclassName: "flexRow imagecontainerStyles imageRcontainerStyles",
				title: "DEFINE",
				copy: <p className="pStyles">I created both <strong>problem statements</strong> and <strong>if/then statements</strong> to help me figure out what problem I was going to try and solve for.</p>,
				image: this.props.data.pics.edges[5].node.childImageSharp.gatsbyImageData,
				alt: "DEFINE"
			},
			{
				sectionclassName: "flexRow flexRowR mobile",
				imageclassName: "flexRow imagecontainerStyles imageLcontainerStyles",
				title: "RESEARCH",
				copy: <p className="pStyles">I created a <strong>competitive audit</strong> for restaurants that served similar food and offered some type of menu ordering customization options.</p>,
				image: this.props.data.pics.edges[6].node.childImageSharp.gatsbyImageData,
				alt: "RESEARCH"
			},
			{
				sectionclassName: "flexRow flexRowL",
				imageclassName: "flexRow imagecontainerStyles imageRcontainerStyles",
				title: "IDEATE",
				copy: <p className="pStyles">I created <strong>user flows</strong> and <strong>sitemaps</strong> to make sure there was a clear path for customers to successfully complete the ordering and checkout process.</p>,
				image: this.props.data.pics.edges[7].node.childImageSharp.gatsbyImageData,
				alt: "IDEATE"
			},
			{
				sectionclassName: "flexRow flexRowR mobile",
				imageclassName: "flexRow imagecontainerStyles imageLcontainerStyles",
				title: "PROTOTYPE",
				copy: <p className="pStyles">I started by creating <strong>paper wireframes</strong>. I then moved on to <strong>low-fidelity wireframes</strong>. I finally created <strong>low-fidelity prototypes</strong>.</p>,
				image: this.props.data.pics.edges[8].node.childImageSharp.gatsbyImageData,
				alt: "PROTOTYPE"
			},
			{
				sectionclassName: "flexRow flexRowL",
				imageclassName: "flexRow imagecontainerStyles imageRcontainerStyles",
				title: "TEST",
				copy: <p className="pStyles">I wrote a <strong>research plan</strong> and conducted <strong>usability testing</strong> based off the low-fidelity prototypes.</p>,
				image: this.props.data.pics.edges[9].node.childImageSharp.gatsbyImageData,
				alt: "TEST"
			},
			{
				sectionclassName: "flexRow flexRowR mobile",
				imageclassName: "flexRow imagecontainerStyles imageLcontainerStyles",
				title: "ANALYZE",
				copy: <p className="pStyles">I made an <strong>affinity diagram</strong> and wrote a <strong>usability testing report</strong> to help me analyze the data and find out any issues users were having and areas of improvement.</p>,
				image: this.props.data.pics.edges[10].node.childImageSharp.gatsbyImageData,
				alt: "ANALYZE"
			},
			{
				sectionclassName: "flexRow flexRowL mobile",
				imageclassName: "flexRow imagecontainerStyles imageRcontainerStyles",
				title: "IMPLEMENT",
				copy: <p className="pStyles">Using what I learned from the first round of testing I implemented changes and created <strong>high-fidelity wireframes</strong> and <strong>high-fidelity prototypes</strong>. I then repeated the testing and analyzing process.</p>,
				image: this.props.data.pics.edges[11].node.childImageSharp.gatsbyImageData,
				alt: "IMPLEMENT"
			},
		];
	}

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
						<p className="pStyles flexRowL">UI/UX Designer</p>
					</div>
					<div className="flexRow">
						<p className="boldStyles flexRowL">DURATION:</p>
						<p className="pStyles flexRowL">4 weeks</p>
					</div>  
					<div className="flexRow">
						<p className="boldStyles flexRowL">CHALLENGE:</p>
						<p className="pStyles flexRowL">Studies have shown that 1 in 10 adults in the US have a food allergy. 
						Many are unable to eat meals from restaurants due to these dietary restrictions. 
						Although many restaurants can make accommodations in meal preparation to meet these dietary 
						restrictions, this isn’t a widely known option.
						</p>
					</div>
					<div className="flexRow">
						<p className="boldStyles flexRowL">OBJECTIVE:</p>
						<p className="pStyles flexRowL">Design a better UX for both desktop and mobile that allows people with 
						dietary restrictions to feel more inclusive in the food preparation and ordering process.
						</p>
					</div>
					<div className="marginlargeStyles">
						<StaticImage src="../images/carawaykitchenmockup.png" alt="Caraway Kitchen Website Mockup" objectFit="contain"/>
					</div> 
				</section>
				<section className="marginStyles">
					<h2>PROCESS</h2>
				{this.state.map((item, index) =>
					<>
					<Process 
						key={index}
						sectionclassName={item.sectionclassName}
						imageclassName={item.imageclassName}
						title={item.title}
						copy={item.copy}
						image={<GatsbyImage image={item.image} alt={item.alt}></GatsbyImage>}
					>
					</Process>
					<div className="line"></div>
					</>
				)}
				</section>          
				<section className="marginStyles">
					<h2>CONCLUSION</h2>
					<div>
						<p className="boldStyles flexRowL">USERS WANT OPTIONS, JUST NOT TOO MANY</p>
						<p className="pStyles flexRowL">One of the assumptions I made originally was offering users 
						multiple options, whether it be multiple locations to view the menu or multiple menu customization 
						buttons, was going to be helpful and decrease the time a user takes to order their food. 
						This turned out to be wrong. It only caused more confusion and frustration due to information 
						overload. Through testing I finally found a sweet spot to determine how many pre-set menu 
						customization buttons to use that would create a more inculsive user experience for people with food 
						allergies.
						</p>
					</div>
				</section>
			</Layout>
		)
	}
}

export default UXPage

export const pageQuery = graphql `
	query {
		pics: allFile(
			filter: {relativeDirectory: {eq: "process"}}
			sort: {order: ASC, fields: name}
		) {
			edges {
				node {
					name
					childImageSharp {
						gatsbyImageData
					}
				}
			}
		}
	}
`