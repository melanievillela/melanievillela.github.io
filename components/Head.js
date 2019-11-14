import Head from "next/head";

function CreateHead() {
    return (
        <div>
            <Head>
                <title>Melanie Villela | Web Developer</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link href="https://fonts.googleapis.com/css?family=Anton|Megrim|Montserrat&display=swap" rel="stylesheet"></link>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css"></link>
            </Head>
            
        <style jsx global>
            {`
                body {
                    overflow-y: scroll;
                }
            `}
        </style> 
        </div>
      )
    }
    
export default CreateHead