import React from "react"
import {  graphql, Link, } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/images"
import  { StaticImage }  from "gatsby-plugin-image"
import Seo from "../components/seo"


const About = ({ data }) =>{
    const { name, company } = data.site.siteMetadata.contact;
    return (
        <Layout>
            <Seo title="About" />
            <h1>About Us</h1>
            <p>{`${company} was started by ${name} in 2021 `}</p>
            <p>{`At ${company} we just make blogs!`}</p>
            <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>

                <StaticImage src="../images/gatsby-astronaut.png" 
                 alt="A gatsby astronaut" 
                 width={300} 
                 quality={95} 
                 formats={["AUTO", "WEBP", "AVIF"]}
                 placedholder="none" 
                 marginBottom="10px"
                 
                 />
                
            </div>
            
            <Link to="/">Home</Link>
        </Layout>
    )
}

export default About

export const query = graphql`
    query {
        site {
            siteMetadata {
                contact {
                 name 
                 company
                }
            }
        }
    }
    `