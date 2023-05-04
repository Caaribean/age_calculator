window.addEventListener("load", function () {
  const inputDay = document.getElementById("input-day");
  const inputMonth = document.getElementById("input-month");
  const inputYear = document.getElementById("input-year");
  const resultYears = document.getElementById("result-years");
  const resultMonths = document.getElementById("result-months");
  const resultDays = document.getElementById("result-days");
  const errorDay = document.getElementById('error-day');
  const errorMonth = document.getElementById('error-month');
  const errorYear = document.getElementById('error-year');

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

  function validValueFromInputDay(value) {
    return value > 0 && value <= 31;
  }

  function validValueFromInputMonth(value) {
    return value > 0 && value <= 12;
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
