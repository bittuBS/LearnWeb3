let Web3= require("web3");
const { toWei } = require("web3-utils");
let provider= new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545");
let web3= new Web3(provider);
//console.log(web3);
async function GetBalance(){
    const WeiBalance = await web3.eth.getBalance("0x7d2C58d723d4450838B6Bf598bFd06Fa70B4DA27"); 
console.log(WeiBalance);

const EthBalance=web3.utils.fromWei(WeiBalance,"ether");//wei to ether
const weiBalance=web3.utils.toWei(EthBalance,"ether");//ether to wei
console.log(weiBalance);
//console.log(EthBalance);
}
GetBalance();


