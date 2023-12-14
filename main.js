console.log("Hello");

// () => {
// 	gameBoard = { board: [1, 1, 1, 1, 1, 1, 1, 1, 1] };
// 	return gameBoard;
// };

// let gameBoard = { board: [1, 1, 1, 1, 1, 1, 1, 1, 1] };

const gameBoard = (function () {
	return { board: [1, 1, 1, 1, 1, 1, 1, 1, 1] };
})();

function createPlayer(playerNumber, playerToken) {
	return {
		playerNumber: playerNumber,
		playerToken: playerToken,
		makePlay(x) {
			gameBoard.board[x] = playerToken;
		},
	};
}

const player1 = createPlayer(1, "X");
const player2 = createPlayer(2, "O");
