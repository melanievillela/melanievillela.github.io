import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import checkscreenSize from "../utility/checkscreenSize"

// code
class DesignPage extends React.Component {
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
						<p className="pStyles flexRowL">Graphic Designer</p>
					</div>
					<div className="flexRow">
						<p className="boldStyles flexRowL">TECH:</p>
						<p className="pStyles flexRowL">Illustrator, Photoshop</p>
					</div>  
					<div className="flexRow">
						<p className="boldStyles flexRowL">SUMMARY:</p>
						<p className="pStyles flexRowL">These are various graphic designs I have done throughout the years.
						</p>
					</div>
				</section>
				<section className="marginStyles flexRow ux">
					<StaticImage src="../images/design/logo.png" alt="Design Work" />
					<StaticImage src="../images/design/brain.png" alt="Design Work" />
					<StaticImage src="../images/design/postcard.png" alt="Design Work" />
					<StaticImage src="../images/design/destiny_invitation.jpg" alt="Design Work" />
					<StaticImage src="../images/design/joseph_invitation.jpg" alt="Design Work" />
					<StaticImage src="../images/design/Banner-1.png" alt="Design Work" />
					<StaticImage src="../images/design/Banner-2.png" alt="Design Work" />
					<StaticImage src="../images/design/RestorationLogo.png" alt="Design Work" />
					<StaticImage src="../images/design/Landoscapes.png" alt="Design Work" />
					<StaticImage src="../images/design/PoochCoutureTag.png" alt="Design Work" />
				</section>    
			</Layout>
		)
	}
}

export default DesignPage