let Web3= require("web3");
const { toWei } = require("web3-utils");
let provider= new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545");
let web3= new Web3(provider);
//console.log(web3);

async function SendEther(){
    await web3.eth.sendTransaction({
        from: "0x7d2C58d723d4450838B6Bf598bFd06Fa70B4DA27",
        to: "0x05aaF6FCd82C6264A2014c2d8B6A01828a1d7f7f",
        value: web3.utils.toWei("10", "ether"),
    });
}
    SendEther();

