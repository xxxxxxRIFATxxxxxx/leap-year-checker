// Define UI
var year = document.querySelector("#year");
var result = document.querySelector("#result");

// Define Function
function leapYearChecker() {
    if (year.value % 400 === 0) {
        result.innerText = `${year.value} is a leap year`;
    } else if (year.value % 100 === 0) {
        result.innerText = `${year.value} is not a leap year`;
    } else if (year.value % 4 === 0) {
        result.innerText = `${year.value} is a leap year`;
    } else {
        result.innerText = `${year.value} is not a leap year`;
    };
};

// Define Event Listener
year.addEventListener("keyup", leapYearChecker);
