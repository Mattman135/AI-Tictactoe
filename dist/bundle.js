/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _minimax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./minimax */ \"./src/minimax.js\");\n/* harmony import */ var _translateIndex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./translateIndex */ \"./src/translateIndex.js\");\n/* harmony import */ var _translateIndex2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./translateIndex2 */ \"./src/translateIndex2.js\");\n\r\n\r\n\r\n\r\nconst Gameboard = (() => {\r\n  const infoDisplay = document.querySelector(\"#info\")\r\n  const gameBoard = document.querySelector(\"#gameboard\")\r\n  const cellElements = [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"]\r\n  const restartBtn = document.querySelector(\"#restartBtn\")\r\n\r\n  let round = 1\r\n  let go = \"cross\"\r\n  infoDisplay.textContent = `It's round ${round} and ${go}'s turn`\r\n\r\n  // minimaxBoard variable is needed in the minimax function\r\n  let minimaxBoard = [\r\n    [\"_\", \"_\", \"_\"],\r\n    [\"_\", \"_\", \"_\"],\r\n    [\"_\", \"_\", \"_\"],\r\n  ]\r\n\r\n  restartBtn.addEventListener(\"click\", () => {\r\n    deleteBoard(gameBoard)\r\n    createBoard()\r\n    minimaxBoard = [\r\n      [\"_\", \"_\", \"_\"],\r\n      [\"_\", \"_\", \"_\"],\r\n      [\"_\", \"_\", \"_\"],\r\n    ]\r\n    round = 0\r\n    go = \"cross\"\r\n    infoDisplay.textContent = `It's round ${round} and ${go}'s turn`\r\n  })\r\n\r\n  const deleteBoard = (parent) => {\r\n    while (parent.firstChild) {\r\n      parent.removeChild(parent.firstChild)\r\n    }\r\n  }\r\n\r\n  const createBoard = () => {\r\n    cellElements.forEach((_cell, index) => {\r\n      const div = document.createElement(\"div\")\r\n      div.classList.add(\"square\")\r\n      div.id = index\r\n      div.addEventListener(\"click\", addGo)\r\n      gameBoard.append(div)\r\n    })\r\n  }\r\n\r\n  const addGo = (e) => {\r\n    let [r, c] = (0,_translateIndex__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(e.target.id)\r\n\r\n    const div2 = document.createElement(\"div\")\r\n    div2.classList.add(go)\r\n    e.target.append(div2)\r\n    minimaxBoard[r][c] = \"x\"\r\n\r\n    // Ha någon funktion här som displayComputerMove och async waitar så\r\n    // det ser ut som att vi väntar på funktionen\r\n\r\n    displayComputerMove()\r\n    //console.log(e.target)\r\n    //go = go === \"circle\" ? \"cross\" : \"circle\"\r\n    round++\r\n    infoDisplay.textContent = `It's round ${round} and ${go}'s turn`\r\n    e.target.removeEventListener(\"click\", addGo)\r\n    checkWinner()\r\n  }\r\n\r\n  const displayComputerMove = () => {\r\n    //console.log(minimaxBoard)\r\n    let [bestRow, bestCol] = (0,_minimax__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(minimaxBoard)\r\n    try {\r\n      minimaxBoard[bestRow][bestCol] = \"o\"\r\n      let bestIndex = (0,_translateIndex2__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(bestRow, bestCol)\r\n      //console.log(bestIndex)\r\n      let Best = document.getElementById(`${bestIndex}`)\r\n      let div = document.createElement(\"div\")\r\n      div.classList.add(\"circle\")\r\n      Best.appendChild(div)\r\n\r\n      let div2 = document.getElementById(`${bestIndex}`)\r\n      //console.log(div2)\r\n      div2.removeEventListener(\"click\", addGo)\r\n    } catch {\r\n      //console.log(\"Rowindex:\", bestRow, \"Colindex:\", bestCol)\r\n      console.log(\"its a draw\")\r\n    }\r\n  }\r\n\r\n  const checkWinner = () => {\r\n    const allSquares = document.querySelectorAll(\".square\")\r\n\r\n    const winCombinations = [\r\n      [0, 1, 2],\r\n      [3, 4, 5],\r\n      [6, 7, 8],\r\n      [0, 3, 6],\r\n      [1, 4, 7],\r\n      [2, 5, 8],\r\n      [0, 4, 8],\r\n      [2, 4, 6],\r\n    ]\r\n\r\n    winCombinations.forEach((arr) => {\r\n      const crossWins = arr.every((cell) =>\r\n        allSquares[cell].firstChild?.classList.contains(\"cross\")\r\n      )\r\n\r\n      if (crossWins) {\r\n        infoDisplay.textContent = \"Cross wins\"\r\n        allSquares.forEach((square) =>\r\n          square.replaceWith(square.cloneNode(true))\r\n        )\r\n        return\r\n      } else if (round === 10 && !crossWins) {\r\n        infoDisplay.textContent = `It's a draw`\r\n        allSquares.forEach((square) =>\r\n          square.replaceWith(square.cloneNode(true))\r\n        )\r\n        return\r\n      }\r\n    })\r\n\r\n    winCombinations.forEach((arr) => {\r\n      const circleWins = arr.every((cell) =>\r\n        allSquares[cell].firstChild?.classList.contains(\"circle\")\r\n      )\r\n\r\n      if (circleWins) {\r\n        infoDisplay.textContent = \"Circle wins\"\r\n        allSquares.forEach((square) =>\r\n          square.replaceWith(square.cloneNode(true))\r\n        )\r\n        return\r\n      } else if (round === 10 && !circleWins) {\r\n        infoDisplay.textContent = `It's a draw`\r\n        allSquares.forEach((square) =>\r\n          square.replaceWith(square.cloneNode(true))\r\n        )\r\n        return\r\n      }\r\n    })\r\n  }\r\n\r\n  return { createBoard }\r\n})()\r\n\r\nconst displayController = (() => {\r\n  const Board = Gameboard\r\n  Board.createBoard()\r\n})()\r\n\n\n//# sourceURL=webpack://ai-tictactoe/./src/index.js?");

