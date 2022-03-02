let calcBtn = document.querySelector('.calc');

calcBtn.addEventListener('click', calculateBill);

let percentBtns = document.querySelectorAll('.percent');
percentBtns.forEach((buttons) => buttons.addEventListener('click', btnPercent));

let customPercentValue = document.querySelector('.percent-amount');
customPercentValue.addEventListener('click', lockBtns);

let tipMoney = document.querySelector('.tip-money');
let personMoney = document.querySelector('.person-money');

let resetBtn = document.querySelector('.reset-btn');
resetBtn.addEventListener('click', resetGame);

let percent = 0;
let tipAmount = 0;
let totalPerson = 0;
let count = 0;
let divide = 0;

function btnPercent() {
  percent = this.innerHTML.slice(0, -1);
  percent = Number(percent);
  this.style.backgroundColor = 'hsl(172, 67%, 45%)';
  this.style.color = 'white';

  count++;
  if (count > 0) {
    percentBtns.forEach((buttons) =>
      buttons.removeEventListener('click', btnPercent)
    );
    document.querySelector('.percent-amount').style.pointerEvents = 'none';
  }
}

function lockBtns() {
  percentBtns.forEach((buttons) =>
    buttons.removeEventListener('click', btnPercent)
  );
}

function calculateBill() {
  let billNum = document.querySelector('.bill-amount').value;
  billNum = Number(billNum);

  let customPercent = document.querySelector('.percent-amount').value;
  customPercent = Number(customPercent);

  let peopleNum = document.querySelector('.people-amount').value;
  peopleNum = Number(peopleNum);

  divide = billNum / peopleNum;
  divide = Number(divide);

  if (percent !== 0) {
    tipAmount = divide * (percent / 100);
  } else {
    tipAmount = divide * (Number(customPercentValue.value) / 100);
  }
  totalPerson = tipAmount + divide;

  let noZero = document.querySelector('.no-zero');
  if (peopleNum === 0 || undefined) {
    noZero.style.display = 'flex';
  } else {
    noZero.style.display = 'none';
  }

  tipMoney.innerHTML = `$${tipAmount.toFixed(2)}`;
  personMoney.innerHTML = `$${totalPerson.toFixed(2)}`;
}

function resetGame() {
  tipMoney.innerHTML = `$0.00`;
  personMoney.innerHTML = `$0.00`;

  document.querySelector('.bill-amount').value = '';
  document.querySelector('.percent-amount').value = '';
  document.querySelector('.people-amount').value = '';

  percentBtns.forEach((buttons) => {
    buttons.addEventListener('click', btnPercent);
    buttons.style.color = 'white';
    buttons.style.backgroundColor = 'hsl(183, 100%, 15%)';
  });

  document.querySelector('.percent-amount').style.pointerEvents = 'auto';
}
