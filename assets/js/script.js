var numbers = ["A", "B", "C", "D", "E"];

function randomBTN() {
    var randNum1 = numbers[Math.floor(Math.random() * numbers.length)];
    document.getElementById("result1").innerHTML = randNum1;

    var randNum2 = numbers[Math.floor(Math.random() * numbers.length)];
    document.getElementById("result2").innerHTML = randNum2;

    var randNum3 = numbers[Math.floor(Math.random() * numbers.length)];
    document.getElementById("result3").innerHTML = randNum3;

    var randNum4 = numbers[Math.floor(Math.random() * numbers.length)];
    document.getElementById("result4").innerHTML = randNum4;


    if (randNum1 = numbers) {
        console.log(true);
    } else {
        console.log(false);
    }

    if (randNum1 = numbers) {
        $("#pick1").click(function() {
            console.log(document.getElementById("pick1").innerHTML)
            console.log(document.getElementById("selected1").innerHTML)
            document.getElementById("selected1").innerHTML = $("#pick1").innerHTML;
            console.log(document.getElementById("pick1").innerHTML)
            console.log(document.getElementById("selected1").innerHTML)
        })

    }


}