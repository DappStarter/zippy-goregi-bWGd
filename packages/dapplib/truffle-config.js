require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney entire bright venture stool response sister provide hard light army genuine'; 
let testAccounts = [
"0x8932bc7499ee5beadf7c328ce6506d410699820d44872ad2fcb6dc0e629ac539",
"0xb24136d8ef0f94b5ce21df3fe4ebedc54c3a124647d4dbaa247666d5f9317989",
"0xe4a5452e7359ab84de6e8555bbc8982b643fe7bb42cc5121a7671829e1d586f6",
"0xf5c569a291f4127232b516170825a2ff4478fd410852d4df758034cb75e74a69",
"0xf3f9f7f9aa346a92009f86f14cba41e3d96494244ab7957e1880c2ef9035f828",
"0xd6cb8b5f0277dc50420d9e23e38ce51e6382df0dffe7683b47ede915793a5b8f",
"0xb864e477e04aac4dc81c54f01e37d655a1eb3dc60c6ef3062842282a76064e80",
"0x72f54dc7f040b8d0d6c82a409f17536bbc54d5abaa21b4882a645a82864d0abf",
"0x4de3ee613b9ff254d9d4679bef95cfe3fd9ce2b1f62ccc4ca9d57e102a7982af",
"0x79a0d4a04c1c9de2b9947d46744cfae82939cca47a8ff20ec17dd263b6ea01f5"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

