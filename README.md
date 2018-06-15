![Wisdom dot fun - The title](https://raw.githubusercontent.com/larryschirmer/wisdom-dot-fun/master/readme-assets/wisdondotfuntitle.png)

## A decentralized social network for those who regret what they say

### Table of Contents:

1.  The Problem
1.  Action
    - Openness First
    - Centralized Trust
1.  Solution/Resolution
1.  Problems and Future Work

# Problem

Data on the blockchain is immutable and persistent. These are qualities that I love so much about the technology. A shared store of data that everyone has access to and no one can censor. But what happens then I need a shared store of ephemeral data or users still want to choice to destroy access to their data?

> ### I thought people couldn’t access private information held in smart contracts?

Smart contracts are a great way to provide easy access to data stored on the blockchain. These contracts can even control how other contracts can access its own data. That control, though, doesn’t extend to the blockchain itself which is open to everyone who wants to read it. [Source](https://www.greshamtech.com/blog/smart-contracts-on-ethereum-solidity-privacy)

So how can one store data on the blockchain that can be accessed for a period of time or decide later to remove access to it?

# Action

> ### Openness First, Centralized Trust.

When organizations approach security, it is with a "trust us to keep your data private" model. Data is stored on secure centralized servers for safe keeping and users can trust that it will be kept safe.

![A conceptual drawing of the blockchain](https://raw.githubusercontent.com/larryschirmer/wisdom-dot-fun/master/readme-assets/blockchain.png)

I take the opposite approach using a "trust the blockchain to keep your data open, and trust us to forget how to decrypt it" model.

### Openness First

![A drawing of a person who wants a hug](https://raw.githubusercontent.com/larryschirmer/wisdom-dot-fun/master/readme-assets/openness.png)

For social networks, often the draw to the platform is the ability to participate in community. Sharing ideas on a platform can be revolutionary. Having content open and available to all users should remain a core feature of any social platform. Openness First comes from this idea and is the default for this platform.

### Centralized Trust

![a drawing of two people participating in a trust fall](https://raw.githubusercontent.com/larryschirmer/wisdom-dot-fun/master/readme-assets/trust.png)

A feature that most popular platforms have, to delete personal content, is not compatible with the blockchain. Data added to the blockchain is stored forever and cannot be taken back, but I feel like there should always be the option to remove access to your content. Centralized Trust means that I encrypt your data before storing on the blockchain, and provide the platform decrypted access to it upon request. This means that, should a user ever want to remove access to the content, no user or miner will have decrypted access to it anymore.

# Solution/Resolution

As a fun example concept to test Openness First, Centralized Trust, I developed a social network for Markov Chain generated wisdom.

![app example](https://raw.githubusercontent.com/larryschirmer/wisdom-dot-fun/master/readme-assets/markovchainexample.png)

The platform uses an oracle to fetch wisdom from the blockchain to populate the page offering progressive enhancement for those not yet familiar with Metamask or the blockchain.

Users can immediately view snippets of wisdom generated by other users from all over the world

#### Example Snippets:

- I snuck into your sink
- Go tie yo lemon-wipes
- So much campfire time hating
- Have a toy with your family

If metamask is installed, users can generate their own content. Posting content to the site places their newly generated content on the blockchain and generates them a site token to spend later.

![A process diagram demonstrating how one gets tokens for generating content](https://raw.githubusercontent.com/larryschirmer/wisdom-dot-fun/master/readme-assets/theprocess.png)

These tokens can then be used to upvote/downvote other wisdom on the page building a sense of ownership. When content is first placed on the blockchain, it is afforded one point. When any content is down voted to zero, the system skips decrypting the data and it is no longer available on the site.

Sound Fun? I thought so… Now get in there and say something fun

# Problems and Future Work

### Problems

- Building a social network presents issues delivering data at scale. Presently, the architecture of the network follows this algorithm:
  1.  Make a request to ethereum for all of the contracts that store wisdom. This returns addresses to encrypted text.
  1.  Make a request to each of the addresses to fetch the encrypted data from the contract.
  1.  With the encrypted data for each wisdom, send encrypted data to remote encrypt/decrypt serverless Faas (this is to keep the private key separate from the app logic). This is done individually, but should be done in batches.
  1.  Then deliver decrypted data to front-end
- Proposed solution: break up the content storage horizontally making the need for fewer requests to the blockchain

### Future Work

- Pick a different name: I can't afford the name
- Back-end:
  - Complete the voting process, the ability for users to interact with the blockchain from the UI
  - Switch to a more sustainable content storage architecture
  - Assign ownership to content, so users can identify which content is theirs
- Front-end:
  - Show a timeline of all the generated wisdom, fetched from oracle
  - If user has Metamask, offer button to generate new content from Markov-chain UI
  - If user has Metamask, have an upvote/downvote button next to each piece of wisdom
