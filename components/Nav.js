import Link from 'next/link';
import React from 'react';

class Nav extends React.Component {
    componentDidMount() {
        const navIcon = document.querySelector(".nav-icon");
        const nav = document.querySelector(".nav");
        const close = document.querySelector(".close");

        navIcon.addEventListener("click", () => {
            nav.style.width = "75vw";
        });

        close.addEventListener("click", () => {
            nav.style.width = "0";
        });
    }

    render() {

        return (
            <div className="nav">
                <ul>
                    <Link href="/"><li page="/">HOME</li></Link>
                    <Link href="/about"><li page="/about">ABOUT</li></Link>
                    <Link href="/professional"><li page="/professional">PROFESSIONAL PROJECTS</li></Link>
                    <Link href="/personal"><li page="/personal">PERSONAL PROJECTS</li></Link>
                    <Link href="/contact"><li page="/contact">CONTACT</li></Link>
                </ul>
                <div className="close">X</div>

                <style jsx>
                    {`
                        .close {
                            position: absolute;
                            top: 0;
                            right: 0;
                            margin: 0;
                            padding: 25px;
                            color: white;
                            cursor: pointer;
                            font-family: 'Anton', sans-serif;
                            font-size: 3em;
                        }

                        .nav {
                            height: 100vh;
                            width: 0;
                            position: fixed;
                            top: 0;
                            left: 0;
                            transition: 1.5s;
                            z-index: 1000;
                        }

                        ul {
                            list-style: none;
                            width: 100%;
                            height: 100%;
                            padding: 0;
                            margin: 0;
                            display: flex;
                            flex-direction: column;
                            justify-content: space-around;
                            align-items: center;
                            overflow-x: hidden;
                            background-color: #CCCCCC;
                        }

                        li {
                            font-family: 'Anton', sans-serif;
                            font-size: 3em;
                            color: white;
                            min-width: 75vw;
                            text-align: center;
                        }

                        .close:hover, li:hover {
                            color: #FC4445;
                            cursor: pointer;
                            text-shadow: .5px .5px .5px #555555;
                        }

                        @media only screen and (max-width: 400px) {
                            li {
                                font-size: 1.75em;
                            }
                        }
                    `}
                </style>                
            </div>
        )
    }
}

export default Nav;