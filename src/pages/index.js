import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import Layout from "../components/layout"

// code
class IndexPage extends React.Component {

  render() {
    return (
      <Layout>
        <section className="flexCol introcontaineroneStyles">
          <h2>UX | FRONT END | GRAPHICS | HOUSTON</h2>
          <p className="italicStyles">The whole is greater than the sum of its parts.</p>
          <p className="pintroStyles">I am a UX designer with a background in front end development and graphic design. 
            I am based out of Houston, Texas. I have a very empathetic nature that helps me understand and really
            connect with people.
          </p>
          <p className="pssstStyles">Pssst... This website was designed and coded by me in Gatsby!</p>
        </section>
        <div className="flexCol introcontainertwoStyles">
          <Link to="/ux">
            <StaticImage src="../images/carawaykitchenmockup.png" alt="Caraway Kitchen Website Mockup" />
          </Link>        
        </div>
        <div className="line"></div>
        <div className="flexCol introcontainertwoStyles">
          <Link to="/design">
            <StaticImage src="../images/design/front.png" alt="Design Work" />
          </Link>        
        </div>
      </Layout>
    )
  }
}

export default IndexPage