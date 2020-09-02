exports.min = function min(array) {
    check(array);
    return Math.min(array);
}

exports.max = function max(array) {
    check(array);
    return Math.max(array)
}

exports.avg = function avg(array) {
    check(array);
    return array.reduce((a, b) => a + b, 0) / array.length;
}

function check(array) {
    if (array === undefined || array.length === 0) return []
}
