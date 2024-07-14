<div align="center">

[![logo](https://github.com/Axio-Lab/sel-by-SEL/blob/main/src/assets/images/SEL-logo.png)](https://www.SEL.xyz)

No-code digital commerce protocol powered by Blinks

</div>

<hr />

![banner](https://github.com/Axio-Lab/hublab/blob/bonk/develop/frontend/src/assets/SELBanner.jpg)

SEL allows anyone to create and sell their digital product by sharing the product Blink, thereby creating on-chain experiences for their customers.

SEL helps creators sell digital products directly to their audience, offering tools for setting up storefronts, managing sales, NFT-based proof of purchase, and payment processing in CRYPTO.

<hr />

<h3 >How it works 🤝🏼</h3>

- You can create a digital product with the create product feature that sends over the information about the product to our API which integrates with the Solana actions SDK to return a blink URL for the product.

- The dashboard under the product section shows all the products created by the users including all the product purchases.

- My item shows all purchases made by users on the platform. At the same time, the main dashboard section generally displays the overall data statistics about the users including transactions, purchases, sales, customers, etc.

<h3>SDK/ API/ RPC Integration ⚙️</h3>

- We used the Helius smart transaction to prepare the transaction that was sent with the POST REQUEST method of the Solana actions SDK and this was how we generate the product blinks.

- We also wrote our own custom endpoints that inherits feature from the solana action SDK to render the create product functionalities.

- We are currently testing on the solana devnet so we also leverage the devenet RPC

<hr/>

<div align="center">

<h3>Live Testing</h3>

<h4>DEMO URL: https://sel-olympics.vercel.app/<h4/>

https://www.loom.com/share/bce18fad1c77455792a0f8a2a804a4f3?sid=cce7361e-30ef-4f1b-a420-d1d51d97e787

</div>

<hr/>

<h3>Local Testing</h3>

- Clone the repo
- Run npm install to install dependencies
- Run npm start to launch project
- Connect a solana wallet
