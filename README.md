# CryptoExQuoteCalc

**A lightweight OTC calculator for fast and transparent crypto-to-fiat quotations.**

## 📌 Overview
CryptoExQuoteCalc is a simple web-based tool designed for OTC (over-the-counter) crypto traders.  
It helps you generate **buy and sell quotations** in seconds, showing **market price, quoted price, and profit margins** clearly.

## ✨ Features / 功能
- Bilingual interface (English / 中文) / 雙語介面
- Input ETHUSD and USD/CNY exchange rates / 輸入 ETHUSD 與 USD/CNY 匯率
- Configure **fee (CNY)** and **premium %** / 設定手續費（CNY）與溢價百分比
- Calculate and compare / 計算與比較：
  - Market price (RMB/ETH) / 市場價格（RMB/ETH）
  - Price with premium / 含溢價價格
  - Totals with and without premium (includes fee) / 含／不含溢價總金額（含手續費）
- Convert ETH ↔ RMB based on quotation / 根據報價換算 ETH ↔ RMB
- One-click copy to share quotation / 一鍵複製分享報價

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
