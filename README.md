# N-Queens Solver
## Description

This JavaScript program solves the classic **N-Queens problem**, which involves placing N queens on an N×N chessboard such that no two queens attack each other. The program implements a **backtracking algorithm** to find all valid solutions and displays them in a readable format using emojis.

## Features

-   Uses **backtracking** to explore all possible queen placements efficiently.
-   Supports different board sizes by changing the value of `n`.
-   Displays the solutions in a **visual format** using `👑` for queens and `⬜` for empty spaces.
-   Provides the total number of solutions found for a given `n`.

## How It Works

1. The `nQueens(n)` function initializes an empty chessboard of size `n × n`.
2. The `solveNQueens(board, row, n, solutions)` function attempts to place queens row by row while ensuring they do not attack each other.
3. The `isSafe(board, row, col, n)` function checks if a queen can be placed in a given position.
4. If a valid placement is found for all rows, a solution is added to the results.
5. The program prints each solution using `printBoard(board)`.

## Usage

1. Install **Node.js** if you haven't already.
2. Save the script as `nQueens.js`.
3. Open a terminal and run the script using:
    ```sh
    node nQueens.js
    ```
4. Modify the `n` variable in the script to test different board sizes.

## Example Output

For `n = 4`, the script outputs:

```
Number of solutions for 4-Queens: 2

Solution 1:
1 ⬜ 👑 ⬜ ⬜
2 ⬜ ⬜ ⬜ 👑
3 👑 ⬜ ⬜ ⬜
4 ⬜ ⬜ 👑 ⬜

Solution 2:
1 ⬜ ⬜ 👑 ⬜
2 👑 ⬜ ⬜ ⬜
3 ⬜ ⬜ ⬜ 👑
4 ⬜ 👑 ⬜ ⬜
```

## Complexity

-   The time complexity of the **backtracking approach** is **O(N!)** in the worst case.
-   The space complexity is **O(N²)** due to the board storage.

## Notes

-   The N-Queens problem has **no solutions for **\*\*****`n = 2`**\*\*\*\*** or \*\*\*\*\***\*`n = 3`**.
-   The algorithm can be optimized using **bitwise operations** for larger values of `n`.

## License

This project is open-source and free to use.

---

Happy Coding! 🚀
