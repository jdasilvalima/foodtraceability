# foodtraceability

![Solidity](https://img.shields.io/badge/Solidity-000000?style=for-the-badge&logo=solidity&logoColor=white)
![Ethereum](https://img.shields.io/badge/Ethereum-white?style=for-the-badge&logo=ethereum&logoColor=blue)
![Next.js](https://img.shields.io/badge/next.js-003791?style=for-the-badge&logo=nextdotjs&logoColor=white)

![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/jdasilvalima/foodtraceability?style=for-the-badge)
[![GitHub last commit](https://img.shields.io/github/last-commit/jdasilvalima/foodtraceability?style=for-the-badge)](https://github.com/jdasilvalima/foodtraceability/commits)

## Project description

### Introduction

**OriginsTrack** - Transparent and secure food traceability. The "OriginsTrack" project aims to create a blockchain platform that will allow consumers to trace the provenance of their food back to its source.

### System Architecture

![OriginsTrack Architecture](https://github.com/jdasilvalima/foodtraceability/blob/main/architecture.png)

## Development Setup

### Requirements

- [NodeJS](https://nodejs.org/en) >= 10.16 and [npm](https://www.npmjs.com/) >= 5.6 installed.
- [Git](https://git-scm.com/) installed in the system.
- [Truffle](https://www.trufflesuite.com/truffle), which can be installed globally with `npm install -g truffle`

**Clone the repository**

```bash
git clone git@github.com:jdasilvalima/foodtraceability.git
```

### Setting Up Truffle Project

**Checkout smart contracts directory**

```
cd foodtraceability/smart-contracts
```

**Run Test Coverage**

```
truffle test
```

### Setting Client Application
This is a [Next.js](https://nextjs.org/) project.

**Checkout client directory**
```
cd foodtraceability/web3
```

**Install Dependencies**
```
npm install
```

**Getting Started**
First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Website UI
![Home Page image](https://github.com/jdasilvalima/foodtraceability/blob/main/web3/public/presentation/home_page.png)

![Products Page image](https://github.com/jdasilvalima/foodtraceability/blob/main/web3/public/presentation/products_page.png)

![Users Page image](https://github.com/jdasilvalima/foodtraceability/blob/main/web3/public/presentation/users_page.png)

![Supplychain Page image](https://github.com/jdasilvalima/foodtraceability/blob/main/web3/public/presentation/supplychain_page.png)