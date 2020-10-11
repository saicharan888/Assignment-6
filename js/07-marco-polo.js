
/*eslint-env browser*/
/*jslint-env browser*/

var i;
result = "";

for(i = 1; i <=100; i++){
    if((i % 3 === 0) && (i % 5 === 0)){
        result += ("Marco! Polo! <br/>");
    }else if(i % 3 === 0){
        result += ("Marco! <br/>");
    }else if(i % 5 === 0){
        result += ("Polo! <br/>");
    }else{
        result += (String(i) + " <br/>");
    }

}

window.document.write(result);