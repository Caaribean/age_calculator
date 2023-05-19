window.addEventListener("load", function () {
  // elements
  const inputDay = document.getElementById("input-day");
  const inputMonth = document.getElementById("input-month");
  const inputYear = document.getElementById("input-year");
  const resultYears = document.getElementById("result-years");
  const resultMonths = document.getElementById("result-months");
  const resultDays = document.getElementById("result-days");
  const button = document.getElementById("button");

  // error messages
  const errorDay = document.getElementById("error-day");
  const errorMonth = document.getElementById("error-month");
  const errorYear = document.getElementById("error-year");
  const errorEmptyDay = document.getElementById("empty-day");
  const errorEmptyMonth = document.getElementById("empty-month");
  const errorEmptyYear = document.getElementById("empty-year");

  inputDay.addEventListener("change", (e) => {
    validationForDay();
  });

  inputMonth.addEventListener("change", (e) => {
    validationForMonth();
  });

  inputYear.addEventListener("change", (e) => {
    validationForYear();
  });

  button.addEventListener("click", (e) => {
    validationForDay();
    validationForMonth();
    validationForYear();

    if (validationForDay() && validationForMonth() && validationForYear()) {
      calc();
    } else {
      console.log("ERROR");
    }
  });

  function validationForDay() {
    inputDay.removeAttribute("invalid");
    setDisplayToElement(errorDay, "none");
    setDisplayToElement(errorEmptyDay, "none");
    if (isDayNotEmpty()) {
      const isValid = validValueFromInputDay(inputDay.value);
      if (isValid) {
        inputDay.removeAttribute("invalid");
        setDisplayToElement(errorDay, "none");
        return true;
      } else {
        inputDay.setAttribute("invalid", !isValid);
        setDisplayToElement(errorDay, "block");
        return false;
      }
    } else {
      return false;
    }
  }

  function validationForMonth() {
    inputMonth.removeAttribute("invalid");
    setDisplayToElement(errorMonth, "none");
    setDisplayToElement(errorEmptyMonth, "none");
    if (isMonthNotEmpty()) {
      const isValid = validValueFromInputMonth(inputMonth.value);
      if (isValid) {
        inputMonth.removeAttribute("invalid");
        setDisplayToElement(errorMonth, "none");
        return true;
      } else {
        inputMonth.setAttribute("invalid", !isValid);
        setDisplayToElement(errorMonth, "block");
        return false;
      }
    } else {
      return false;
    }
  }

  function validationForYear() {
    inputYear.removeAttribute("invalid");
    setDisplayToElement(errorYear, "none");
    setDisplayToElement(errorEmptyYear, "none");
    if (isYearNotEmpty()) {
      const isValid = yearValidation(inputYear.value);
      if (isValid) {
        inputYear.removeAttribute("invalid");
        setDisplayToElement(errorYear, "none");
        return true;
      } else {
        inputYear.setAttribute("invalid", !isValid);
        setDisplayToElement(errorYear, "block");
        return false;
      }
    } else {
      return false;
    }
  }

  function validValueFromInputDay(value) {
    return value > 0 && value <= 31;
  }

  function validValueFromInputMonth(value) {
    return value > 0 && value <= 12;
  }

  function yearValidation(value) {
    var currentYear = new Date().getFullYear();
    if (value.length != 4) {
      return false;
    }
    if (value < 1900 || value > currentYear) {
      return false;
    } else {
      return true;
    }
  }

  function isDayNotEmpty() {
    if (!inputDay.value) {
      setDisplayToElement(errorEmptyDay, "block");
      return false;
    } else {
      setDisplayToElement(errorEmptyDay, "none");
      return true;
    }
  }
  function isMonthNotEmpty() {
    if (!inputMonth.value) {
      setDisplayToElement(errorEmptyMonth, "block");
      return false;
    } else {
      setDisplayToElement(errorEmptyMonth, "none");
      return true;
    }
  }
  function isYearNotEmpty() {
    if (!inputYear.value) {
      setDisplayToElement(errorEmptyYear, "block");
      return false;
    } else {
      setDisplayToElement(errorEmptyYear, "none");
      return true;
    }
  }

  function setDisplayToElement(elementDOM, typeOfDisplay) {
    elementDOM.style.display = typeOfDisplay;
  }

  function calc() {
    console.log("OBLICZANIE");
    //LOGIKA ZWIĄZANA Z OBLICZANIEM//

    // current date
    var now = new Date();
    var nowYear = now.getFullYear();
    var nowMonth = now.getMonth() + 1;
    var nowDay = now.getDate();

    // get year
    var yearAge = nowYear - inputYear.value;
    console.log(yearAge);
    resultYears.textContent = yearAge;

    // get month
    if (nowMonth >= inputMonth.value) {
      var monthAge = nowMonth - inputMonth.value;
    } else {
      yearAge--;
      var monthAge = 12 + nowMonth - inputMonth.value;
    }
    console.log(monthAge);
    resultMonths.textContent = monthAge;

    // get day
    if (nowDay >= inputDay.value) {
      var dayAge = nowDay - inputDay.value;
    } else {
      monthAge--;
      var dayAge = 31 + nowDay - inputDay.value;
    }
    console.log(dayAge);
    resultDays.textContent = dayAge;

    if (monthAge < 0) {
      monthAge = 11;
      yearAge--;
    }
  }
});
