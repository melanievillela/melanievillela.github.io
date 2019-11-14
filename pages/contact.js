import Layout from '../components/Layout';

const Contact = () => (
    <Layout>
        <h2>CONTACT ME</h2>
        <p>
            You can fill out the form below or you can check out my <a href="https://www.linkedin.com/in/melanie-villela-62381574/" target="_blank">Linkedin</a> or <a href="https://github.com/melanievillela/" target="_blank">Github</a>.
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

        <style jsx>
            {`            
                a {
                    color: #FC4445;
                    text-decoration: none;
                    font-weight: bold;
                }

                form {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }

                h2 {
                    color: #FFA69E;
                }

                p {
                    line-height: 1.75;
                    color: #333333;
                }

                h2, input, label, p, textarea {
                    font-family: 'Montserrat', sans-serif;
                }

                input {
                    width: 300px;
                }

                input[type=submit] {
                    font-weight: bold;
                    background-color: #FC4445;
                    color: white;
                    font-size: 18px;
                    border: none;
                    padding: 10px;
                    box-shadow: 1px 1px 2px #333333;
                    margin: 15px;
                }

                input[type=submit]:hover {
                    cursor: pointer;
                    box-shadow: 3px 3px 2px #333333;
                }

                label {
                    font-weight: bold;
                    margin: 15px;
                }
                
                textarea {
                    height: 250px;
                    width: 300px;
                }
            `}
        </style>
    </Layout>
);
  
export default Contact;