/***/ }),

/***/ "./src/minimax.js":
/*!************************!*\
  !*** ./src/minimax.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ findBestMove)\n/* harmony export */ });\n// Javascript program to find the\r\n// next optimal move for a player\r\nclass Move {\r\n  constructor() {\r\n    let row, col\r\n  }\r\n}\r\n\r\nlet player = \"o\",\r\n  opponent = \"x\"\r\n\r\n// This function returns true if there are moves\r\n// remaining on the board. It returns false if\r\n// there are no moves left to play.\r\nfunction isMovesLeft(board) {\r\n  for (let i = 0; i < 3; i++)\r\n    for (let j = 0; j < 3; j++) if (board[i][j] == \"_\") return true\r\n\r\n  return false\r\n}\r\n\r\n// This is the evaluation function as discussed\r\n// in the previous article ( http://goo.gl/sJgv68 )\r\nfunction evaluate(b) {\r\n  // Checking for Rows for X or O victory.\r\n  for (let row = 0; row < 3; row++) {\r\n    if (b[row][0] == b[row][1] && b[row][1] == b[row][2]) {\r\n      if (b[row][0] == player) return +10\r\n      else if (b[row][0] == opponent) return -10\r\n    }\r\n  }\r\n\r\n  // Checking for Columns for X or O victory.\r\n  for (let col = 0; col < 3; col++) {\r\n    if (b[0][col] == b[1][col] && b[1][col] == b[2][col]) {\r\n      if (b[0][col] == player) return +10\r\n      else if (b[0][col] == opponent) return -10\r\n    }\r\n  }\r\n\r\n  // Checking for Diagonals for X or O victory.\r\n  if (b[0][0] == b[1][1] && b[1][1] == b[2][2]) {\r\n    if (b[0][0] == player) return +10\r\n    else if (b[0][0] == opponent) return -10\r\n  }\r\n\r\n  if (b[0][2] == b[1][1] && b[1][1] == b[2][0]) {\r\n    if (b[0][2] == player) return +10\r\n    else if (b[0][2] == opponent) return -10\r\n  }\r\n\r\n  // Else if none of them have\r\n  // won then return 0\r\n  return 0\r\n}\r\n\r\n// This is the minimax function. It\r\n// considers all the possible ways\r\n// the game can go and returns the\r\n// value of the board\r\nfunction minimax(board, depth, isMax) {\r\n  let score = evaluate(board)\r\n\r\n  // If Maximizer has won the game\r\n  // return his/her evaluated score\r\n  if (score == 10) return score\r\n\r\n  // If Minimizer has won the game\r\n  // return his/her evaluated score\r\n  if (score == -10) return score\r\n\r\n  // If there are no more moves and\r\n  // no winner then it is a tie\r\n  if (isMovesLeft(board) == false) return 0\r\n\r\n  // If this maximizer's move\r\n  if (isMax) {\r\n    let best = -1000\r\n\r\n    // Traverse all cells\r\n    for (let i = 0; i < 3; i++) {\r\n      for (let j = 0; j < 3; j++) {\r\n        // Check if cell is empty\r\n        if (board[i][j] == \"_\") {\r\n          // Make the move\r\n          board[i][j] = player\r\n\r\n          // Call minimax recursively\r\n          // and choose the maximum value\r\n          best = Math.max(best, minimax(board, depth + 1, !isMax))\r\n\r\n          // Undo the move\r\n          board[i][j] = \"_\"\r\n        }\r\n      }\r\n    }\r\n    return best\r\n  }\r\n\r\n  // If this minimizer's move\r\n  else {\r\n    let best = 1000\r\n\r\n    // Traverse all cells\r\n    for (let i = 0; i < 3; i++) {\r\n      for (let j = 0; j < 3; j++) {\r\n        // Check if cell is empty\r\n        if (board[i][j] == \"_\") {\r\n          // Make the move\r\n          board[i][j] = opponent\r\n\r\n          // Call minimax recursively and\r\n          // choose the minimum value\r\n          best = Math.min(best, minimax(board, depth + 1, !isMax))\r\n\r\n          // Undo the move\r\n          board[i][j] = \"_\"\r\n        }\r\n      }\r\n    }\r\n    return best\r\n  }\r\n}\r\n\r\n// This will return the best possible\r\n// move for the player\r\nfunction findBestMove(board) {\r\n  let bestVal = -1000\r\n  let bestMove = new Move()\r\n  bestMove.row = -1\r\n  bestMove.col = -1\r\n\r\n  // Traverse all cells, evaluate\r\n  // minimax function for all empty\r\n  // cells. And return the cell\r\n  // with optimal value.\r\n  for (let i = 0; i < 3; i++) {\r\n    for (let j = 0; j < 3; j++) {\r\n      // Check if cell is empty\r\n      if (board[i][j] == \"_\") {\r\n        // Make the move\r\n        board[i][j] = player\r\n\r\n        // compute evaluation function\r\n        // for this move.\r\n        let moveVal = minimax(board, 0, false)\r\n\r\n        // Undo the move\r\n        board[i][j] = \"_\"\r\n\r\n        // If the value of the current move\r\n        // is more than the best value, then\r\n        // update best\r\n        if (moveVal > bestVal) {\r\n          bestMove.row = i\r\n          bestMove.col = j\r\n          bestVal = moveVal\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  return [bestMove.row, bestMove.col]\r\n}\r\n\n\n//# sourceURL=webpack://ai-tictactoe/./src/minimax.js?");

