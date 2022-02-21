import { Container } from './styles'

function Square ({ handleClick, isSelected, owner }) {
  const renderPiece = () => {
    switch (owner) {
      case 'p1':
        return '🧁'

      case 'p2':
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
