import Layout from '../components/Layout';

const About = () => (
    <Layout>
        <h2>ABOUT ME</h2>
        <p>
            Hello World! Just kidding. I'm about as tired seeing that phrase as I am writing it. Seriously though welcome to my online portfolio. 
            My name is Melanie Villela and I'm from Houston, Texas which is where I currently live. I'm constantly trying to improve myself and love learning 
            new technologies. One of my favorite technologies to use is Javascript.
        </p>
        <p>
            I originally attended the University of Houston for Engineering. I was not sure whether I wanted to pursue Mechanical or Petroleum at the 
            time. Due to family issues I was unable to complete my degree but I plan on enrolling again to pursue a degree in Computer Science. I have 
            always placed an emphasis on continuing my education whether it be with classes at a university of online courses. Two of my favorite developers 
            that I follow and have taken online courses from are Wes Bos and Brad Traversy.
        </p>
        <p>
            Right now I am juggling freelancing and working in the oil and gas industry as a mechanical designer but I am looking to make a career change 
            into full time web development. I love working with people on projects and I'm not afraid of a challenge. The projects that I have worked on have 
            been for a variety of clients. I have done everything from simple landing pages to building custom web scrapers as well as some pet projects of my own.
        </p>
        <p>
            My goal is to eventually become a full stack developer so I have started learning more about how the backend works using Node.js. 
            I recently purchased a course on Udemy from Brad Traversy that really dives deep into this and I can't wait to finish. 
            I also recently purchased a Rasberrypi to play around with. I do not know much about computer hardware but it looks like a fun hobby to get into. 
            I have not quite figured out what exactly it is I want to make. There are so many awesome projects that I have seen out there. 
        </p>

        <style jsx>
            {`
                h2, p {
                    font-family: 'Montserrat', sans-serif;
                    color: #FFA69E;
                }

                p {
                    line-height: 1.75;
                    color: #333333;
                }
            `}
        </style>

    </Layout>
);
  
export default About;