/*eslint-env browser*/
/*jslint-env browser*/

var i;
for(i = 0; i <= 15; i++){
    if(i % 2 === 0) {
        window.console.log("\"" + String(i) + " is even\"" + "\n") ;
    }else{
        window.console.log("\"" + String(i) + " is odd\"" + "\n");
    }  
}