/*
import { expect } from "chai";
import { toHex, hexToString } from "viem";
import { viem } from "hardhat";
import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";

const PROPOSALS = ["Proposal 1", "Proposal 2", "Proposal 3"];

// deployContract will be used as Fixtures 
// aka common setup for all tests
async function deployContract() {
  // deploy the contract
  // and store the contracts' address for further commn
  const publicClient = await viem.getPublicClient(); // this script is the publicClient
  const ballotContract = await viem.deployContract("Ballot", [
    PROPOSALS.map((prop) => toHex(prop, { size: 32 })),
  ]);
  const [deployer, otherAccount] = await viem.getWalletClients(); //crypto wallet clients - used for ownership test
  return {publicClient, deployer, otherAccount, ballotContract};
}



describe("Ballot", async () => {
  describe("when the contract is deployed", async () => {
    
    it("has the provided proposals", async () => {
      const { ballotContract } = await loadFixture(deployContract);

      // an array can't be accessed in solidity directly as if there's a getter function
      // we need to loop item by item and compare each iteam
      for (let index=0; index<= PROPOSALS.length-1; index++) {
        const proposal = await ballotContract.read.proposals([BigInt(index)]);
        expect(PROPOSALS[index]).to.equal(hexToString(proposal[0], { size: 32 }));
        
        /* console.log(proposal) prints this:
            [
                '0x50726f706f73616c203100000000000000000000000000000000000000000000',
                0n
            ]        
                
      }
    });

    it("has zero votes for all proposals", async () => {
        const { ballotContract } = await loadFixture(deployContract);        
        // get all proposals and check for each, the votecount equals 0
        for (let index=0; index<= PROPOSALS.length-1; index++) {
            const proposal = await ballotContract.read.proposals([BigInt(index)]);
            expect(proposal[1]).to.equal(0n);
        }
    });
    
    it("sets the deployer address as chairperson", async () => {
        const { deployer, ballotContract } = await loadFixture(deployContract);  
        const chairperson = await ballotContract.read.chairperson();
        expect(chairperson.toLowerCase()).to.equal(deployer.account.address);
    });
    
    it("sets the voting weight for the chairperson as 1", async () => {
        const { ballotContract } = await loadFixture(deployContract);  
        const chairperson = await ballotContract.read.chairperson();
        const chairpersonVoter = await ballotContract.read.voters([chairperson]);
        expect(chairpersonVoter[0]).to.equal(1n);
    });
  });
    
  describe("when the chairperson interacts with the giveRightToVote function in the contract", async () => {
    it("gives right to vote for another address", async () => {
      // TODO
      throw Error("Not implemented");
    });
    it("can not give right to vote for someone that has voted", async () => {
      // TODO
      throw Error("Not implemented");
    });
    it("can not give right to vote for someone that has already voting rights", async () => {
      // TODO
      throw Error("Not implemented");
    });
  });

  describe("when the voter interacts with the vote function in the contract", async () => {
    // TODO
    it("should register the vote", async () => {
      throw Error("Not implemented");
    });
  });

  describe("when the voter interacts with the delegate function in the contract", async () => {
    // TODO
    it("should transfer voting power", async () => {
      throw Error("Not implemented");
    });
  });

  describe("when an account other than the chairperson interacts with the giveRightToVote function in the contract", async () => {
    // TODO
    it("should revert", async () => {
      throw Error("Not implemented");
    });
  });

  describe("when an account without right to vote interacts with the vote function in the contract", async () => {
    // TODO
    it("should revert", async () => {
      throw Error("Not implemented");
    });
  });

  describe("when an account without right to vote interacts with the delegate function in the contract", async () => {
    // TODO
    it("should revert", async () => {
      throw Error("Not implemented");
    });
  });

  describe("when someone interacts with the winningProposal function before any votes are cast", async () => {
    // TODO
    it("should return 0", async () => {
      throw Error("Not implemented");
    });
  });

  describe("when someone interacts with the winningProposal function after one vote is cast for the first proposal", async () => {
    // TODO
    it("should return 0", async () => {
      throw Error("Not implemented");
    });
  });

  describe("when someone interacts with the winnerName function before any votes are cast", async () => {
    // TODO
    it("should return name of proposal 0", async () => {
      throw Error("Not implemented");
    });
  });

  describe("when someone interacts with the winnerName function after one vote is cast for the first proposal", async () => {
    // TODO
    it("should return name of proposal 0", async () => {
      throw Error("Not implemented");
    });
  });

  describe("when someone interacts with the winningProposal function and winnerName after 5 random votes are cast for the proposals", async () => {
    // TODO
    it("should return the name of the winner proposal", async () => {
      throw Error("Not implemented");
    });
  });
});
*/