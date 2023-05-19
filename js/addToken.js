if (typeof window.ethereum !== 'undefined')
{
console.log('MetaMask is installed')
}

const tokenAddress = '0x0c3B13f9D5156d1195644852661bA61ae53A423C'; // replace with your own crypto address
const tokenSymbol = 'ARY'; // replace with your own crypto symbol
const tokenDecimals = 18; // put number of deciimals
const tokenImage = 'https://aarya.network/images/logo.png'; // add link to a token image

async function addToWallet() {

try {
  
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
    console.log('Currency Added Successfuly');
  } else {
    console.log('The currency has not been added');
  }
} catch (error) {
  console.log(error);
}
}