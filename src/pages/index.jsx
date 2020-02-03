import React from "react"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons"

import { GlobalStyles, Layout } from "../styles/layout"
import Navbar from "../components/navbar"
import Footer from "../components/footer"

import Home from "../components/home-section"
import Projects from "../components/projects-section"
import About from "../components/about-section"
import Contact from "../components/contact-section"

library.add(fab, faCheckSquare, faCoffee)
// To smooth scroll links
// if (typeof window !== "undefined") {
//   require("smooth-scroll")('a[href*="#"]')
// }

export default () => {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Layout>
        <Home />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </Layout>
    </>
  )
}
