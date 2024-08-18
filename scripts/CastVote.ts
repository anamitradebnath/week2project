/// @dev run this file as: npx ts-node --files ./scripts/CastVote.ts
/// @dev correct input: 
// npx ts-node --files ./scripts/CastVote.ts 0x94245AC9f6E39373d3B3698753d47903bb1E0240 0 
// npx ts-node --files ./scripts/CastVote.ts 0x94245AC9f6E39373d3B3698753d47903bb1E0240 1 

import  {
    publicClient,
    abi,
    bytecode,
    hexToString,
    deployer
} from  "./../utilities/setup";

// receiving parameters from standard input
const parameters = process.argv.slice(2);
if (!parameters || parameters.length < 2)    
    throw new Error("Parameters not provided");

const contractAddress = parameters[0] as `0x${string}`;
if (!contractAddress) throw new Error("Contract address not provided");
if (!/^0x[a-fA-F0-9]{40}$/.test(contractAddress))
    throw new Error("Invalid contract address");
const proposalIndex = parameters[1];
if (isNaN(Number(proposalIndex))) throw new Error("Invalid proposal index");


// Attaching the contract and checking the selected option
console.log("Proposal selected: ");
// IIFE
(async () => {
const proposal = await publicClient.readContract({
                    address: contractAddress,
                    abi,
                    functionName: "proposals",
                    args: [BigInt(proposalIndex)],
            }) as any[];        
const name = hexToString(proposal[0], { size: 32 });
console.log("Voting to proposal", name);
console.log("Confirm? (Y/n)");
})();

// Sending transaction on user confirmation
// const stdin = process.openStdin(); => giving error
const stdin = process.stdin;
stdin.addListener("data", async function (d) {
  if (d.toString().trim().toLowerCase() != "n") {
    const voter = deployer;
    const hash = await voter.writeContract({
      address: contractAddress,
      abi,
      functionName: "vote",
      args: [BigInt(proposalIndex)],
    });
    console.log("Transaction hash:", hash);
    console.log("Waiting for confirmations...");
    const receipt = await publicClient.waitForTransactionReceipt({ hash });
    console.log("Transaction confirmed");
  } else {
    console.log("Operation cancelled");
  }
  process.exit();
});