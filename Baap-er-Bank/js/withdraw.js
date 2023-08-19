document.getElementById("btn-withdraw").addEventListener("click", function () {
  // step-1: get the withdraw amount
  const withdrawAmountString = document.getElementById("withdraw-amount");

  const withdrawAmountInteger = parseFloat(withdrawAmountString.value);
  // console.log(withdrawAmountInteger);

  //   get total withdraw amount
  const prevTotalWithdrawString = document.getElementById("total-withdraw");

  // set total withdraw amount on withdraw field
  const prevTotalWithdrawInteger = parseFloat(
    prevTotalWithdrawString.innerText
  );

  

  // get total balance and subtract
  const totalBalanceString = document.getElementById("total-balance");
  const totalBalanceInteger = parseFloat(totalBalanceString.innerText);
  // console.log(totalBalanceInteger);

  // alert for insaficiant balance

  if (withdrawAmountInteger > totalBalanceInteger) {
    alert("bank e taka nai");
    withdrawAmountString.value = "";
    return;
  }

// updating total withdraw
const updateTotalWithdraw = prevTotalWithdrawInteger + withdrawAmountInteger;

prevTotalWithdrawString.innerText = updateTotalWithdraw;
console.log(prevTotalWithdrawString.innerText);


// updating total balance
  const updatedTotalBalance = totalBalanceInteger - withdrawAmountInteger;

  totalBalanceString.innerText = updatedTotalBalance;

  // clear withdraw amount field
  withdrawAmountString.value = "";

//   
});
