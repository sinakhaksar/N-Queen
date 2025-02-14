function printBoard(board) {
	board.forEach((row, index) => {
		console.log(index + 1, row.map(col => (col ? "👑" : "⬜")).join(" "));
	});
	console.log("\n");
}

function isSafe(board, row, col, n) {
	// Check column
	for (let i = 0; i < row; i++) {
		if (board[i][col]) return false;
	}

	// Check upper-left diagonal
	for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
		if (board[i][j]) return false;
	}

	// Check upper-right diagonal
	for (let i = row, j = col; i >= 0 && j < n; i--, j++) {
		if (board[i][j]) return false;
	}

	return true;
}

function solveNQueens(board, row, n, solutions) {
	if (row === n) {
		// A solution is found, add it to the solutions
		const solution = board.map(line => [...line]);
		solutions.push(solution);
		return;
	}

	for (let col = 0; col < n; col++) {
		if (isSafe(board, row, col, n)) {
			// Place the queen
			board[row][col] = 1;
			// Recursively solve for the next row
			solveNQueens(board, row + 1, n, solutions);
			// Backtrack: remove the queen
			board[row][col] = 0;
		}
	}
}

function nQueens(n) {
	const board = Array.from({ length: n }, () => Array(n).fill(0));

	const solutions = [];
	solveNQueens(board, 0, n, solutions);
	return solutions;
}

const n = 3; // Change this to solve for a different N
const solutions = nQueens(n);

console.log(`Number of solutions for ${n}-Queens: ${solutions.length}\n`);
solutions.forEach((solution, index) => {
	console.log(`Solution ${index + 1}:\n`);
	printBoard(solution);
});
