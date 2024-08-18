/// @dev correct input: 
// npx ts-node --files ./scripts/Winner.ts <contract address> 
// Ex:  npx ts-node --files ./scripts/GiveRightToVote.ts 
//              0x94245AC9f6E39373d3B3698753d47903bb1E0240 


// IS_IMPORTED_BY_WINNER_SCRIPT is checked inside setup.ts
// to NOT run a specific "if" condition
(globalThis as any).IS_IMPORTED_BY_WINNER_SCRIPT = true;

import  {
    parameters,
    publicClient,
    abi,
    bytecode,
    hexToString,
    contractAddress,
    deployer
} from  "../utilities/setup";

// IIFE
(async () => {
    const winingProposalName = await publicClient.readContract({
                        address: contractAddress,
                        abi,
                        functionName: "winnerName"                        
                }) as any; 
    
    
    const name = hexToString(winingProposalName, { size: 32 });
    console.log("Winning Proposal Is:", name);    
    })();


// delete the global variable
delete (globalThis as any).IS_IMPORTED_BY_WINNER_SCRIPT;
