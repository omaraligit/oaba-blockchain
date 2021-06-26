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
let wallet = new Wallet()
// block.calculatHash()

console.log("public key",wallet.publicKey_);
console.log("private key",wallet.privateKey_);

// making a transaction
let trans = new Transacion(wallet.publicKey_,20)

console.log(wallet.signTransaction(trans));
