/*eslint-env browser*/
/*jslint-env browser*/

var coinFlip;
var result = "";

do{
    coinFlip = Math.round(Math.random());
    result = (coinFlip == 0)? "Heads":"Tails";
    window.console.log(result);
}while(coinFlip != 1)