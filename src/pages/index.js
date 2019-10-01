import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Languages from '../components/languages'

export default () => (
  <Layout>
    <SEO title="Home" />
    <h1>About Me</h1>
    <figure>
      <Image source="jason.jpg"/>
      <figcaption>Jason Howie at the Metropolitan Opera House in New York City</figcaption>
    </figure>
    <p>My name is Jason Howie. I am a Full-Stack Web developer looking to further my education in programming and
    find full-time work doing it. Currently I have spent about a year and a half learning programming and am a recent graduate
    of the Full-Stack JavaScript Techdegree with Treehouse. I also have finished two Nanodegrees with Udacity, including
    the Intro to Programming and Front-End Web Development Nanodegrees. 
    I am always pursuing to learn more, create and experience new technology.</p>
    <p><strong>I am versed in:</strong></p>
    <Languages />
    
    <p>Before I took the journey on the life of a programming, I was pursuing a degree in Music. Vocal Performance to be
    exact. I have a passion in performing and have performed in everything from Operas to contemporary pop-accapella groups
    and everything in between. I went to Kent State Universty and graduated with a degree in Music with a concentration in
    Vocal Performance. Although I loved performance I felt I needed to make myself more marketable, and found programming 
    which I am starting to enjoy just as much.</p>
    <p>You can view my Resume <a href="img/job_resume.pdf" target="_blank">here</a>.</p>
  </Layout>
)
