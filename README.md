# CryptoExQuoteCalc

**A lightweight OTC calculator for fast and transparent crypto-to-fiat quotations.**

## 📌 Overview
CryptoExQuoteCalc is a simple web-based tool designed for OTC (over-the-counter) crypto traders.  
It helps you generate **buy and sell quotations** in seconds, showing **market price, quoted price, and profit margins** clearly.

## ✨ Features
- Bilingual interface (English / 中文)
- Input ETHUSD price and fiat rate (CNY/USD)
- Configure **premium %** and **fiat fee** (blank inputs default to 0)
- Interactive conversion between crypto and fiat — typing in one field auto-calculates the other
- Detailed calculation steps rendered with LaTeX, comparing market vs. premium totals (incl. fee)
- Responsive layout using Flexbox + Grid with contextual hints beside each field
- One-click copy to share quotation

## 🛠️ Tech Stack
- React + Tailwind CSS
- Pure front-end calculation (no backend needed)
- Deployable on Vercel / GitHub Pages

## 🚀 Roadmap
- [ ] Add USDT/USDC support
- [ ] Save historical quotations
- [ ] Auto-fetch live exchange rates via Binance/OKX API
- [ ] Gas cost presets for Ethereum mainnet / L2 chains

## 📄 License
MIT License
