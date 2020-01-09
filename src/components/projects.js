import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Projects = (props) => {
    props === "Professional" ?
        const professional = useStaticQuery(graphql`
        query Projects {
            __typename
            allAirtable(filter: {data: {Level: {eq: "Personal"}}}) {
                edges {
                    node {
                        data {
                            Name
                            Description
                            Link
                            Level
                        }
                    }
                }
            }
        }`)
    }
    
    {console.log(props)}

    return (
        <div>
            {data.allAirtable.edges.map((item, i) => (
                <article kety={i}>
                    <h3>{item.node.data.Name}</h3>
                    <p>{item.node.data.Description}</p>
                </article>
            ))}
        </div>
    )
}

export default Projects;

/*
        <div>
            {data.allAirtable.edges.map((item, i) => (
                <article kety={i}>
                    <h3>{item.node.data.Name}</h3>
                    <p>{item.node.data.Description}</p>
                </article>
            ))}
        </div>


            const data = useStaticQuery(graphql`
        query Projects {
            __typename
            allAirtable {
                edges {
                    node {
                        data {
                            Name
                            Description
                            Link
                            Level
                        }
                    }
                }
            }
        }
    `)
*/