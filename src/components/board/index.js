import React, { useState } from 'react'
import { Container } from './styles'
import Square from '../square'

function Board () {
  const initialSquareState = [
    {
      id: 1,
      isClicked: false,
      owner: undefined
    },
    {
      id: 2,
      isClicked: false,
      owner: undefined
    },
    {
      id: 3,
      isClicked: false,
      owner: undefined
    },
    {
      id: 4,
      isClicked: false,
      owner: undefined
    },
    {
      id: 5,
      isClicked: false,
      owner: undefined
    },
    {
      id: 6,
      isClicked: false,
      owner: undefined
    },
    {
      id: 7,
      isClicked: false,
      owner: undefined
    },
    {
      id: 8,
      isClicked: false,
      owner: undefined
    },
    {
      id: 9,
      isClicked: false,
      owner: undefined
    }
  ]
  const [currentOwner, setOwner] = useState('p1')
  const [winner, setWinner] = useState(undefined)
  const [squares, setSquares] = useState(initialSquareState)
  const [isDrawed, setIsDrawed] = useState(false)

  const handleWinner = (winner) => {
    setWinner(winner)
  }
  const handleDraw = () => {
    setIsDrawed(true)
  }

  const setCurrentOwner = (currentOwner) => {
    switch (currentOwner) {
      case 'p1':
        return 'p2'

      default:
        return 'p1'
    }
  }

  const handleSquareClicked = (squareId, ind) => {
    console.log('O quadrado foi clicado', squareId)

    // Ignora toda a função caso o quadrado já esteja clicado
    if (squares.filter(square => square.id === squareId)[0].isClicked === true) return

    const newSquares = squares
    newSquares[ind].isClicked = true
    newSquares[ind].owner = currentOwner

    setOwner(setCurrentOwner(currentOwner))

    setSquares([...newSquares])

    // const positions = squares.filter((square) => square.owner === currentOwner)
    const positions = []
    squares.map((square) => square.owner === currentOwner && positions.push(square.id))

    if (isWinner(positions)) {
      handleWinner(currentOwner)
    } else if (squares.filter(square => square.isClicked === true).length === 9) {
      handleDraw()
    }
  }

  const isWinner = (positions) => {
    console.log(positions)
    const winnablePositions = [
      [1, 2, 3], [4, 5, 6], [7, 8, 9],
      [1, 4, 7], [2, 5, 8], [3, 6, 9],
      [1, 5, 9], [3, 5, 7]
    ]

    for (let i = 0; i < winnablePositions.length; i++) {
      // console.log('T', winnablePositions[i].sort().join(), positions.sort().join())

      // if (winnablePositions[i].sort().join() === positions.sort().join()) {
      //   console.log('win')
      //   return true
      // }

      const a1 = winnablePositions[i].filter((position) => positions.includes(position))
      if (a1.length === 3) return true
    }

    return false
  }

  return (
    <Container>
      {
        squares.map((squareData, i) => {
          return <Square owner={squareData.owner} isSelected={squareData.isClicked} key={squareData.id} handleClick={() => handleSquareClicked(squareData.id, i)} />
        })
      }

      {winner && <p>{`O jogador ${currentOwner} venceu!!!`}</p>}
      {isDrawed && <p>O jogo empatou seus nubiii</p>}
    </Container>
  )
}

export default Board
