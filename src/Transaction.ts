import crypto from 'crypto'

export default class Transacion {

    fromAddress: Buffer = Buffer.from('')
    toAddress: Buffer = Buffer.from('')
    amount: number = 0
    signature: Buffer = Buffer.from('')
    constructor(fromAddress: Buffer, toAddress: Buffer, amount: number) {

        this.fromAddress = fromAddress
        this.toAddress = toAddress
        this.amount =amount

    }

    
    verifyTransaction(): any {
        const verify = crypto.createVerify('SHA256');
        verify.write(this.dataToText())
        verify.end();
        return verify.verify({key: this.fromAddress, format:'der', type: 'spki'},this.signature);
    }


    dataToText(): any {
        return this.fromAddress.toString('hex') + this.toAddress.toString('hex') + this.amount
    }

}