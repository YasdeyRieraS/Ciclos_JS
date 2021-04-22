ciclo1Btn = document.querySelector("#ciclo1");
ciclo2Btn = document.querySelector("#ciclo2");
ciclo3Btn = document.querySelector("#ciclo3");
ciclo4Btn = document.querySelector("#ciclo4");
ciclo5Btn = document.querySelector("#ciclo5");

function executeForLoop() {
    console.log('Couting from 1 to 50 using For loop:')
    for (let i = 1; i < 50; i++) {
        console.log("Numero: " + i);
    }
}

function executeWhileLoop() {
    let evenNumbers = [];
    let number = 1;
    console.log("Printing even numbers between 1 and 50 using While loop:");
    while (number <= 50) {
        if (number % 2 == 0) {
            evenNumbers.push(number);
        }
        number = number + 1;
    }
    console.log("Even numbers between 1 and 50: " + evenNumbers);
}

function executeDoWhileLoop() {
    let evenNumbers = [];
    number = 0;
    numberOfEvens = 1;
    numberIsEven = true;
    console.log("Printing the first 100 even numbers using Do While loop:");
    do {
        if (number % 2 == 0) {
            numberOfEvens = numberOfEvens + 1;
            evenNumbers.push(number);
        }
        number = number + 1;
    } while (numberOfEvens <= 100);

    console.log("The first 100 even numbers are: " + evenNumbers);
}

function executeForInLoop() {
    console.log("Displaying the numbers in each position of the array using for in loop:");
    let numeros = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];
    for (var i in numeros) {
        console.log("The number in position " + i + " of the array is: " + numeros[i]);
    }
}

function executeForEachLoop() {
    console.log("Displaying the numbers of the array using forEach loop:");
    let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    numeros.forEach(number => console.log(number));
}

ciclo1Btn.addEventListener('click', executeForLoop);
ciclo2Btn.addEventListener('click', executeWhileLoop);
ciclo3Btn.addEventListener('click', executeDoWhileLoop);
ciclo4Btn.addEventListener('click', executeForInLoop);
ciclo5Btn.addEventListener('click', executeForEachLoop);