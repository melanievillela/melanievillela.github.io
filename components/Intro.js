const Intro = () => (
    <div>
        <h2>I WORK WITH SOME AWESOME TECHNOLOGIES</h2>
        <h2 className="skills"></h2>
        <a href="/static/melanie_villela_resume.pdf" target="_blank">RESUME</a>

        <style jsx>
            {`
                a {
                    align-text: center;
                    text-decoration: none;
                    color: #FC4445;
                    font-family: 'Montserrat', sans-serif;
                    font-size: 1.5em;
                    align-self: center;
                    margin: 0.83em;
                }

                a:hover {
                    cursor: pointer;
                }

                div {
                    height: 50vh;
                    width: auto;
                    max-width: 100vw;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-evenly;
                }

                h2 {
                    font-family: 'Montserrat', sans-serif;
                    font-size: 3em;
                    text-align: center;
                    color: #333333;
                }

                .skills {
                    color: #FFA69E;
                    font-size: 5em;
                }

                .skills:after {
                    content:"";
                    animation: spin 8s ease-in-out infinite;
                    }
                }

                @keyframes spin {
                    0%   { content:"JAVASCRIPT";}
                    10%  { content:"PYTHON";}
                    20%  { content:"ILLUSTRATOR";}
                    30%  { content:"FLASK";}
                    40%  { content:"NODE";}
                    50%  { content:"PHOTOSHOP";}
                    60%  { content:"REACT";}
                    70%  { content:"JQUERY";}
                    80%  { content:"NEXT JS";}
                    90%  { content:"EXPRESS";}
                    100% { content:"JAVASCRIPT";}
                }

                @media only screen and (max-width: 600px) {
                    a {
                        font-size: 1em;
                    }

                    h2 {
                        font-size: 1.5em;
                    }

                    .skills {
                        font-size: 3em;
                    }
                }

                @media only screen and (max-width: 400px) {
                    h2 {
                        font-size: 1em;
                    }

                    .skills {
                        font-size: 2em;
                    }
                }

            `}
        </style>
    </div>
)

export default Intro;