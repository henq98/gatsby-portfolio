import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { swingAnimation } from "../../styles/keyframes"

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
`
export const BackgroundVideo = styled.video`
  position: fixed;
`
export const OverlayVideo = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.3);
`
export const MainTitle = styled.span`
  position: absolute;
  color: #fff;
  top: 30%;
  font-family: "Dancing Script";
  font-size: 8rem;
`
export const SocialIconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  width: 25%;
`
export const SocialIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
  font-size: 5rem;
  color: #fff;
  :hover {
    animation: 1s ${swingAnimation} ease;
  }
`
