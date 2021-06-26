import Wallet from "./Wallet"

export default class Transacion{

    fromAddress: string = ''
    toAddress:string = ''
    amount: number = 0
    signature: string = ''
    wallet: Wallet = new Wallet()
    constructor(toAddress: string,amount: number){
        this.wallet = new Wallet()
        this.signature = this.wallet.signTransaction(this)
    }

}