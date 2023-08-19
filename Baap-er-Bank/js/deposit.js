// step-1: set even handler to the deposit button
document.getElementById("btn-deposit").addEventListener("click", function () {
  // step-2: get diposited amount and value
  const depositAmount = document.getElementById("deposit-amount");
  const depositString = depositAmount.value;

  const depositInteger = parseFloat(depositString);
  // console.log(deposit)

  // step-3: get the total-deposit value
  const totalDeposit = document.getElementById("total-deposit");
  const previousTotalAmountString = totalDeposit.innerText;

  const prevAmountInteger = parseFloat(previousTotalAmountString);

  // step-4: updated added amount
  const updatedTotalDepositAmount = prevAmountInteger + depositInteger;

  // clear the deposit input field
  depositAmount.value = "";

  // step-5: put the value in total deposit field
  totalDeposit.innerText = updatedTotalDepositAmount;
  console.log(totalDeposit);

  // step-6: update the total balance field
 const totalBalanceString =  document.getElementById("total-balance");

 const previousTotalBalanceInteger = parseFloat(totalBalanceString.innerText);
//  console.log(totalBalanceInteger) ;
const updatedTotalBalance = previousTotalBalanceInteger + depositInteger;

// update the total balance 
totalBalanceString.innerText = updatedTotalBalance;
console.log(totalBalanceString.innerText);

})
