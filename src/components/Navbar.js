import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import logo from '../images/logo.svg'

const Nav = styled.nav`
  background: ${props => props.theme.colors.grey.light};
  grid-column: 1 /-1;
  margin-left: -1rem;
  margin-right: -1rem;
  padding: 1rem;
`

const Content = styled.div`
  font-family: ${props => props.theme.fontFamily.serif};
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;

  a {
    color: ${props => props.theme.colors.white};
    font-size: 1.2rem;
    &:hover {
      color: ${props => props.theme.colors.white};
    }
  }
`

const NavList = styled.ul`
  display: flex;
  margin: 0;
  list-style: none;
`

const BrandItem = styled.li`
  padding: 15px 15px;
  font-size: 18px;
  line-height: 20px;
  margin-right: auto;
`

const MenuItem = styled.li`
  text-transform: uppercase;
  padding: 15px 15px;
  a {
    text-transform: uppercase;
    font-size: 16px;
  }
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 15px 4px;
  }
`
const LogoWrapper = styled.div`
  width: 100px;
  z-index: 1000;
  margin-top: -30px;
  position: absolute;
  left: 50%;
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    margin-top: -25px;
  }
  @media (max-width: ${props => props.theme.breakpoints.small}) {
    visibility: hidden;
  }
`

const Logo = styled.div`
  width: 100px;
  opacity: 1;
  position: absolute;
  margin-left: -50%;
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    margin-left: -25%;
  }
  img {
    width: 100px;
    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
      width:70px;
    }
  }
`

const Navbar = () => (
  <Nav>
    <Content>
      <NavList role="navigation">
        <BrandItem>
          <Link to="/">iaikabupatenblitar.or.id</Link>
        </BrandItem>
      </NavList>
      <LogoWrapper>
        <Logo>
          <Link to="/">
            <img src={logo} alt={`iai logo`} />
          </Link>
        </Logo>
      </LogoWrapper>
    </Content>
  </Nav>
)

export default Navbar
