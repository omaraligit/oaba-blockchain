import crypto from 'crypto'
import Transacion from './Transaction';


export default class Wallet {


    // genarating wallets
    publicKey_: string = ''
    privateKey_: string = ''

    constructor() {
        crypto.generateKeyPair('ec', {
            namedCurve: 'secp256k1',   // Options
            publicKeyEncoding: {
                type: 'spki',
                format: 'der'
            },
            privateKeyEncoding: {
                type: 'pkcs8',
                format: 'der'
            }
        }, (err, publicKey, privateKey) => this.handleCallBack(err, publicKey, privateKey));

    }
    handleCallBack(err: Error | null, publicKey: Buffer, privateKey: Buffer) {
        if (!err) {
            // Prints new asymmetric key
            // pair after encoding
            this.publicKey_ = publicKey.toString('hex')
            this.privateKey_ = privateKey.toString('hex')

            console.log(this.publicKey_,this.privateKey_)

        }
        else {
            // Prints error
            console.log("Errr is: ", err);
        }


    }
    signTransaction(transaction: Transacion): any {
        return 'signature'

        // const sign = crypto.createSign('SHA256');
        // sign.write('some data to sign');
        // sign.end();
        // const signature = sign.sign(privateKey, 'hex');

            


    }

    verifyTransaction(transaction: Transacion): any {
        return 'signature'

        // const verify = crypto.createVerify('SHA256');
        // verify.write('some data to sign');
        // verify.end();
        // console.log(verify.verify(publicKey, signature, 'hex'));
    }
}