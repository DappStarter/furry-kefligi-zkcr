require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid process orient venture stove razor often minor guess end army genius'; 
let testAccounts = [
"0x10abfd352e7367f301f6dc88cf16e9463372d1fab3c24c006b58d422764e7b0e",
"0xae2a9ac1d764d4def0cdf2fa5451ef6572166344a691034428aee15148be8456",
"0x037cbce6513823eebb5433d459abf0aa6e397e1c972904d3de5eab7576e85c8d",
"0x60f4c76b1ae03b90e186558b2ae067a9e400dba18b9d6573e9cb5a2202b6ec63",
"0x3e6c8c665882d98d440e494284ef8b6ee07e7df59fc070aff0c24a9480da4a38",
"0x9798f6b5000b1253263ef41223121278e335dd12e4c79c6c3c7266253c21a879",
"0xa40b926355946a60c2d63251bdaba4a07b497c67cf2d47d5d18e8dd12862d213",
"0x6cb6a6f22d40e41defc0bc40e833b41967013383658c7c84ec5367706b63d1ca",
"0x49e382e0a1b783b197f248af0b0e303b6799a5a7d3f4656fa3b6c9bcac75da91",
"0x9dde0f6e9fea47a15c801d1c1947146a27f13b9d116b21ba6a49957ab9b6ec0d"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

