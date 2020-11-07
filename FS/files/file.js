function calc () {
    let sum = 0;
    for(let value of arguments) {
        sum += value;
    }

    return sum;
}

function xxx () {

}

module.exports = {
    calc,
    another : xxx
};
