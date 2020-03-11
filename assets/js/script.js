var numbers = ["a", "b", "c", "d", "e"];

function randomBTN() {
    var rnr1 = numbers[Math.floor(Math.random() * numbers.length)];
    document.getElementById("result1").innerHTML = rnr1;

    var rnr2 = numbers[Math.floor(Math.random() * numbers.length)];
    document.getElementById("result2").innerHTML = rnr2;

    var rnr3 = numbers[Math.floor(Math.random() * numbers.length)];
    document.getElementById("result3").innerHTML = rnr3;

    var rnr4 = numbers[Math.floor(Math.random() * numbers.length)];
    document.getElementById("result4").innerHTML = rnr4;
}