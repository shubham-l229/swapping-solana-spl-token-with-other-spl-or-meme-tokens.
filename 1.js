const SOL_Token_Mint_Address = "So11111111111111111111111111111111111111112";
const Dogwifthat = "EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm";

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter the token you want to swap with SOL Token: ', (userInput) => {
  console.log(`Swapping ${SOL_Token_Mint_Address} with ${userInput} for ${Dogwifthat}`);
  rl.close();
});
