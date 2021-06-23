import Block from "./Block"
import BlockChain from "./BlockChain"
import crypto, { randomBytes } from 'crypto'

let blockChain = new BlockChain()
let block = new Block()
// block.calculatHash()
console.log(block.blockHash + '-' + block.nonce);

// genarating wallets
var prime_length = 512;
var diffHell = crypto.createDiffieHellman(prime_length);

diffHell.generateKeys('base64');
console.log("Public Key : " ,diffHell.getPublicKey('base64'));
console.log("Private Key : " ,diffHell.getPrivateKey('base64'));

console.log("Public Key : " ,diffHell.getPublicKey('hex'));
console.log("Private Key : " ,diffHell.getPrivateKey('hex'));