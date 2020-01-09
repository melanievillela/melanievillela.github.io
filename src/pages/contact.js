import React from "react"
import Layout from "../components/layout";

export default () => (
    <div>
        <Layout>
            <h1>CONTACT ME</h1>
            <p>
                You can fill out the form below or you can check out my <a href="https://www.linkedin.com/in/melanie-villela-62381574/" target="_blank" rel="noopener noreferrer">Linkedin</a> or <a href="https://github.com/melanievillela/" target="_blank" rel="noopener noreferrer">Github</a>.
            </p>
            <form action="">
                <label htmlFor="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="First Name"></input>

                <label htmlFor="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Last Name"></input>

                <label htmlFor="email">Email</label>
                <input type="text" placeholder="Enter Email" name="email" required></input> 

                <label htmlFor="subject">Subject</label>
                <textarea id="subject" name="subject" placeholder="Talk to me!"></textarea>

                <input type="submit" value="Submit"></input>
            </form>
        </Layout>
    </div>
)