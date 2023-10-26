/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxMoves = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const dp = new Array(m).fill().map(() => new Array(n).fill(0)); // Initialize with 0

    for (let col = 1; col < n; col++) {
        for (let row = 0; row < m; row++) {
            const currentCell = grid[row][col];

            for (let newRow = row - 1; newRow <= row + 1; newRow++) {
                if (newRow >= 0 && newRow < m) {
                    for (let newCol = col - 1; newCol <= col + 1; newCol++) {
                        if (newCol >= 0 && newCol < n && grid[newRow][newCol] > currentCell) {
                            dp[row][col] = Math.max(dp[row][col], dp[newRow][newCol] + 1);
                        }
                    }
                }
            }
        }
    }

    let maxMoves = 0;
    for (let row = 0; row < m; row++) {
        maxMoves = Math.max(maxMoves, dp[row][n - 1]);
    }

    return maxMoves;
};

const grid1 = [
    [2, 4, 3, 5],
    [5, 4, 9, 3],
    [3, 4, 2, 11],
    [10, 9, 13, 15]
];

const result1 = maxMoves(grid1);
console.log(result1); // Output: 3
