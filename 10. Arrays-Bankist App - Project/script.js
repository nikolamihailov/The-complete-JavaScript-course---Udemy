'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
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

    const movs = sorted ? [...account.movements].sort((a, b) => a - b) : account.movements;
    movs.forEach((mov, idx) => {
        const type = mov > 0 ? "deposit" : "withdrawal";
        const movementRow = `
         <div class="movements__row">
          <div class="movements__type movements__type--${type}">${idx + 1} ${type}</div>
          <div class="movements__value">${mov}€</div>
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
    labelBalance.textContent = `${balance} €`;
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
            receiver.movements.push(amount);
            updateUI(currentUser);
            alert(`Money successfuly transfered to ${receiver.owner}!`);
        } else alert("Negative amount / You dont have enough money!");
    } else alert("No such account!");
    inputTransferTo.value = inputTransferAmount.value = "";
});

btnLoan.addEventListener('click', function (e) {
    e.preventDefault();
    const amount = Number(inputLoanAmount.value);

    if (amount > 0 && currentUser.movements.some(mov => mov >= amount * 0.1)) {
        // Add movement
        currentUser.movements.push(amount);

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
    sortedMovs = true;
});






