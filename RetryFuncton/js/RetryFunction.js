// Source Article : https://hackernoon.com/how-to-improve-your-backend-by-adding-retries-to-your-api-calls-83r3udx

const URL = "https://status-codes.glitch.me/status/400"

// This function is implemeting retry mechanism of api calls, 
// here this function will get called 4 times "immediately" 
function fetchRetry(url, options = {}, retries = 3) {
    return fetch(url, options).then(res => {
        if (res.ok) return res.json();
        if (retries > 0) {
            return fetchRetry(url, options, retries - 1)
        } else {
            throw new Error(res)
        }
    })
        .catch(e => console.log(e))
}

// Above method needs one more improvement
// The subsequent retry calls are very immediate
// we want the user to wait/delay/sleep between
// subsequent API calls or we can say we need to pause execution between the calls
// to get the good user experience
// Lets improve this with custom sleep() below

var sleep = function (ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    })
}

function fetchRetryV2(url, options = {}, retries = 3) {
    return fetch(url, options).then(async (res) => {
        if (res.ok) return res.json();
        if (retries > 0) {
            await sleep(2000)
            return fetchRetryV2(url, options, retries - 1)
        } else {
            throw new Error(res)
        }
    })
        .catch(e => console.log(e))
}

// Above implmenetation needs one more improvement
// which is to check for the error codes 
// and if found, then only retry subsequent calls

function fetchRetryV3(url, options = {}, retries = 3) {
    const retryCodes = [404,500]
    return fetch(url, options).then(async (res) => {
        if (res.ok) return res.json();
        if (retries > 0 && retryCodes.includes(res.status)) {
            await sleep(2000)
            return fetchRetryV3(url, options, retries - 1)
        } else {
            throw new Error(res)
        }
    })
        .catch(e => console.log(e))
}
