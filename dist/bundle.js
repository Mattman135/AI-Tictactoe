/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const Gameboard = (() => {\r\n  const infoDisplay = document.querySelector(\"#info\")\r\n  const gameBoard = document.querySelector(\"#gameboard\")\r\n  const cellElements = [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"]\r\n  const restartBtn = document.querySelector(\"#restartBtn\")\r\n\r\n  let round = 1\r\n  let go = \"cross\"\r\n  infoDisplay.textContent = `It's round ${round} and ${go}'s turn`\r\n\r\n  restartBtn.addEventListener(\"click\", () => {\r\n    deleteBoard(gameBoard)\r\n    createBoard()\r\n    round = 0\r\n    go = \"cross\"\r\n    infoDisplay.textContent = `It's round ${round} and ${go}'s turn`\r\n  })\r\n\r\n  const deleteBoard = (parent) => {\r\n    while (parent.firstChild) {\r\n      parent.removeChild(parent.firstChild)\r\n    }\r\n  }\r\n\r\n  const createBoard = () => {\r\n    cellElements.forEach((_cell, index) => {\r\n      const div = document.createElement(\"div\")\r\n      div.classList.add(\"square\")\r\n      div.id = index\r\n      div.addEventListener(\"click\", addGo)\r\n      gameBoard.append(div)\r\n    })\r\n  }\r\n\r\n  const addGo = (e) => {\r\n    const div2 = document.createElement(\"div\")\r\n    div2.classList.add(go)\r\n    e.target.append(div2)\r\n    go = go === \"circle\" ? \"cross\" : \"circle\"\r\n    round++\r\n\r\n    infoDisplay.textContent = `It's round ${round} and ${go}'s turn`\r\n    e.target.removeEventListener(\"click\", addGo)\r\n    checkWinner()\r\n    if (go === \"circle\") {\r\n      console.log(\"its computers turn\")\r\n    }\r\n  }\r\n\r\n  const checkWinner = () => {\r\n    const allSquares = document.querySelectorAll(\".square\")\r\n\r\n    const winCombinations = [\r\n      [0, 1, 2],\r\n      [3, 4, 5],\r\n      [6, 7, 8],\r\n      [0, 3, 6],\r\n      [1, 4, 7],\r\n      [2, 5, 8],\r\n      [0, 4, 8],\r\n      [2, 4, 6],\r\n    ]\r\n\r\n    winCombinations.forEach((arr) => {\r\n      const crossWins = arr.every((cell) =>\r\n        allSquares[cell].firstChild?.classList.contains(\"cross\")\r\n      )\r\n\r\n      if (crossWins) {\r\n        infoDisplay.textContent = \"Cross wins\"\r\n        allSquares.forEach((square) =>\r\n          square.replaceWith(square.cloneNode(true))\r\n        )\r\n        return\r\n      } else if (round === 10 && !crossWins) {\r\n        infoDisplay.textContent = `It's a draw`\r\n        allSquares.forEach((square) =>\r\n          square.replaceWith(square.cloneNode(true))\r\n        )\r\n        return\r\n      }\r\n    })\r\n\r\n    winCombinations.forEach((arr) => {\r\n      const circleWins = arr.every((cell) =>\r\n        allSquares[cell].firstChild?.classList.contains(\"circle\")\r\n      )\r\n\r\n      if (circleWins) {\r\n        infoDisplay.textContent = \"Circle wins\"\r\n        allSquares.forEach((square) =>\r\n          square.replaceWith(square.cloneNode(true))\r\n        )\r\n        return\r\n      } else if (round === 10 && !circleWins) {\r\n        infoDisplay.textContent = `It's a draw`\r\n        allSquares.forEach((square) =>\r\n          square.replaceWith(square.cloneNode(true))\r\n        )\r\n        return\r\n      }\r\n    })\r\n  }\r\n\r\n  return { createBoard }\r\n})()\r\n\r\nconst displayController = (() => {\r\n  const Board = Gameboard\r\n  Board.createBoard()\r\n})()\r\n\n\n//# sourceURL=webpack://ai-tictactoe/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;