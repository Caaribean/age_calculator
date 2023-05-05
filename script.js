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

  // current date
  const currentDate = new Date();

  inputDay.addEventListener("change", (e) => {
    const isValid = validValueFromInputDay(e.target.value);
    if (isValid) {
      e.target.removeAttribute("invalid");
      inputNotVisibility();
    } else {
      e.target.setAttribute("invalid", !isValid);
      inputVisibilityDay();
    }
  });

  inputMonth.addEventListener("change", (e) => {
    const isValid = validValueFromInputMonth(e.target.value);
    if (isValid) {
      e.target.removeAttribute("invalid");
      inputNotVisibility();
    } else {
      e.target.setAttribute("invalid", !isValid);
      inputVisibilityMonth();
    }
  });

  inputYear.addEventListener("change", (e) => {
    const isValid = yearValidation(e.target.value);
    if (isValid) {
      e.target.removeAttribute("invalid");
      inputNotVisibility();
    } else {
      e.target.setAttribute("invalid", !isValid);
      inputVisibilityYear();
    }
  });

  button.addEventListener("click", (e) => {
    checkInputEmpty();
  });

  function validValueFromInputDay(value) {
    return value > 0 && value <= 31;
  }

  function validValueFromInputMonth(value) {
    return value > 0 && value <= 12;
  }

  function yearValidation(value) {
    var currentYear = new Date().getFullYear();
    if ((value.length = !4)) {
      return false;
    }
    if (value < 1900 || value > currentYear) {
      return false;
    } else {
      return true;
    }
  }

  function checkInputEmpty() {
    if (inputDay.value === "") {
      inputVisibilityDay();
    }
    if (inputMonth.value === "") {
      inputVisibilityMonth();
    }
    if (inputYear.value === "") {
      inputVisibilityYear();
    }
    else {
      inputNotVisibility();  
    }
  }

  function inputVisibilityDay() {
    errorDay.style.display = "block";
  }

  function inputVisibilityMonth() {
    errorMonth.style.display = "block";
  }

  function inputVisibilityYear() {
    errorYear.style.display = "block";
  }

  function inputNotVisibility() {
    errorDay.style.display = "none";
    errorMonth.style.display = "none";
    errorYear.style.display = "none";
  }
});
