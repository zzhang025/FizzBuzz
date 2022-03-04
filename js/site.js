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

    // Generate Fizzbuzz
    let numbers = generateNumbers();

    // Display the Numbers
    displayNumbers(numbers);
}

// Generate numbers
function generateNumbers(){
    let numbers = Array.from(Array(100).keys());
    
    return numbers;
}

// Display and Replace
function displayNumbers(numbers){
// Obtain values from the page
    let fizz = document.getElementById("startValue").value;
    let buzz = document.getElementById("endValue").value;

    let templateRows ="";
    for (let index = 1; index < numbers.length; index++) {
        if(index % fizz ==0 && index % buzz==0){
            color = "text-red";
            number = "fizzbuzz";
        } else if(index % fizz ==0 ){
            color = "text-green";
            number = "fizz";
        } else if(index % buzz ==0 ) {
            color = "text-blue";
            number ="buzz";
        } else {
            color = ""
            number = index;
        }
        
        templateRows += `<tr><td class="${color}">${number}</td></tr>`;
    }
    
    document.getElementById("results").innerHTML = templateRows;


}