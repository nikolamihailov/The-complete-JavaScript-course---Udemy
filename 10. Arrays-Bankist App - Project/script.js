'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
    owner: "Jonas Schmedtmann",
    movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
    interestRate: 1.2, // %
    pin: 1111,
    movementsInfo: [
        { type: 'deposit', date: '2019-11-18T21:31:17.178Z' },
        { type: 'deposit', date: '2019-12-23T07:42:02.383Z' },
        { type: 'payment', date: '2020-01-28T09:15:04.904Z' },
        { type: 'deposit', date: '2020-04-01T10:17:24.185Z' },
        { type: 'withdrawal', date: '2020-05-08T14:11:59.604Z' },
        { type: 'payment', date: '2020-07-26T17:01:17.194Z' },
        { type: 'deposit', date: '2020-07-28T23:36:17.929Z' },
        { type: 'transfer', date: '2020-08-01T10:51:36.790Z' }
    ],
    /*movementsDates: [
        "2019-11-18T21:31:17.178Z",
        "2019-12-23T07:42:02.383Z",
        "2020-01-28T09:15:04.904Z",
        "2020-04-01T10:17:24.185Z",
        "2020-05-08T14:11:59.604Z",
        "2020-07-26T17:01:17.194Z",
        "2020-07-28T23:36:17.929Z",
        "2020-08-01T10:51:36.790Z",
    ],*/
    currency: "EUR",
    locale: "pt-PT", // de-DE
};

const account2 = {
    owner: "Jessica Davis",
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,

    movementsDates: [
        "2019-11-01T13:15:33.035Z",
        "2019-11-30T09:48:16.867Z",
        "2019-12-25T06:04:23.907Z",
        "2020-01-25T14:18:46.235Z",
        "2020-02-05T16:33:06.386Z",
        "2020-04-10T14:43:26.374Z",
        "2020-06-25T18:49:59.371Z",
        "2020-07-26T12:01:20.894Z",
    ],
    currency: "USD",
    locale: "en-US",
};

const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const displayMovements = function (account, sorted = false) {
    containerMovements.innerHTML = "";

    const movs = sorted ? [...account.movements].sort((a, b) => a.amount - b.amount) : account.movements;
    movs.forEach((mov, idx) => {

        const d = new Date(account.movementsInfo[idx].date);
        const day = `${d.getDate()}`.padStart(2, 0);
        const month = `${d.getMonth() + 1}`.padStart(2, 0);
        const year = d.getFullYear();

        const displayDate = `${day}/${month}/${year}`;

        const movementRow = `
         <div class="movements__row">
          <div class="movements__type movements__type--${account.movementsInfo[idx].type}">${account.movementsInfo[idx].type}</div>
          <div class="movements__date">${displayDate}</div>
          <div class="movements__value">${mov.toFixed(2)}€</div>
        </div>
        `;
        containerMovements.insertAdjacentHTML("afterbegin", movementRow);
    });
};
//displayMovements(account1.movements);


const createUsernames = function (accounts) {
    accounts.forEach(function (acc) {
        acc.username = acc.owner
            .toLowerCase()
            .split(' ')
            .map(name => name[0])
            .join('');
    });
};
createUsernames(accounts);

const calcAndDisplayBalance = function (account) {
    const balance = account.movements.reduce((acc, cur) => acc + cur, 0);
    labelBalance.textContent = `${balance.toFixed(2)} €`;
    account.balance = balance;
};

//calcAndDisplayBalance(account1.movements);


const calcDisplaySummary = function (acc) {
    const incomes = acc.movements
        .filter(mov => mov > 0)
        .reduce((acc, mov) => acc + mov, 0);
    labelSumIn.textContent = `${incomes.toFixed(2)}€`;

    const out = acc.movements
        .filter(mov => mov < 0)
        .reduce((acc, mov) => acc + mov, 0);
    labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;

    const interest = acc.movements
        .filter(mov => mov > 0)
        .map(deposit => (deposit * acc.interestRate) / 100)
        .filter((int) => int >= 1)
        .reduce((acc, int) => acc + int, 0);
    labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};
//calcDisplaySummary(account1);

function updateUI(account) {
    displayMovements(account);
    calcAndDisplayBalance(account);
    calcDisplaySummary(account);
}
// login


let currentUser;
//FAKE ALWAYS LOGGED IN
currentUser = account1;
updateUI(currentUser);
containerApp.style.opacity = 1;


btnLogin.addEventListener("click", function (e) {
    e.preventDefault();

    currentUser = accounts.find(acc => acc.username === inputLoginUsername.value.trim()
        && acc.pin === Number(inputLoginPin.value.trim()));

    if (currentUser) {
        labelWelcome.textContent = `Welcome back, ${currentUser.owner.split(" ")[0]}!`;
        inputLoginUsername.value = inputLoginPin.value = "";
        inputLoginPin.blur();
        updateUI(currentUser);

        containerApp.style.opacity = "1";
    } else alert("Invalid username or password!");
});


btnTransfer.addEventListener("click", function (e) {
    e.preventDefault();
    const amount = Number(inputTransferAmount.value.trim());
    const receiver = accounts.find(acc => acc.username === inputTransferTo.value.trim());

    if (receiver && receiver?.username !== currentUser.username) {
        if (amount > 0 && currentUser.balance > amount) {
            currentUser.movements.push(-amount);
            currentUser.movementsDates.push(new Date().toISOString());
            receiver.movements.push(amount);
            receiver.movementsDates.push(new Date().toISOString());
            updateUI(currentUser);
            alert(`Money successfuly transfered to ${receiver.owner}!`);
        } else alert("Negative amount / You dont have enough money!");
    } else alert("No such account!");
    inputTransferTo.value = inputTransferAmount.value = "";
});

btnLoan.addEventListener('click', function (e) {
    e.preventDefault();
    const amount = Math.floor(inputLoanAmount.value);

    if (amount > 0 && currentUser.movements.some(mov => mov >= amount * 0.1)) {
        // Add movement
        currentUser.movements.push(amount);
        currentUser.movementsDates.push(new Date().toISOString());
        // Update UI
        updateUI(currentUser);
    }
    inputLoanAmount.value = '';
});


btnClose.addEventListener("click", function (e) {
    e.preventDefault();

    if (inputCloseUsername.value.trim() === currentUser.username
        && Number(inputClosePin.value.trim()) === currentUser.pin) {
        inputCloseUsername.value = inputClosePin.value = "";
        const idx = accounts.findIndex(acc => acc.username === currentUser.username);
        accounts.splice(idx, 1);
        containerApp.style.opacity = "0";
        alert("Account successfully deleted!");
    } else alert("Wrong credentials! Account cannot be closed!");

});

let sortedMovs = false;
btnSort.addEventListener("click", () => {
    displayMovements(currentUser, !sortedMovs);
    sortedMovs = !sortedMovs;
});
/*
labelBalance.addEventListener('click', function () {
    [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
        // 0, 2, 4, 6
        if (i % 2 === 0) row.style.backgroundColor = 'orangered';
        // 0, 3, 6, 9
        if (i % 3 === 0) row.style.backgroundColor = 'blue';
    });
});*/






