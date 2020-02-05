import React from "react"
import { StaticQuery, graphql } from "gatsby"

import {
  Container,
  Card,
  PictureOfMe,
  CardBody,
  CardText,
  CardTitle,
  CardButton,
} from "./styles"

export default () => (
  <Container id="about">
    <Card>
      <StaticQuery
        query={graphql`
          {
            itsme: file(relativePath: { eq: "itsme.jpg" }) {
              id
              childImageSharp {
                fluid(maxWidth: 1600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={data => (
          <PictureOfMe
            fluid={data.itsme.childImageSharp.fluid}
            alt="Picture of me"
          />
        )}
      />
      <CardBody>
        <CardTitle>About</CardTitle>
        <CardText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ab
          laudantium eius nesciunt ratione commodi architecto nobis numquam,
          quasi rem quidem necessitatibus quas odit dolore ducimus ipsa
          reiciendis, nisi neque.
        </CardText>
        <a href="#about">
          <CardButton>View Resume</CardButton>
        </a>
      </CardBody>
    </Card>
  </Container>
)
