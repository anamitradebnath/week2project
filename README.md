# Week 2 - Project

## INDEX
- [Assignment Tasks - Week2 - Group No. 5](#assignment-tasks---week-2---group-no-5)
- [Date of Submission](#date-of-submission)
- [GitHub Link](#github-link)
- [Tasks](#tasks)
  - [Successfully Deploying the Contract Ballot.sol with 2 Proposals](#successfully-deploying-the-contract-ballotsol-with-2-proposals)
  - [Casting Votes](#casting-votes)
    - [Script](#script)
    - [Script failing when array index given more than the length of proposal array](#script-failing-when-array-index-given-more-than-the-length-of-proposal-array)
    - [Script successfully executing voting for a proposal](#script-successfully-executing-voting-for-a-proposal)
  - [Giving Voting Rights](#giving-voting-rights)
    - [Script](#script-1)
    - [Script successfully giving rights to vote to a new voter](#script-successfully-giving-rights-to-vote-to-a-new-voter)
    - [Trying to give the same voter voting right again throws error](#trying-to-give-the-same-voter-voting-right-again-throws-error)
  - [Delegate](#delegate)
    - [Script](#script-2)
    - [Script failing when a user who has already voted tries to delegate](#script-failing-when-a-user-who-has-already-voted-tries-to-delegate)
  - [Winner Proposal](#winner-proposal)
    - [Script](#script-3)
    - [Script failing with wrong contract address](#script-failing-with-wrong-contract-address)
    - [Script successfully executing and providing winning proposal name](#script-successfully-executing-and-providing-winning-proposal-name)

## Assignment Tasks - Week 2 - Group No. 5
This is a group activity for at least 3 students:
- Develop and run scripts for “Ballot.sol” within your group to give voting rights, casting votes, delegating votes, and querying results.
- Write a report with each function execution and the transaction hash, if successful, or the revert reason, if failed.
- Submit your weekend project by filling out the form provided in Discord.
- Submit your code in a GitHub repository in the form.

## Date of Submission
18-Aug-2024

## GitHub Link
[https://github.com/evmbootcamp/week2project](https://github.com/evmbootcamp/week2project)

## Tasks

### Successfully Deploying the Contract Ballot.sol with 2 Proposals
![Project Screenshot](./utilities/1.png)

- **Contract URL on Etherscan**:  
  [https://sepolia.etherscan.io/address/0x94245ac9f6e39373d3b3698753d47903bb1e0240#code](https://sepolia.etherscan.io/address/0x94245ac9f6e39373d3b3698753d47903bb1e0240#code)

### Casting Votes

#### Script
`CastVote.ts`

#### Script failing when array index given more than the length of proposal array
[Etherscan Link](https://sepolia.etherscan.io/address/0x94245ac9f6e39373d3b3698753d47903bb1e0240#code)
![Project Screenshot](./utilities/2.png)

#### Script successfully executing voting for a proposal
![Project Screenshot](./utilities/3.png)

### Giving Voting Rights

#### Script
`GiveRightToVote.ts`

#### Script successfully giving rights to vote to a new voter
![Project Screenshot](./utilities/4.png)

#### Trying to give the same voter voting right again throws error
![Project Screenshot](./utilities/5.png)

### Delegate

#### Script
`DelegateTo.ts`

#### Script failing when a user who has already voted tries to delegate
![Project Screenshot](./utilities/6.png)

#### Script successfully executing and delegating to the provided voter
Transaction Hash: `0xb6b8c3321eeb0e909c0a1390b346b257c10030e3ccae64bc76aaf8d937193fbf`
![Project Screenshot](./utilities/7.png)

### Winner Proposal

#### Script
`Winner.ts`

#### Script failing with wrong contract address
![Project Screenshot](./utilities/8.png)

#### Script successfully executing and providing winning proposal name
![Project Screenshot](./utilities/9.png)

---

### Additional Instructions

- **Group Activity**: This project was conducted by Group No. 5, consisting of at least three students.

- **Objectives**:
  1. Develop and run scripts for `Ballot.sol` to give voting rights, cast votes, delegate votes, and query results.
  2. Write a report detailing each function execution and the transaction hash if successful, or the revert reason if failed.
  3. Submit the project using the form provided on Discord.
  4. Submit the code in the GitHub repository linked above.
