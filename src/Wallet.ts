import crypto from 'crypto'
import Transacion from './Transaction';


export default class Wallet {


    // genarating wallets
    publicKey_: Buffer
    privateKey_: Buffer

    constructor() {
        var {publicKey, privateKey} = crypto.generateKeyPairSync('ec', {
            namedCurve: 'secp256k1',   // Options
            publicKeyEncoding: {
                type: 'spki',
                format: 'der'
            },
            privateKeyEncoding: {
                type: 'pkcs8',
                format: 'der'
            }
        });
        this.publicKey_ = publicKey
        this.privateKey_ = privateKey
    }



    signTransaction(transaction: Transacion): any {
        const sign = crypto.createSign('SHA256');
        sign.write(transaction.dataToText())
        sign.end();
        transaction.signature = sign.sign({ key: this.privateKey_, format: 'der', type: 'pkcs8' });
    }

}