import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { Button } from '../components'

const Hero = styled.div`
  grid-column: 1 / -1;
  padding: 3rem 2rem 6rem 2rem;
  margin-left: -1rem;
  margin-right: -1rem;
  text-align: center;
  text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  color: ${props => props.theme.colors.grey.dark};

  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    padding: 2rem 1rem 4rem 1rem;
  }

  p {
    font-size: 1.68rem;
    margin-top: -1rem;
    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
      font-size: 1.45rem;
    }
    @media (max-width: ${props => props.theme.breakpoints.phone}) {
      font-size: 1.25rem;
    }
  }
`
export default () => (
  <Hero>
    <h1>IAI Kabupaten Blitar</h1>
    <p>
      Selamat datang di website resmi Ikatan Apoteker Kabupaten Blitar.
    </p>
  </Hero>
)
