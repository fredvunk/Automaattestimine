function add(x, y) {
    return x + y;
}

add(2, 3);
add(2, 3);

add('2', '3');

// Expect 2+3 = 5
// Expect error IF non-numbers are used
// Expect 0.1 + 0.2 = 0.30000