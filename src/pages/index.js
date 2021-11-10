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
          <h2>FRONT END | UX | GRAPHICS | HOUSTON</h2>
          <p className="italicStyles">The whole is greater than the sum of its parts.</p>
          <p className="pintroStyles">I am a front end developer with a background in UX and graphic design. 
            I am based out of Houston, Texas. I love traveling and meeting new people.
          </p>
          <p className="pssstStyles">Pssst... This website was designed and coded by me in Gatsby!</p>
        </section>
        <div className="flexCol introcontainertwoStyles">
          <Link to="/ux">
            <StaticImage src="../images/ux.png" alt="ux projects" />
          </Link>        
        </div>
        <div className="flexCol introcontainertwoStyles">
          <Link to="/frontend">
            <StaticImage src="../images/frontend.png" alt="front end projects" />
          </Link>        
        </div>
        <div className="flexCol introcontainertwoStyles">
          <Link to="/design">
            <StaticImage src="../images/graphics.png" alt="graphic design projects" />
          </Link>        
        </div>
      </Layout>
    )
  }
}

export default IndexPage