import React from "react"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons"

import { GlobalStyles, Layout } from "../styles/layout"
import Home from "../components/home-section"
import Projects from "../components/projects-section"
import About from "../components/about-section"
import Contact from "../components/contact-section"
import Footer from '../components/footer-section'

library.add(fab, faCheckSquare, faCoffee)

export default () => (
  <>
    <GlobalStyles />
    <Layout>
      <Home />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </Layout>
  </>
)
