exports.min = function min(array) {
    return isEmpty(array) ? 0 : Math.min.apply(null, array);
}

exports.max = function max(array) {
    return isEmpty(array) ? 0 : Math.max.apply(null, array);
}

exports.avg = function avg(array) {
    return isEmpty(array) ? 0 : array.reduce((a, b) => a + b, 0) / array.length;
}

function isEmpty(array) {
    return array === undefined || array.length === 0;
}
