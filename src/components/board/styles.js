import styled from 'styled-components'
import { paletteColor } from '../../theme'

export const Container = styled.div`
  display: grid;
  grid-template-rows: 100px 100px 100px;
  grid-template-columns: 100px 100px 100px;
  column-gap: 10px;
  row-gap: 10px;
  background-color: ${paletteColor.blue};
  /* width: 300px;
  height: 300px; */
`
