// Note: here, we are using viem directly, not hardhat/viem
// hence, all these can be thought of as standalone viem functionalities
// and these can be used as is in any future front-end project as well

import { createPublicClient, http, createWalletClient, 
            formatEther, Address, toHex, hexToString } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { sepolia } from "viem/chains";
import * as dotenv from "dotenv";
dotenv.config();
import { abi, bytecode } from "../artifacts/contracts/Ballot.sol/Ballot.json";


const providerApiKey = process.env.ALCHEMY_API_KEY || "";
const deployerPrivateKey = process.env.PRIVATE_KEY || ""; // my wallet's private key; I being the deployer of the contract

export async function main() {
    const proposals = process.argv.slice(2);
    if (!proposals || proposals.length < 1)
        throw new Error("Proposals not provided");


    // create the wallet Account object here which will represent one specific account from my actual metamask wallet
    // privateKeyToAccount() will create an account by taking the private key of that specific account
    const walletAccount = privateKeyToAccount(`0x${deployerPrivateKey}`);

    // now, create a client on behalf of that specific account
    const deployer = createWalletClient( {account: walletAccount, chain: sepolia,
                            transport: http(`https://eth-sepolia.g.alchemy.com/v2/${providerApiKey}`),
                        });
    
    console.log("Deployer address:", deployer.account.address);

    // get the balance of that account 
    // create a publicclient FOR THIS WALLET'S ACCOUNT (using its private key)
    const publicClient = createPublicClient( { chain: sepolia,
                            transport: http(`https://eth-sepolia.g.alchemy.com/v2/${providerApiKey}`),
                        });
    const balance = await publicClient.getBalance({ address: deployer.account.address, });
    console.log( "Deployer balance:", formatEther(balance), deployer.chain.nativeCurrency.symbol );


    // deploy the smart contract now by using my metamask wallet's account
    console.log("\n----- Deploying Ballot contract now -----");
    const hash = await deployer.deployContract( { abi, bytecode: bytecode as Address,
                                            args: [proposals.map((prop) => toHex(prop, { size: 32 }))],
                        });
    console.log("Transaction hash:", hash);
    console.log("Waiting for confirmations...");
    // note, we'll use walletClient to do a transaction and publiClient to 
    // read transaction's details (status, value etc) 
    const receipt = await publicClient.waitForTransactionReceipt({ hash });
    console.log("Ballot contract deployed to:", receipt.contractAddress);

    console.log(" ** Call Functions / read data the deployed contract **");
    console.log("Retrieving Proposals from the deployed contract ... ");
    if (!receipt.contractAddress) 
        throw new Error("Err! Contract Not Found in receipt!!");

    // processing user's input to vote a proposal passed by proposal's index
    // in the "proposals" array
    for (let index = 0; index < proposals.length; index++) {
      const proposal = (await publicClient.readContract({
        address: receipt.contractAddress,
        abi,
        functionName: "proposals",
        args: [BigInt(index)],
      })) as any[];
      const name = hexToString(proposal[0], { size: 32 });
      console.log({ index, name, proposal });
    } 

    

  
  /*const publicClient = createPublicClient({
    chain: sepolia,
    transport: http(`https://eth-sepolia.g.alchemy.com/v2/${providerApiKey}`),
  });
  const blockNumber = await publicClient.getBlockNumber();
  console.log("Last block number:", blockNumber); */
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
