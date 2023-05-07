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
    e.target.removeAttribute("invalid");
    setDisplayToElement(errorDay, "none");
    setDisplayToElement(errorEmptyDay, "none");
    if (isDayNotEmpty()) {
      const isValid = validValueFromInputDay(e.target.value);
      if (isValid) {
        e.target.removeAttribute("invalid");
        setDisplayToElement(errorDay, "none");
      } else {
        e.target.setAttribute("invalid", !isValid);
        setDisplayToElement(errorDay, "block");
      }
    }
  });

  inputMonth.addEventListener("change", (e) => {
    e.target.removeAttribute("invalid");
    setDisplayToElement(errorMonth, "none");
    setDisplayToElement(errorEmptyMonth, "none");
    if (isMonthNotEmpty()) {
      const isValid = validValueFromInputMonth(e.target.value);
      if (isValid) {
        e.target.removeAttribute("invalid");
        setDisplayToElement(errorMonth, "none");
      } else {
        e.target.setAttribute("invalid", !isValid);
        setDisplayToElement(errorMonth, "block");
      }
    }
  });

  inputYear.addEventListener("change", (e) => {
    e.target.removeAttribute("invalid");
    setDisplayToElement(errorYear, "none");
    setDisplayToElement(errorEmptyYear, "none");
    if (isYearNotEmpty()) {
      const isValid = yearValidation(e.target.value);
      if (isValid) {
        e.target.removeAttribute("invalid");
        setDisplayToElement(errorYear, "none");
      } else {
        e.target.setAttribute("invalid", !isValid);
        setDisplayToElement(errorYear, "block");
      }
    }
  });

  button.addEventListener("click", (e) => {
    inputDay.addEventListener("change", (e) => {
      e.target.removeAttribute("invalid");
      setDisplayToElement(errorDay, "none");
      setDisplayToElement(errorEmptyDay, "none");
      if (isDayNotEmpty()) {
        const isValid = validValueFromInputDay(e.target.value);
        if (isValid) {
          e.target.removeAttribute("invalid");
          setDisplayToElement(errorDay, "none");
        } else {
          e.target.setAttribute("invalid", !isValid);
          setDisplayToElement(errorDay, "block");
        }
      }
    });

    inputMonth.addEventListener("change", (e) => {
      e.target.removeAttribute("invalid");
      setDisplayToElement(errorMonth, "none");
      setDisplayToElement(errorEmptyMonth, "none");
      if (isMonthNotEmpty()) {
        const isValid = validValueFromInputMonth(e.target.value);
        if (isValid) {
          e.target.removeAttribute("invalid");
          setDisplayToElement(errorMonth, "none");
        } else {
          e.target.setAttribute("invalid", !isValid);
          setDisplayToElement(errorMonth, "block");
        }
      }
    });

    inputYear.addEventListener("change", (e) => {
      e.target.removeAttribute("invalid");
      setDisplayToElement(errorYear, "none");
      setDisplayToElement(errorEmptyYear, "none");
      if (isYearNotEmpty()) {
        const isValid = yearValidation(e.target.value);
        if (isValid) {
          e.target.removeAttribute("invalid");
          setDisplayToElement(errorYear, "none");
        } else {
          e.target.setAttribute("invalid", !isValid);
          setDisplayToElement(errorYear, "block");
        }
      }
    });
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
});
