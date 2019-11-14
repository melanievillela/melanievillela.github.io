import Link from 'next/link';

const Header = () => (
    <div>
        <Link href="/"><h1>MV</h1></Link>
        <div className="nav-icon">
            <div className="hamburger"></div>
            <div className="hamburger"></div>
            <div className="hamburger"></div>
        </div>

    <style jsx>
        {`
            a {
                margin-right: 25px;
            }

            div {
                width: 100%;
                height: 75px;
            }

            h1 {
                font-family: 'Megrim', cursive;
                float: left;
                margin-top: 0;
                cursor: pointer;
                color: #333333;
            }

            h1:hover {
                color: #FC4445;
            }

            .hamburger {
                width: 35px;
                height: 5px;
                background-color: #FC4445;
                margin: 6px 0;
              }

            .nav-icon {
                float: right;
                cursor: pointer;
                width: 35px;
                height: auto;
            }
        `}
    </style>
    </div>
);

export default Header;