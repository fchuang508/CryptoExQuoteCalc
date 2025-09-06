const { calculateMarketPrice, calculatePriceWithPremium, calculateTotals } = require('./calc');

describe('calculation functions', () => {
  test('calculateMarketPrice computes ETH to CNY price', () => {
    expect(calculateMarketPrice(3000, 7)).toBe(21000);
  });

  test('calculateMarketPrice returns 0 for invalid inputs', () => {
    expect(calculateMarketPrice(NaN, 7)).toBe(0);
    expect(calculateMarketPrice(3000, NaN)).toBe(0);
    expect(calculateMarketPrice(-3000, 7)).toBe(0);
    expect(calculateMarketPrice(3000, -7)).toBe(0);
  });

  test('calculatePriceWithPremium applies premium percentage', () => {
    const marketPrice = 21000;
    expect(calculatePriceWithPremium(marketPrice, 3.275)).toBeCloseTo(21687.75);
  });

  test('calculatePriceWithPremium returns 0 for invalid inputs', () => {
    expect(calculatePriceWithPremium(NaN, 3)).toBe(0);
    expect(calculatePriceWithPremium(21000, NaN)).toBe(0);
    expect(calculatePriceWithPremium(-21000, 3)).toBe(0);
    expect(calculatePriceWithPremium(21000, -3)).toBe(0);
  });

  test('calculateTotals returns totals with fee and premium', () => {
    const totals = calculateTotals({ ethUsd: 3000, usdCny: 7, premiumPercent: 3.275, fee: 20, ethAmount: 1 });

    expect(totals.marketPrice).toBe(21000);
    expect(totals.priceWithPremium).toBeCloseTo(21687.75);
    expect(totals.marketTotalWithFee).toBe(21020);
    expect(totals.premiumTotalWithFee).toBeCloseTo(21707.75);
    expect(totals.premiumDiff).toBeCloseTo(687.75);
  });

  test('calculateTotals returns default values for invalid inputs', () => {
    const negativeTotals = calculateTotals({ ethUsd: -3000, usdCny: 7, premiumPercent: 3, fee: 20, ethAmount: 1 });
    expect(negativeTotals).toEqual({
      marketPrice: 0,
      priceWithPremium: 0,
      marketTotalWithFee: 0,
      premiumTotalWithFee: 0,
      premiumDiff: 0,
    });

    const nanTotals = calculateTotals({ ethUsd: 3000, usdCny: 7, premiumPercent: 3, fee: NaN, ethAmount: 1 });
    expect(nanTotals).toEqual({
      marketPrice: 0,
      priceWithPremium: 0,
      marketTotalWithFee: 0,
      premiumTotalWithFee: 0,
      premiumDiff: 0,
    });
  });
});
