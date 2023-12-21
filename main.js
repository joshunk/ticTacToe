console.log("Hello");

// () => {
// 	gameBoard = { board: [1, 1, 1, 1, 1, 1, 1, 1, 1] };
// 	return gameBoard;
// };

// let gameBoard = { board: [1, 1, 1, 1, 1, 1, 1, 1, 1] };

const gameBoard = (function () {
	return { board: [1, 1, 1, 1, 1, 1, 1, 1, 1] };
})();

const gameLogic = function () {
	return {};
};

function createPlayer(playerNumber, playerToken) {
	const playerTurn = true;
	return {
		playerNumber: playerNumber,
		playerToken: playerToken,
		playerTurn,
		makePlay(x) {
			if (this.playerTurn === true) {
				gameBoard.board[x] = playerToken;
				console.log(`
					${gameBoard.board.slice(0, 3)}\n
					${gameBoard.board.slice(3, 6)}\n
					${gameBoard.board.slice(6, 9)}`);
				console.log(this.playerNumber);
				this.playerTurn = false;
				if (this.playerTurn === 1) {
					player2.playerTurn = true;
				} else if (this.playerTurn === 2) {
					player1.playerTurn = true;
				}
			} else {
				console.log(`It is not player ${this.playerNumber}'s turn to play.`);
			}
		},
	};
}

const player1 = createPlayer(1, "X");
const player2 = createPlayer(2, "O");
