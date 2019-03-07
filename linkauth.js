var FIBOS = require('fibos.js');

var name = 'fibosas23333';

fibos = FIBOS({
  chainId: '6aa7bd33b6b45192465afa3553dedb531acaaff8928cf64b70bd4c5e49b7ec6a',
  keyProvider: '',
  httpEndpoint: 'http://se-rpc.fibos.io:8870',
  logger: {
    log: null,
    error: null
  }
});

let ctx = fibos.contractSync('eosio');
ctx.linkauthSync({
  account: name,
  code: 'eosio',
  type: 'voteproducer',
  requirement: 'vote'

});

var c = fibos.getAccountSync(name);
console.notice(c);
