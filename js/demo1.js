function pushArr(arr) {
    var brr = [];
    for (var i = 0; i < arr.length-1; i++) {
        if (brr.indexOf(arr[i]) === -1) {
            brr.push(arr[i]);
        }
    }
    return brr;
}
console.log(pushArr([1,4,8,2,5,2,1,3]));