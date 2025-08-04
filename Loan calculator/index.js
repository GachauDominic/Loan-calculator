function calculateLoan() {
  loanAmountvalue = document.getElementById("loan-amount").value

  interestValueElem = document.getElementById("rate").value

  monthsElem = document.getElementById("months").value;

  interest = (loanAmountvalue * (interestValueElem * 0.01)) / monthsElem

  monthlyPaymentElem = ( loanAmountvalue / monthsElem + interest).toFixed(2);

  document.querySelector(".payment").innerHTML = `Monthly Payment ${monthlyPaymentElem}`
}
