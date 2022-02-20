import styled from 'styled-components'
import { paletteColor } from '../../theme'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid ${paletteColor.blue}; */
  background-color: ${paletteColor.white};
  font-size: 2rem;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
`