/***/ }),

/***/ "./src/translateIndex.js":
/*!*******************************!*\
  !*** ./src/translateIndex.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ translateIndex)\n/* harmony export */ });\nfunction translateIndex(i) {\r\n  if (i == 0) {\r\n    return [0, 0]\r\n  }\r\n  if (i == 1) {\r\n    return [0, 1]\r\n  }\r\n  if (i == 2) {\r\n    return [0, 2]\r\n  }\r\n  if (i == 3) {\r\n    return [1, 0]\r\n  }\r\n  if (i == 4) {\r\n    return [1, 1]\r\n  }\r\n  if (i == 5) {\r\n    return [1, 2]\r\n  }\r\n  if (i == 6) {\r\n    return [2, 0]\r\n  }\r\n  if (i == 7) {\r\n    return [2, 1]\r\n  }\r\n  if (i == 8) {\r\n    return [2, 2]\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://ai-tictactoe/./src/translateIndex.js?");

/***/ }),

/***/ "./src/translateIndex2.js":
/*!********************************!*\
  !*** ./src/translateIndex2.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ translateIndex2)\n/* harmony export */ });\nfunction translateIndex2(row, col) {\r\n  if (row == 0 && col == 0) {\r\n    return 0\r\n  }\r\n  if (row == 0 && col == 1) {\r\n    return 1\r\n  }\r\n  if (row == 0 && col == 2) {\r\n    return 2\r\n  }\r\n  if (row == 1 && col == 0) {\r\n    return 3\r\n  }\r\n  if (row == 1 && col == 1) {\r\n    return 4\r\n  }\r\n  if (row == 1 && col == 2) {\r\n    return 5\r\n  }\r\n  if (row == 2 && col == 0) {\r\n    return 6\r\n  }\r\n  if (row == 2 && col == 1) {\r\n    return 7\r\n  }\r\n  if (row == 2 && col == 2) {\r\n    return 8\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://ai-tictactoe/./src/translateIndex2.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;