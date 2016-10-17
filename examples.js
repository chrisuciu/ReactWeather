function addPromise(a, b) {
    return new Promise(function (resolve, reject){
        if (typeof a === 'number' && typeof b === 'number'){
            resolve(a + b);
        }
        else{
            reject('a and b need to be numbers');
        }
    });
}

addPromise(2, 2).then(function (sum) {
    console.log('promise success', sum);
}, function (err) {
    console.log('promise error', err);
});
addPromise(2, 'b').then(function (sum) {
    console.log('This should not show up');
}, function (err) {
    console.log(err);
});
