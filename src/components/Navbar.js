import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { darken, lighten } from 'polished'

const Nav = styled.nav`
  background: linear-gradient(
    45deg,
    ${props => darken(0.1, props.theme.colors.primary)},
    ${props => lighten(0.1, props.theme.colors.primary)}
  );
  grid-column: 1 /-1;
  margin-left: -1rem;
  margin-right: -1rem;
  padding: 1rem;
  box-shadow: inset 0px -10px 30px 0px rgba(0, 0, 0, 0.1);
`

const Content = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;

  a {
    color: ${props => props.theme.colors.white};
    font-size: 1.2rem;
    &:hover {
      opacity: 0.85;
      color: ${props => props.theme.colors.white};
    }
  }
`

const Navbar = () => (
  <Nav>
    <Content>
      <Link to="/">Home</Link>
    </Content>
  </Nav>
)

export default Navbar
