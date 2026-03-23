function maxProfit(prices) {
  let maxProfit = 0;

  let left = 0,
    right = 1;

  while (right < prices.length) {
    if (prices[right] > prices[left]) {
      const profit = prices[right] - prices[left];
      maxProfit = Math.max(maxProfit, profit);
    } else {
      left = right;
    }
    right++;
  }

  return maxProfit;
}

console.log(maxProfit([7, 150, 155, 1, 5, 3, 6, 4]));
