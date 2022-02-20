import { Container } from './styles'

function Square ({ handleClick, isSelected, owner }) {
  const renderPiece = () => {
    switch (owner) {
      case true:
        return '🧁'

      case false:
        return '🌺'

      default:
        return ''
    }
  }

  return (
    <Container onClick={handleClick}>
      {renderPiece()}
    </Container>
  )
}

export default Square
