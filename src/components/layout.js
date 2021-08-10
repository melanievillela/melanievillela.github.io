import React from "react"
import { Link } from "gatsby"
import "./layout.css"

export default function Layout({ children }) {

  return (
    <main>
      <title>Melanie Villela Portfolio</title>
      <header>
        <nav className="flexCol">
          <Link to="/"><h1>Melanie Villela</h1></Link>
          <ul className="flexRow">
            <li><a href="https://drive.google.com/file/d/1UTzI65E-XYlIo6ZZj8nHB_CaI920UF-Y/view?usp=sharing" target="_blank" rel="noreferrer" title="Resume">Resume</a></li>
          </ul>
        </nav>
      </header>
      {children}
    </main>
  )
}