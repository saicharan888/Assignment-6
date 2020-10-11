/*eslint-env browser*/
/*jslint-env browser*/

var enterNumber;
var quit = false;
var i;

while(!quit){
    counter = parseInt(window.prompt("Enter a number:"));
    if(enterNumber < 0){
        window.alert("Please enter positive integer");
        continue;
    }
    window.document.write("<br> Counting down from: <br>");
    for(i = counter; i >= 0; i--){
        window.alert("Counting down from:" + i);
        window.document.write(i + "<br>");
    }
    window.alert("Timer Finished!");
    window.document.write("Counter is finished")
    quit = true;
}