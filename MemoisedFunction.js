// Recursive fibonacci function

// Time Complexity : O(2^n) Exponential
function fibonacci(n) {
    if (n <= 1) return n
    return fibonacci(n - 2) + fibonacci(n - 1);
}

console.log(fibonacci(10))

// so if we're makeing the recursive tree for the above function
// then we see that some of the function calls gets repeated
// so can we not save the values of those function calls 
// in any array,so if we need it in future we will
// right away pick that value from that cachedArr


// Time Complexity : O(n) Linear
function optimalFibonacci(n, cacheArr = new Array(n).fill(null)) {
    if (cacheArr[n])
        return cacheArr[n]
    if (n <= 1) return n
    return cacheArr[n] = optimalFibonacci(n - 1, cacheArr) + optimalFibonacci(n - 2, cacheArr)
}

console.log(optimalFibonacci(15))
