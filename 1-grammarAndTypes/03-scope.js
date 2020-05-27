/* 
SCOPE

1-grammarAndTypes
    03-scope.js
*/

/* 
What is scope?

JS has both LOCAL and GLOBAL scope.
*/
// example 1

let x = 12;

function scope(){
    // let x = 33;
    // let y = 10;
    console.log(x);
}
scope(); //logs 33
console.log(y);
console.log(x); //logs 12

// example 2
let x = 12;

function scope(){
    x = 33;
    console.log(x);
}

scope() //33
console.log(x); //33

// example 3;
let x = 1;

function scope() {
    let x = 2;
    function scopeInner() {
        let x = 3;
        console.log(x); //3
    }
    scopeInner();
    console.log(x); //2
}
scope();
console.log(x); //1

// example 4 contrast with 3:
var x = 12;

function scope(){
    var x = 33;
    if (true) {
        let x = 45;
        console.log(x); //45
    }
    console.log(x); //33
}

scope();
console.log(x); //12

// example 5 contrasts 4:
var x = 12;

function scope(){
    var x = 33;
    if (true){
        var x = 45;
        console.log(x); //45
    }
    console.log(x); //45 --> var doesn't obey 'block' scope
}

scope();
console.log(x); //12