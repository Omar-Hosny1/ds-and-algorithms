// Dynamic Programing => caching


function memoizedAddTo80(){
    let cache = {};
    return function(n){
        if(n in cache){
            return cache[n];
        }else{
            console.log("Long Time");
            cache[n] = n + 80;
            return cache[n];
        }
    }
}

// let memoized = memoizedAddTo80();


// console.log(memoized(5));
// console.log(memoized(5));


// Greeting using Clousers

function greeting(){
    let names = {};
    return function name(name) {
        if (!names[name]){
            names[name] = name;
            console.log("Long Time");
            console.log("Hello " + name);
        } else {
            console.log("Hello " + names[name]);
        }
    }
}
// let sayHello = greeting(); 
// sayHello("omar");
// sayHello("omar");

function fibonacci(){
    let cache = {};
    return function fib(n) {
        if(n in cache) return cache[n]
        else {
            if(n < 2){
                return n
            }else {
                cache[n] = fib(n - 1) + fib(n - 2)
                return cache[n]
            }
        }
    } 
}

const fasterFib = fibonacci();


console.log(fasterFib(5));
console.log(fasterFib(10));