function unshiftArr (arr) {
    var brr = [];
    for (var i=arr.length-1;i>= 0;i--){
        if (brr.indexOf(arr[i]) === -1) {
            brr.unshift(arr[i]);
        }
    }
    return brr;
}
console.log(unshiftArr([1,4,3,2,5,2,1,3]));