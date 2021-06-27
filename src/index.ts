import crypto from 'crypto'
import Block from "./Block"
import BlockChain from "./BlockChain"
import Transacion from './Transaction'
import Wallet from "./Wallet"

// init blockChain
let blockChain = new BlockChain()
// tem block letter will be mined automaticaly
let block = new Block()
// fack new wallet
let omarWallet = new Wallet()
let aliWallet = new Wallet()
// block.calculatHash()

console.log("public key", omarWallet.publicKey_.toString('hex'));
console.log("private key", omarWallet.privateKey_.toString('hex'));


// making a transaction
let trans = new Transacion(omarWallet.publicKey_, aliWallet.publicKey_, 20)
omarWallet.signTransaction(trans)
console.log("------++ signed ++-----",trans.signature.toString('hex'));
// trans.amount = 300
console.log("------++ verify ++-----",trans.verifyTransaction());

