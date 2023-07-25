const tokenAddress = '0x0c3B13f9D5156d1195644852661bA61ae53A423C'; // replace with your own crypto address
const tokenSymbol = 'ARY'; // replace with your own crypto symbol
const tokenDecimals = 18; // put number of decimals
const tokenImage = 'https://aarya.network/images/logo.png'; // add link to a token image

async function addToWallet() {
  try {
    if (typeof window.ethereum !== 'undefined') {
      const wasAdded = await ethereum.request({
        method: 'wallet_watchAsset',
        params: {
          type: 'ERC20',
          options: {
            address: tokenAddress,
            symbol: tokenSymbol,
            decimals: tokenDecimals,
            image: tokenImage,
          },
        },
      });

      if (wasAdded) {
        console.log('Currency Added Successfully');
      } else {
        console.log('The currency has not been added');
      }
    } else {
      // MetaMask is not installed, show a user-friendly alert
      window.alert('Please install MetaMask to use this feature.');
    }
  } catch (error) {
    console.log(error);
  }
}