function calculateMarketPrice(ethUsd, usdCny) {
  if (
    isNaN(ethUsd) ||
    isNaN(usdCny) ||
    ethUsd < 0 ||
    usdCny < 0
  ) {
    return 0;
  }
  return ethUsd * usdCny;
}

function calculatePriceWithPremium(marketPrice, premiumPercent) {
  if (
    isNaN(marketPrice) ||
    isNaN(premiumPercent) ||
    marketPrice < 0 ||
    premiumPercent < 0
  ) {
    return 0;
  }
  return marketPrice * (1 + premiumPercent / 100);
}

function calculateTotals({ ethUsd, usdCny, premiumPercent, fee, ethAmount = 0 }) {
  if (
    [ethUsd, usdCny, premiumPercent, fee, ethAmount].some(
      (v) => isNaN(v) || v < 0
    )
  ) {
    return {
      marketPrice: 0,
      priceWithPremium: 0,
      marketTotalWithFee: 0,
      premiumTotalWithFee: 0,
      premiumDiff: 0,
    };
  }

  const marketPrice = calculateMarketPrice(ethUsd, usdCny);
  const priceWithPremium = calculatePriceWithPremium(marketPrice, premiumPercent);

  const marketTotal = (parseFloat(ethAmount) || 0) * marketPrice;
  const premiumTotal = (parseFloat(ethAmount) || 0) * priceWithPremium;

  return {
    marketPrice,
    priceWithPremium,
    marketTotalWithFee: marketTotal + fee,
    premiumTotalWithFee: premiumTotal + fee,
    premiumDiff: premiumTotal - marketTotal,
  };
}

module.exports = {
  calculateMarketPrice,
  calculatePriceWithPremium,
  calculateTotals,
};
