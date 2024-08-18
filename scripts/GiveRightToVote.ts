/// @dev correct input: 
// npx ts-node --files ./scripts/GiveRightToVote.ts <contract address> <voter address>
// Ex:  npx ts-node --files ./scripts/GiveRightToVote.ts 
//              0x94245AC9f6E39373d3B3698753d47903bb1E0240 
//              0xeDa7116C16162B1EFf03D6Eed42b3F42213900f8


import  {
    parameters,
    publicClient,
    abi,
    bytecode,
    hexToString,
    contractAddress,
    deployer
} from  "../utilities/setup";

// check if the address can be given voting rights by the deployer
// CLI inputs will be: contract address, voter's address
const voter = parameters[1] as `0x${string}`;
if (!voter) throw new Error("Voter address not provided");

// Now, call the "giveRightToVote(address voter)" function
// note: this will be a transaction
// IIFE
(async () => {
    console.log("--- Executing giveRightToVote() --- ")
    try {
        const hash = await deployer.writeContract({
            address: contractAddress,
            abi,
            functionName: "giveRightToVote",
            args: [voter] //note, need to pass arguments as array
        });    
        console.log("Waiting for confirmations...");
        const receipt = await publicClient.waitForTransactionReceipt({ hash });
        if (receipt.status.toLocaleLowerCase() === "success") {
        console.log("Transaction confirmed. Voting rights given to the voter.");
        console.log("Transaction Hash: " + hash);
        }
    }
    catch {
        console.log("Transaction Rejected. Reverting changes ...");
        process.exit();
    }            
    
})();