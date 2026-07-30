function rottenOranges(grid) {
    const rows = grid.length;
    const cols = grid[0].length;

    const rottenIndexQ = [];
    let freshOrangesCount = 0;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 2) {
                rottenIndexQ.push([i, j])
            }
            else if (grid[i][j] === 1) {
                freshOrangesCount++
            }
        }
    }

    if (freshOrangesCount == 0) return 0;

    let minutes = 0;

    const directions = [
        [-1, 0], // up
        [1, 0], // down
        [0, -1], // left
        [0, 1]  // right
    ]

    while (rottenIndexQ.length > 0 && freshOrangesCount > 0) {

        // Process one Minute
        const size = rottenIndexQ.length;

        for (let i = 0; i < size; i++) {
            const [row, col] = rottenIndexQ.shift();

            for (const [dr, dc] of directions) {

                const n = row + dr;
                const m = col + dc;


                if (n >= 0 && n < rows && m >= 0 && m < cols && grid[n][m] === 1) {
                    grid[n][m] = 2;
                    freshOrangesCount--;
                    rottenIndexQ.push([n, m]);
                }
            }
        }

        minutes++
    }

    return freshOrangesCount > 0 ? -1 : minutes
}