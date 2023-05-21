


function processDate() {

    if (document.getElementById("day").value !== "") {
        document.getElementById("dayLbl").classList.remove("empty-field");
    }

    if (document.getElementById("month").value !== "") {
        document.getElementById("monthLbl").classList.remove("empty-field");
    }

    if (document.getElementById("year").value !== "") {
        document.getElementById("yearLbl").classList.remove("empty-field");
    }

}

document.querySelector("#my-btn").addEventListener('click', (event) => {
    var inputDay = document.getElementById("day").value
    var inputMonth = document.getElementById("month").value;
    var inputYear = document.getElementById("year").value;

    let inputMonthForDateObj = inputMonth - 1;

    var date = new Date(inputYear, inputMonthForDateObj, inputDay);
    date.setUTCFullYear(inputYear);
    var currentDate = new Date();
    
    var difference = currentDate - date;

    if (inputDay == "") {
        isDayFilled();
    } else {
        var days = Math.floor((difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    }

    if (inputMonth == "") {
        isMonthFilled();
    } else {
        var months = Math.floor((difference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    }

    if (inputYear == "") {
        isYearFilled();
    } else {
        var years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
    }

    if (days != undefined && months != undefined && years != undefined) {

        if (inputDay == 1 && inputMonth == 1 && inputYear < new Date().getFullYear) {
            updateProcessedDate(days, months, years);
            return
        }

        let inputString = inputMonth + "/" + inputDay + "/" + inputYear;

        if (date.toLocaleDateString() == inputString) {
            document.getElementById("must-be-a-valid-date").classList.remove("is-not-valid");
            updateProcessedDate(days, months, years);
        } else {
            document.getElementById("must-be-a-valid-date").classList.add("is-not-valid");
        }

    }
  });

function updateProcessedDate(days, months, years) {

    let dayAndMonthInterval = 100;
    let yearInterval = 30;
    let fromThisDay = 0;
    let fromThisMonth = 0;
    let fromThisYear = 0;
    let toThisDay = days;
    let toThisMonth = months;
    let toThisYear = years;

    if (years < 1900) {
        //yearInterval = 1;
    }

    let daysCounter = setInterval(function(){

        if (fromThisDay < toThisDay) {
            fromThisDay += 1;
            document.getElementById("result-day-num").innerHTML = fromThisDay
        }
    }, dayAndMonthInterval)

    let monthsCounter = setInterval(function() {

        if (fromThisMonth < toThisMonth) {
            fromThisMonth += 1;
            document.getElementById("result-month-num").innerHTML = fromThisMonth;
        }
    }, dayAndMonthInterval)

    let yearsCounter = setInterval(function() {

        if (fromThisYear < toThisYear - 100) {
            fromThisYear += 50;
            document.getElementById("result-year-num").innerHTML = fromThisYear;
        } else if (fromThisYear < toThisYear - 20) {
            fromThisYear += 3;
            
            document.getElementById("result-year-num").innerHTML = fromThisYear;
        } else if (fromThisYear < toThisYear) {
            fromThisYear += 1;

            document.getElementById("result-year-num").innerHTML = fromThisYear;
        }
    }, yearInterval)

}

function checkDay(day) {
    if (day < 1 || day > 31) {
        return false;
    } else {
        return true;
    }
}

function checkMonth(month) {
    if (month < 1 || month > 12) {
        return false;
    } else {
        return true;
    }
}

function checkYear(year) {
    if (year > new Date().getFullYear()) {
        return false;
    } else {
        return true;
    }
}

function isDayFilled() {
    if (document.getElementById("day").value === "") {
        document.getElementById("invalid-day").classList.remove("is-not-valid");
        document.getElementById("dayLbl").classList.add("empty-field");
        document.getElementById("empty-day-not-allowed").classList.add("is-not-valid");
        document.getElementById("day").classList.add("input-invalid");
    }
    
    if (document.getElementById("day").value !== "" && !checkDay(document.getElementById("day").value)) {
        document.getElementById("invalid-day").classList.add("is-not-valid");
        document.getElementById("dayLbl").classList.add("empty-field");
        document.getElementById("empty-day-not-allowed").classList.remove("is-not-valid");
        document.getElementById("day").classList.add("input-invalid");
    }
    
    if (checkDay(document.getElementById("day").value)) {
        document.getElementById("empty-day-not-allowed").classList.remove("is-not-valid");
        document.getElementById("dayLbl").classList.remove("empty-field");
        document.getElementById("invalid-day").classList.remove("is-not-valid");
        document.getElementById("day").classList.remove("input-invalid");
    }
}

function isMonthFilled() {
    if (checkDay(document.getElementById("month").value)) {
        document.getElementById("empty-month-not-allowed").classList.remove("is-not-valid");
        document.getElementById("monthLbl").classList.remove("empty-field");
        document.getElementById("invalid-month").classList.remove("is-not-valid");
        document.getElementById("month").classList.remove("input-invalid");
    }
    
    if (document.getElementById("month").value === "") {
        document.getElementById("invalid-month").classList.remove("is-not-valid");
        document.getElementById("monthLbl").classList.add("empty-field");
        document.getElementById("empty-month-not-allowed").classList.add("is-not-valid");
        document.getElementById("month").classList.add("input-invalid");
    }
    
    if (document.getElementById("month").value !== "" && !checkMonth(document.getElementById("month").value)) {
        document.getElementById("invalid-month").classList.add("is-not-valid");
        document.getElementById("monthLbl").classList.add("empty-field");
        document.getElementById("empty-month-not-allowed").classList.remove("is-not-valid");
        document.getElementById("month").classList.add("input-invalid");
    }
}

function isYearFilled() {
    if (checkYear(document.getElementById("year").value)) {
        document.getElementById("empty-year-not-allowed").classList.remove("is-not-valid");
        document.getElementById("yearLbl").classList.remove("empty-field");
        document.getElementById("invalid-year").classList.remove("is-not-valid");
        document.getElementById("year").classList.remove("input-invalid");
    }
    
    if (document.getElementById("year").value === "") {
        document.getElementById("invalid-year").classList.remove("is-not-valid");
        document.getElementById("yearLbl").classList.add("empty-field");
        document.getElementById("empty-year-not-allowed").classList.add("is-not-valid");
        document.getElementById("year").classList.add("input-invalid");
    }
    
    if (document.getElementById("year").value !== "" && !checkYear(document.getElementById("year").value)) {
        document.getElementById("invalid-year").classList.add("is-not-valid");
        document.getElementById("yearLbl").classList.add("empty-field");
        document.getElementById("empty-year-not-allowed").classList.remove("is-not-valid");
    }
}


