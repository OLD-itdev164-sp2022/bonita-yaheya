import React from "react"
import { Link, graphql, } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/images"
import  { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/seo"

const Contact = ({ data }) =>{
    const { name, company, address } = data.site.siteMetadata.contact;
    return (
        <Layout>
            <Seo title="Contact" />
            <h1>Contact Us</h1>
            <p>Please send all inquiries to: </p>
            <div>{company}</div>
            <div>{`C/O ${name}`}</div>
            <div>{address}</div>

            <div>
                <StaticImage src="../images/gatsby-icon.png" 
                alt=" gatsby-icon" 
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

export default Contact

export const query = graphql`
    query {
        site {
            siteMetadata {
                contact {
                 name 
                 company
                 address
                }
            }
        }
    }
    `