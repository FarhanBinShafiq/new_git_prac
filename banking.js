const depositButton = document.getElementById('deposit-button');
depositButton.addEventListener('click', () => {

    const depositInput = document.getElementById('deposit-input');
    const depositField = depositInput.value;
    const newDepositField = parseFloat(depositField)


    const depositTotal = document.getElementById('deposit-total');
    const previousDeposit = depositTotal.innerText;
    const newDeposit = parseFloat(previousDeposit);
    const newDepositTotal = newDepositField + newDeposit;
    //console.log(newDepositTotal)
    depositTotal.innerText = newDepositTotal

    const balanceTotal = document.getElementById('balance-total');
    const newBalance = balanceTotal.innerText;
    const newBalanceTotal = parseFloat(newBalance);
    const newBalanceAmount = newBalanceTotal + newDepositTotal;
    console.log(newBalanceAmount);
    balanceTotal.innerText = newBalanceAmount;



})



const withdrawButton = document.getElementById('withdraw-button');


withdrawButton.addEventListener('click', () => {

    const withdrawInput = document.getElementById("withdraw-input");
    const withdrawField = withdrawInput.value;
    const newWithdraField = parseFloat(withdrawField);
    console.log(newWithdraField);

    const withdrawTotal = document.getElementById("withdraw-total");
    const withdrawTotalField = withdrawTotal.innerText;
    const newWithdrawTotal = parseFloat(withdrawTotalField);
    const withdrawTotalAmount = newWithdraField + newWithdrawTotal;
    withdrawTotal.innerText = withdrawTotalAmount;

    
    const balanceTotal = document.getElementById('balance-total');
    const newBalance = balanceTotal.innerText;
    const newBalanceTotal = parseFloat(newBalance);
    const newBalanceinAccount=newBalanceTotal-withdrawTotalAmount;
    console.log(newBalanceinAccount);
    balanceTotal.innerText=newBalanceinAccount;


})