import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Languages from '../components/languages'
import resume from '../misc/job_resume.pdf'

export default () => (
  <Layout>
    <SEO title="Home" />
    <h1>About Me</h1>
    <figure>
      <Image source="jason.jpg"/>
      <figcaption>Jason Howie at the Metropolitan Opera House in New York City</figcaption>
    </figure>
    <p>My name is Jason Howie. I am a Full-Stack Web developer looking to further my education in programming and
    find full-time work doing it. Currently I am a student at <a href="https://www.techelevator.com/" target="_blank">Tech Elevator</a> in Cleveland, Ohio,
    a 14-week coding bootcamp, learning to be a Full-Stack Developer. I am enrolled in their C#/.NET cohort, learning remotely due to the 
    COVID-19 pandemic. Before Tech Elevator I learned through various online resources earning a
    Full-Stack JavaScript Techdegree with Treehouse. I also have finished two Nanodegrees with Udacity, including
    the Intro to Programming and Front-End Web Development Nanodegrees. 
    I am always pursuing to learn more, create and experience new technology.</p>
    <p><strong>I am versed in:</strong></p>
    <Languages />
    
    <p>Before I took the journey on the life of a programming, I was pursuing a life in Music. Vocal Performance to be
    exact. I have a passion in performing and have performed in everything from operas to contemporary pop-accapella groups
    and everything in between. I went to Kent State Universty and graduated with a degree in Music with a concentration in
    Vocal Performance. Although I loved performance I felt I needed to make myself more marketable, and found programming 
    which I am enjoying just as much.</p>
  </Layout>
)
