import Block from "./Block";

export default class BlockChain {
    chain: Block[];
    availbleCoins: number = 1000000000

    constructor() {
        this.chain = []
    }

    mineBlock() {
        // calculate the hash of the new block and save it to the chain

        // TODO reward the minner for the time spent and power invested
    }



}