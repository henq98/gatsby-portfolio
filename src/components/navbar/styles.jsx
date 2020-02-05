import styled from "styled-components"

export const Container = styled.div`
  position: fixed;
  display: initial;
  height: 20vh;
  width: 350px;
  z-index: 10;
`
export const SidebarToggle = styled.p`
  display: ${props => (!props.toggle ? `none` : `relative`)};
  font-size: 2rem;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
  width: 112px;
  margin: 40px;
  padding: 10px;
`
export const SidebarItems = styled.ul`
  display: ${props => (props.toggle ? `none` : `relative`)};
  list-style: none;
  position: fixed;
  z-index: 10;
  font-size: 2rem;
`
export const Item = styled.li`
  text-transform: uppercase;
  cursor: pointer;
  padding: 2px 14px 5px;
  margin-bottom: 20px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
  :hover {
    color: rgba(0, 0, 0, 0.85);
    background-color: #fbfbfb;
    transition: 0.3s;
  }
`
