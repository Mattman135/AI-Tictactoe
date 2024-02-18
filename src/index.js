import "./styles.css"
import findBestMove from "./minimax"
import translateIndex from "./translateIndex"
import translateIndex2 from "./translateIndex2"

const Gameboard = (() => {
  const infoDisplay = document.querySelector("#info")
  const gameBoard = document.querySelector("#gameboard")
  const cellElements = ["", "", "", "", "", "", "", "", ""]
  const restartBtn = document.querySelector("#restartBtn")

  let round = 1
  let go = "cross"
  infoDisplay.textContent = `It's round ${round} and ${go}'s turn`

  let minimaxBoard = [
    ["_", "_", "_"],
    ["_", "_", "_"],
    ["_", "_", "_"],
  ]

  restartBtn.addEventListener("click", () => {
    deleteBoard(gameBoard)
    createBoard()
    minimaxBoard = [
      ["_", "_", "_"],
      ["_", "_", "_"],
      ["_", "_", "_"],
    ]
    round = 0
    go = "cross"
    infoDisplay.textContent = `It's round ${round} and ${go}'s turn`
  })

  const deleteBoard = (parent) => {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild)
    }
  }

  const createBoard = () => {
    cellElements.forEach((_cell, index) => {
      const div = document.createElement("div")
      div.classList.add("square")
      div.id = index
      div.addEventListener("click", addGo)
      gameBoard.append(div)
    })
  }

  const addGo = (e) => {
    let [r, c] = translateIndex(e.target.id)

    const div2 = document.createElement("div")
    div2.classList.add(go)
    e.target.append(div2)
    minimaxBoard[r][c] = "x"

    displayComputerMove()

    round++
    infoDisplay.textContent = `It's round ${round} and ${go}'s turn`
    e.target.removeEventListener("click", addGo)
    checkWinner()
  }

  const displayComputerMove = () => {
    let [bestRow, bestCol] = findBestMove(minimaxBoard)
    try {
      minimaxBoard[bestRow][bestCol] = "o"
      let bestIndex = translateIndex2(bestRow, bestCol)

      let Best = document.getElementById(`${bestIndex}`)
      let div = document.createElement("div")
      div.classList.add("circle")
      Best.appendChild(div)

      let div2 = document.getElementById(`${bestIndex}`)

      div2.removeEventListener("click", addGo)
    } catch {
      console.log("its a draw")
    }
  }

  const checkWinner = () => {
    const allSquares = document.querySelectorAll(".square")

    const winCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]

    winCombinations.forEach((arr) => {
      const crossWins = arr.every((cell) =>
        allSquares[cell].firstChild?.classList.contains("cross")
      )

      if (crossWins) {
        infoDisplay.textContent = "Cross wins"
        allSquares.forEach((square) =>
          square.replaceWith(square.cloneNode(true))
        )
        return
      } else if (round === 10 && !crossWins) {
        infoDisplay.textContent = `It's a draw`
        allSquares.forEach((square) =>
          square.replaceWith(square.cloneNode(true))
        )
        return
      }
    })

    winCombinations.forEach((arr) => {
      const circleWins = arr.every((cell) =>
        allSquares[cell].firstChild?.classList.contains("circle")
      )

      if (circleWins) {
        infoDisplay.textContent = "Circle wins"
        allSquares.forEach((square) =>
          square.replaceWith(square.cloneNode(true))
        )
        return
      } else if (round === 10 && !circleWins) {
        infoDisplay.textContent = `It's a draw`
        allSquares.forEach((square) =>
          square.replaceWith(square.cloneNode(true))
        )
        return
      }
    })
  }

  return { createBoard }
})()

const Board = Gameboard
Board.createBoard()
