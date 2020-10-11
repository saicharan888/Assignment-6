  
/*eslint-env browser*/
/*jslint-env browser*/

var result = "";
for (var i = 1 ; i <= 7 ; i++){
    result = "";
    for (var j = 1 ; j <= i ; j++){
      result +="#";
    }
    window.console.log(result);   
}