//0x8eEbA7473407fc7Cd295Ea3ec984c9C325f4a68c
const Contract= require("web3-eth-contract");
Contract.setProvider("HTTP://127.0.0.1:7545");
//ABI and contract address
async function readContract(){
    const ABI=[
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_num",
                    "type": "uint256"
                }
            ],
            "name": "setter",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getter",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "num",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
    ];
    const contractAddress="0x8eEbA7473407fc7Cd295Ea3ec984c9C325f4a68c";
    const contract =new Contract(ABI,contractAddress);
    const data =await contract.methods.getter().call();
    console.log(data);
}
readContract();