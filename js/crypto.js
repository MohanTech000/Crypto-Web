let setting = {
    "async" : true,
    "scrossDomain" : true,
    "method" : "GET",
    "url" : "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
    "headers": {}
}

$.ajax(setting).done(function (response){
        btc.innerHTML = response.bitcoin.usd;
        eth.innerHTML = response.ethereum.usd;
        dog.innerHTML = response.dogecoin.usd;
}
)

let btc = document.getElementById('bitcoin');
let eth = document.getElementById('ethereum');
let dog = document.getElementById('dogecoin');
