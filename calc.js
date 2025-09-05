function calculateMarketPrice(ethUsd, usdCny) {
  return ethUsd * usdCny;
}

function calculatePriceWithPremium(marketPrice, premiumPercent) {
  return marketPrice * (1 + premiumPercent / 100);
}

function calculateTotals({ ethUsd, usdCny, premiumPercent, fee, ethAmount = 0 }) {
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
