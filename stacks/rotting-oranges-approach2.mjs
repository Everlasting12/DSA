function rottingOranges(grid) {
    let m = grid.length;
    let n = grid[0].length;

    let q = [];

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] == 2) {
                q.push([i, j, 0])
            }
        }
    }

    let maxMinutes = 0;
    while (q.length) {
        let [x, y, minutes] = q.shift();

        // left
        if (x > 0 && grid[x - 1][y] === 1) {
            grid[x - 1][y] = 2;
            q.push([x - 1, y, minutes + 1])
        }
        // right
        if (x < m - 1 && grid[x + 1][y] === 1) {
            grid[x + 1][y] = 2;
            q.push([x + 1, y, minutes + 1])
        }
        // top
        if (y > 0 && grid[x][y - 1] === 1) {
            grid[x][y - 1] = 2;
            q.push([x, y - 1, minutes + 1])
        }
        // bottom
        if (y < n - 1 && grid[x][y + 1] === 1) {
            grid[x][y + 1] = 2;
            q.push([x, y + 1, minutes + 1])
        }

        maxMinutes = Math.max(minutes, maxMinutes);
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] == 1) {
                return -1;
            }
        }
    }

    return maxMinutes;
}