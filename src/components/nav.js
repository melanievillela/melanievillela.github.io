import React from "react";
import { Link } from "gatsby";

export default () => (
    <div className="nav">
        <ul>
            <Link to="/"><li>HOME</li></Link>
            <Link to="/about"><li>ABOUT</li></Link>
            <Link to="/professional"><li>PROFESSIONAL PROJECTS</li></Link>
            <Link to="/personal"><li>PERSONAL PROJECTS</li></Link>
            <Link to="/contact"><li>CONTACT</li></Link>
        </ul>
   </div>
)