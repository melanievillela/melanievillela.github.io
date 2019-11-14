import Layout from '../components/Layout';
import Projects from '../components/Projects';

const Personal = () => (
    <Layout>
        <h1>Personal Projects</h1>
        <Projects />

        <style jsx>
            {`
                h1 {
                    font-family: 'Montserrat', sans-serif;
                    color: #FFA69E;
                }

                @media only screen and (max-width: 550px) {
                    h1 {
                        font-size: 1.25em;
                    }
                }
            `}
        </style>
    </Layout>
);
  
export default Personal;