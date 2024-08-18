import { createPublicClient, http, createWalletClient, 
    formatEther, Address, toHex, hexToString } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { sepolia } from "viem/chains";
import * as dotenv from "dotenv";
dotenv.config();
import { abi, bytecode } from "../artifacts/contracts/Ballot.sol/Ballot.json";


const providerApiKey = process.env.ALCHEMY_API_KEY || "";
const deployerPrivateKey = process.env.PRIVATE_KEY || "";

const walletAccount = privateKeyToAccount(`0x${deployerPrivateKey}`);
const deployer = createWalletClient( {account: walletAccount, chain: sepolia,
        transport: http(`https://eth-sepolia.g.alchemy.com/v2/${providerApiKey}`),
    });

const publicClient = createPublicClient( { chain: sepolia,
    transport: http(`https://eth-sepolia.g.alchemy.com/v2/${providerApiKey}`),
});

// CLI parameters testing
// receiving parameters from standard input

const parameters = process.argv.slice(2);
console.log("parameter's length = ", parameters.length);

// The Winner.ts script doesn't need the below check
// as only contract address is enough for the script to execute
// declare const IS_IMPORTED_BY_WINNER_SCRIPT: boolean | undefined;
const IS_IMPORTED_BY_WINNER_SCRIPT = 
            (globalThis as any).IS_IMPORTED_BY_WINNER_SCRIPT;

if (typeof IS_IMPORTED_BY_WINNER_SCRIPT === "undefined" || 
            !IS_IMPORTED_BY_WINNER_SCRIPT) {
    if (!parameters || parameters.length < 2)    
        throw new Error("Parameters not provided");
}
else { // Winner.ts is being executed now
    if (!parameters || parameters.length == 0) 
        throw new Error("Contract Address Mandatory to know Winning Proposal");
}


const contractAddress = parameters[0] as `0x${string}`;
if (!contractAddress) throw new Error("Contract address not provided");
if (!/^0x[a-fA-F0-9]{40}$/.test(contractAddress))
    throw new Error("Invalid contract address");

export {
    parameters,
    publicClient,
    abi,
    bytecode,
    hexToString,
    contractAddress,
    deployer,
    
};