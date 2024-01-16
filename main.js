console.log("Hello");

// () => {
// 	gameBoard = { board: [1, 1, 1, 1, 1, 1, 1, 1, 1] };
// 	return gameBoard;
// };

// let gameBoard = { board: [1, 1, 1, 1, 1, 1, 1, 1, 1] };

const gameBoard = (function () {
	return { board: ["-", "-", "-", "-", "-", "-", "-", "-", "-"] };
})();

const gameLogic = function () {
	return {};
};

function createPlayer(playerNumber, playerToken) {
	const playerTurn = true;
	function scoreChecker(x) {
		if (gameBoard.board.includes("-") === false) {
			console.log("It's a draw!");
			return;
		}
		if (
			gameBoard.board[0] === x &&
			gameBoard.board[1] === x &&
			gameBoard.board[2] === x
		) {
			winMessage(x);
		}

		if (
			gameBoard.board[0] === x &&
			gameBoard.board[3] === x &&
			gameBoard.board[6] === x
		) {
			winMessage(x);
		}

		if (
			gameBoard.board[1] === x &&
			gameBoard.board[4] === x &&
			gameBoard.board[7] === x
		) {
			winMessage(x);
		}

		if (
			gameBoard.board[2] === x &&
			gameBoard.board[5] === x &&
			gameBoard.board[8] === x
		) {
			winMessage(x);
		}

		if (
			gameBoard.board[3] === x &&
			gameBoard.board[4] === x &&
			gameBoard.board[5] === x
		) {
			winMessage(x);
		}

		if (
			gameBoard.board[0] === x &&
			gameBoard.board[4] === x &&
			gameBoard.board[8] === x
		) {
			winMessage(x);
		}

		if (
			gameBoard.board[2] === x &&
			gameBoard.board[4] === x &&
			gameBoard.board[6] === x
		) {
			winMessage(x);
		}

		if (
			gameBoard.board[6] === x &&
			gameBoard.board[7] === x &&
			gameBoard.board[8] === x
		) {
			winMessage(x);
		}
		function winMessage(x) {
			if (x === "X") {
				console.log("Player 1 wins!");
				return;
			} else if (x === "O") {
				console.log("Player 2 wins!");
			}
		}
	}
	return {
		playerNumber: playerNumber,
		playerToken: playerToken,
		playerTurn,
		scoreChecker,
		makePlay(x) {
			if (this.playerTurn === false) {
				console.log(`It is not player ${this.playerNumber}'s turn to play.`);
			} else {
				if (x < 0 || x > 8) {
					console.log("Please enter a number between 0 and 8.");
					return;
				}
				if (gameBoard.board[x] != "-") {
					console.log(
						"Please select a square that has not been played already."
					);
					return;
				} else {
					gameBoard.board[x] = playerToken;
					scoreChecker(playerToken);
				}
				//Print the board to the console in three rows
				console.log(`
					${gameBoard.board.slice(0, 3)}\n
					${gameBoard.board.slice(3, 6)}\n
					${gameBoard.board.slice(6, 9)}`);
				console.log(this.playerNumber);
				this.playerTurn = false;
				if (this.playerNumber === 1) {
					player2.playerTurn = true;
				} else if (this.playerNumber === 2) {
					player1.playerTurn = true;
				}
			}
		},
	};
}

const player1 = createPlayer(1, "X");
const player2 = createPlayer(2, "O");

//scoreboard checker
function scoreChecker() {
	if (gameBoard[0] === this.playerToken) {
		console.log("Your text sort of works.");
	}
}

// //simulate a game with a win across the top row
// player1.makePlay(0);
// player2.makePlay(3);
// player1.makePlay(1);
// player2.makePlay(5);
// player1.makePlay(2);

// //simulate a game with a win across the middle row
// player1.makePlay(3);
// player2.makePlay(0);
// player1.makePlay(4);
// player2.makePlay(6);
// player1.makePlay(5);

// //simulate a game with a win across the bottom row
// player1.makePlay(6);
// player2.makePlay(0);
// player1.makePlay(7);
// player2.makePlay(2);
// player1.makePlay(8);

// //simulate a game with a win across the first column
// player1.makePlay(0);
// player2.makePlay(1);
// player1.makePlay(3);
// player2.makePlay(2);
// player1.makePlay(6);

// //simulate a game with a win across the second column
// player1.makePlay(1);
// player2.makePlay(0);
// player1.makePlay(4);
// player2.makePlay(2);
// player1.makePlay(7);

// //simulate a game with a win across the third column
// player1.makePlay(2);
// player2.makePlay(0);
// player1.makePlay(5);
// player2.makePlay(3);
// player1.makePlay(8);

// //simulate a game with a win with a diagonal slash
// player1.makePlay(0);
// player2.makePlay(1);
// player1.makePlay(4);
// player2.makePlay(3);
// player1.makePlay(8);

// //simulate a game with a win with the other diagonal slash
// player1.makePlay(2);
// player2.makePlay(1);
// player1.makePlay(4);
// player2.makePlay(3);
// player1.makePlay(6);

// //simulate a game with a draw
// player1.makePlay(4);
// player2.makePlay(8);
// player1.makePlay(6);
// player2.makePlay(2);
// player1.makePlay(1);
// player2.makePlay(7);
// player1.makePlay(0);
// player2.makePlay(3);
// player1.makePlay(5);
