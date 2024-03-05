## 🚀 About this project

This is the web3 NFT Marketplace frontend application.

The project is meant to be used without any Blockchain knowledge, so expect some web2 behaviour ( such as common email/pw login)

### - Using Ethers.js on userAssets page ( wallet icon on the Navbar )

To check the code of the Ethers js implementation ( v6 ) please take a look at the component AssetsCardCrypto.tsx
To test the functionalities navigate using the Navbar to the Wallet icon

### - There are wallet interactions using Ethers.js library -

We will be using SEPOLIA Testnet, please make sure to request faucet to interact with the contract
https://www.alchemy.com/faucets/ethereum-sepolia

https://www.alchemy.com/faucets/polygon-mumbai

## Installation

- **Clone the repository**

```
git clone https://github.com/JordiMartinezDev/NFT_Marketplace_Front.git
```

## Install the dependencies

```bash
npm install
```

### To run the app in development mode

```bash
npm run dev
```

## Update xata schemas run ( **REQUIRED** )

```bash
xata init
```

After running this, xata will create/modify lib/xata.ts which needs to be modified
Please, REPLACE the "getXataClient" function at the end of the code

### .env file

Create your own .env.local file following the "dotenv_example.txt" file
All the necessary API keys can be found there.

### Replace the function as follows:

```javascript
export const getXataClient = () => {
  if (instance) return instance;

  const apiKey = process.env.XATA_API_KEY;
  if (!apiKey) {
    throw new Error("XATA_API_KEY environment variable is missing.");
  }

  instance = new XataClient({
    enableBrowser: true,
    apiKey: apiKey,
  });
  return instance;
};
```

# Running the application

The website will ask you to register as this NFT marketplace allows people without **Blockchain** knowledge to create, trade and mint NFTs.
