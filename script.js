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

  // current date
  const currentDate = new Date();

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
    //tutaj dodać nowe funkcje validacyjne
    //jeśli wa;lidacja przebiegnie poprawnie
    //to oblicz mi wiek
    validationForDay();
    validationForMonth();
    validationForYear();

    if (validationForDay() && validationForMonth() && validationForYear()) {
      calc();
    }
  });

  //to do
  // TO SAMO DLA MIESIECY DLA LAT - PAMIĘTAJ O ZAMIANIE E.TARGET NA ODPOWIEDNIĄ ZMIENNĄ KTÓRA JEST U GÓRY
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

  function inputNotVisibility() {
    setDisplayToElement(errorDay, "none");
    setDisplayToElement(errorMonth, "none");
    setDisplayToElement(errorYear, "none");
  }

  function inputNotVisibilityEmpty() {
    setDisplayToElement(errorEmptyDay, "none");
    setDisplayToElement(errorEmptyMonth, "none");
    setDisplayToElement(errorEmptyYear, "none");
  }

  function calc() {
    console.log("OBLICZANIE");
    //LOGIKA ZWIĄZANA Z OBLICZANIEM//

    //na końcu jak dobrze obliczysz to podmieniasz wartości w spanach

    var month_dff
  }
});
