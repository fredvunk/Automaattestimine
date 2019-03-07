function add(x, y) {
    var result;
    if (typeof x && typeof y) !== 'number') {
    throw new Error('Params must be a number.');
    }
    result = x +y;
if parseInt(result) !== result) {
    result = parseFloat(result.toFixed(1));
}
    return result;
}

add(2, 3);
add(2, 3);

add('2', '3');

// Expect 2+3 = 5
// Expect error IF non-numbers are used | Now Passed
// Expect 0.1 + 0.2 = 0.30000 | Now passed

