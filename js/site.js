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

    // check the numbers if they are integer 
    if (Number.isInteger(fizz) && Number.isInteger(buzz)) {
        // call fizzbuzz//
        let fbArray = fizzbuzz(fizz,buzz);
        displayData(fbArray);
    } else {
        alert("You must Enter Integers")
    }
}

// do fizzbuzz
function fizzbuzz(fizz,buzz){

    let returnArray = [];

    //loop from 1 to 100
    for (let i=1; i <= 100; i++){
        // check if fizzbuzz first, then fizz, then buzz
        if(i % fizz ==0 && i % buzz==0){
            returnArray.push('FizzBuzz');
        } else if(i % fizz ==0 ){
            returnArray.push('Fizz');
        } else if(i % buzz ==0 ) {
            returnArray.push('Buzz');
        } else {
            returnArray.push(i);
        }
    }
    return returnArray;
}

// Display Data
function displayData(fbArray){

    //Get the table body element from the page
    let tablebody = document.getElementById("results");

    //Get the templat row
    let templateRow = document.getElementById("fbTemplate");

    //Clear table first
    tablebody.interHTML="";

    for (let index = 0; index < fbArray.length; index += 5) {

        let tableRow = document.importNode(templateRow.content,true);
        
        //Grab the td put into array
        let rowCols = tableRow.querySelectorAll("td");

        rowCols[0].classList.add(fbArray[index]);
        rowCols[0].textContent = fbArray[index]; 

        rowCols[1].classList.add(fbArray[index+1]);
        rowCols[1].textContent = fbArray[index+1];

        rowCols[2].classList.add(fbArray[index+2]);
        rowCols[2].textContent = fbArray[index+2];

        rowCols[3].classList.add(fbArray[index+3]);
        rowCols[3].textContent = fbArray[index+3];

        rowCols[4].classList.add(fbArray[index+4]);
        rowCols[4].textContent = fbArray[index+4];

        
        tablebody.appendChild(tableRow);
    }
    //Add all the rows to the table

}