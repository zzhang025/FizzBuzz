// Javascript

// Get input Values
// Controller Function

function getValues(){
    // Obtain values from the page
    let fizz = document.getElementById("startValue").value;
    let buzz = document.getElementById("endValue").value;

    // parse the values into integer
    fizz = parseInt(fizz);
    buzz = parseInt(buzz);

    //Validate Inputs
    if (Number.isInteger(fizz) && Number.isInteger(buzz)) {
        let numbers= buzzNumbers(fizz,buzz)
    } else {
        alert("Inputs must be integers")
    }

    // Generate Fizzbuzz
    let numbers = buzzNumbers(fizz,buzz);

    // Display the Numbers
    displayNumbers(numbers);
}

// Generate numbers
function buzzNumbers(fizz,buzz){
    let numbers = Array.from(Array(100).keys());
    return numbers;
}

// Display and Replace
function displayNumbers(numbers){
    let templateRows ="";
    let className="even";
    for (let index = 0; index < numbers.length; index++) {
        let number = numbers[index];
        if(number % 2 == 0){
            className="even";
        } else{
            className="odd";
        }

        templateRows += `<tr><td class="${className}">${number}</td></tr>`;
    }

    document.getElementById("results").innerHTML = templateRows


}