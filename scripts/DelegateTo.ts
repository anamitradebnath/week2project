/// @dev correct input: 
// npx ts-node --files ./scripts/DelegateTo.ts <contract address> <delegateTo address>
// Ex:  npx ts-node --files ./scripts/DelegateTo.ts 
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

const delegateToVoter = parameters[1] as `0x${string}`;
if (!delegateToVoter) throw new Error("Delegate to Voter's address not provided");

// Now, call the "delegate(address to)" function
// note: this will be a transaction
// IIFE
(async () => {
    console.log("--- Executing delegate() --- ")
    try {
        const hash = await deployer.writeContract({
            address: contractAddress,
            abi,
            functionName: "delegate",
            args: [delegateToVoter] //note, need to pass arguments as array
        });    
        console.log("Waiting for confirmations...");
        const receipt = await publicClient.waitForTransactionReceipt({ hash });
        if (receipt.status.toLocaleLowerCase() === "success") {
            console.log("Transaction confirmed. Voting delegation complete.");
            console.log("Transaction Hash: " + hash);
        }
    }
    catch {
        console.log("Transaction Rejected. Reverting changes ...");
        process.exit();
    }            
    
})();