const { calculateMarketPrice, calculatePriceWithPremium, calculateTotals } = require('./calc');

describe('calculation functions', () => {
  test('calculateMarketPrice computes ETH to CNY price', () => {
    expect(calculateMarketPrice(3000, 7)).toBe(21000);
  });

  test('calculatePriceWithPremium applies premium percentage', () => {
    const marketPrice = 21000;
    expect(calculatePriceWithPremium(marketPrice, 3.275)).toBeCloseTo(21687.75);
  });

  test('calculateTotals returns totals with fee and premium', () => {
    const totals = calculateTotals({
      ethUsd: 3000,
      usdCny: 7,
      premiumPercent: 3.275,
      fee: 20,
      ethAmount: 1,
    });

    expect(totals.marketPrice).toBe(21000);
    expect(totals.priceWithPremium).toBeCloseTo(21687.75);
    expect(totals.marketTotalWithFee).toBe(21020);
    expect(totals.premiumTotalWithFee).toBeCloseTo(21707.75);
    expect(totals.premiumDiff).toBeCloseTo(687.75);
  });
});
