import Head from './Head';
import Header from './Header';
import Nav from './Nav';
  
const Layout = props => (
    <div>
        <Head />
        <Header />
        <Nav />
        {props.children}

        <style jsx>
            {`               
                div {
                    margin: 50px;
                }

                @media only screen and (max-width: 550px) {
                    div {
                        margin: 25px;
                    }
                }
            `}
        </style>
    </div>
);
  
export default Layout;