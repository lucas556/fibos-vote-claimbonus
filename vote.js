var FIBOS = require("fibos.js");

fibos = FIBOS({
    chainId: '6aa7bd33b6b45192465afa3553dedb531acaaff8928cf64b70bd4c5e49b7ec6a',
    keyProvider: '',
    httpEndpoint: 'http://se-rpc.fibos.io:8870',
    authorization: 'fibosas23333@vote',
    logger: {
        log: null,
        error: null
    }
});

options = {
    authorization: 'fibosas23333@vote',
  }

voter = ["3x5555555555", "blockedencom", "fibos123comm", "fibosphoenix","fibosasziben", "fibosblockbp", "fibosironman", "fibospoolbp5", "fibosrockskr", "fibosshuaipc", "fibosspider1",
    "fibosxianyou", "fibscandotio", "fibtothemoon", "foabugdate11", "fopacificcom", "fotothemooon", "hellofibos11", "lijialintest", "linyuezhan12", "mayasuperbps", 
    "morganchasex","plasmatfibos", "sayyousayyou", "startfibosbp", "touchmyheart", "williamfouvy", "zhangsenyuan"
]

var ctx = fibos.contractSync("eosio");
var rs = ctx.voteproducerSync("fibosas23333", "", voter.sort(),options);
console.log(rs);
