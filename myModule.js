beBasic = () => "so fetch";
// module.exports is object that contains exportable code

function count() {
    for (let i = 0; i <= 10; i++) {
        console.log(i);
    }
}

module.exports = {
    count,
    beBasic
}