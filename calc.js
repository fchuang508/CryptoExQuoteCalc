function calculateMarketPrice(ethUsd, usdCny) {
  return ethUsd * usdCny;
}

function calculatePriceWithPremium(marketPrice, premiumPercent) {
  return marketPrice * (1 + premiumPercent / 100);
}

function calculateTotals({ ethUsd, usdCny, premiumPercent, fee, ethAmount = 0, cnyAmount = '' }) {
  const marketPrice = calculateMarketPrice(ethUsd, usdCny);
  const priceWithPremium = calculatePriceWithPremium(marketPrice, premiumPercent);
  const ethTotal = cnyAmount !== '' ? (parseFloat(cnyAmount) || 0) / marketPrice : (parseFloat(ethAmount) || 0);

  const marketTotal = ethTotal * marketPrice;
  const premiumTotal = ethTotal * priceWithPremium;

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
