import React, { useState } from "react"
import { Link } from "gatsby"

import { Container, SidebarItems, Item, SidebarToggle } from "./styles"

export default () => {
  const [toggle, setToggle] = useState(true)

  const sidebarOn = () => setToggle(false)
  const sidebarOff = () => setToggle(true)

  return (
    <Container onMouseEnter={sidebarOn} onMouseLeave={sidebarOff}>
      <SidebarToggle toggle={toggle}>MENU</SidebarToggle>
      <SidebarItems toggle={toggle}>
        <Link to="/#home">
          <Item>Home</Item>
        </Link>
        <Link to="/#projects">
          <Item>Projects</Item>
        </Link>
        <Link to="/#about">
          <Item>About</Item>
        </Link>
        <Link to="/#contact">
          <Item>Contact</Item>
        </Link>
      </SidebarItems>
    </Container>
  )
}
