import React from "react"

import SEO from "../../components/seo"
import video from "../../assets/background-video.mp4"

import {
  Container,
  BackgroundVideo,
  OverlayVideo,
  MainTitle,
  SocialIconsContainer,
  SocialIcon,
} from "./styles"

export default () => (
  <Container id="home">
    <SEO title="Welcome" />
    <BackgroundVideo loop muted autoPlay>
      <source src={video} type="video/mp4" />
    </BackgroundVideo>
    <OverlayVideo />
    <MainTitle>Henrique Lima</MainTitle>
    <SocialIconsContainer>
      <a
        href="https://github.com/henriqueyang"
        target="_blank"
        rel="noopener noreferrer"
        title="GitHub"
      >
        <SocialIcon icon={["fab", "github"]} />
      </a>
      <a
        href="https://www.linkedin.com/in/henrique-silva-lima-80077915b/"
        target="_blank"
        rel="noopener noreferrer"
        title="Linkedin"
      >
        <SocialIcon icon={["fab", "linkedin"]} />
      </a>
    </SocialIconsContainer>
  </Container>
)
