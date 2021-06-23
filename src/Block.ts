import sha256 from 'crypto-js/sha256';
export default class Block {

    blockHash: string = ''
    prevHash: string = '0000'
    time: number = Date.now()
    nonce: number = 0
    transaction: Array<any> = []

    calculatHash() {
        while (this.blockHash.substr(0, 4) != "1234") {
            this.nonce++
            this.blockHash = sha256(this.prevHash + this.time + this.nonce + this.transaction.toString).toString();
        }
    }

}