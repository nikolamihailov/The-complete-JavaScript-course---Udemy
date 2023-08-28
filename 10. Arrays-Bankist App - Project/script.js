'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
    owner: "Nikola Mihailov",
    // movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
    interestRate: 1.2, // %
    pin: 1111,
    movements: [
        { amount: 200, type: 'deposit', date: '2023-11-18T21:31:17.178Z' },
        { amount: 455.23, type: 'deposit', date: '2023-12-23T07:42:02.383Z' },
        { amount: -306.5, type: 'payment', date: '2023-01-28T09:15:04.904Z' },
        { amount: 25000, type: 'transfer', date: '2023-04-01T10:17:24.185Z' },
        { amount: -642.21, type: 'withdrawal', date: '2023-05-08T14:11:59.604Z' },
        { amount: -133.9, type: 'withdrawal', date: '2023-07-26T17:01:17.194Z' },
        { amount: 79.97, type: 'deposit', date: '2023-07-28T23:36:17.929Z' },
        { amount: 1300, type: 'deposit', date: '2023-08-01T10:51:36.790Z' }
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
    currency: "BGN",
    locale: "bg-BG", // de-DE
};

const account2 = {
    owner: "Jessica Davis",
    interestRate: 1.5,
    pin: 2222,
    movements: [
        { amount: 5000, type: 'deposit', date: '2023-11-01T13:15:33.035Z' },
        { amount: 3400, type: 'deposit', date: '2023-11-30T09:48:16.867Z' },
        { amount: -150, type: 'payment', date: '2023-12-25T06:04:23.907Z' },
        { amount: -790, type: 'withdrawal', date: '2023-01-25T14:18:46.235Z' },
        { amount: 3210, type: 'deposit', date: '2023-02-05T16:33:06.386Z' },
        { amount: -1000, type: 'withdrawal', date: '2023-04-10T14:43:26.374Z' },
        { amount: 8500, type: 'transfer', date: '2023-06-25T18:49:59.371Z' },
        { amount: -30, type: 'withdrawal', date: '2023-07-26T12:01:20.894Z' },
    ],
    currency: "USD",
    locale: "en-US",
};

const account3 = {
    owner: "Max Smith",
    interestRate: 1.5,
    pin: 3333,
    movements: [
        { amount: 6000, type: 'deposit', date: '2023-06-26T15:08:44.894Z' },
        { amount: -450, type: 'payment', date: '2023-06-26T12:30:30.894Z' },
        { amount: -300, type: 'withdrawal', date: '2023-07-05T19:09:20.894Z' },
        { amount: 2400, type: 'deposit', date: '2023-07-10T12:08:20.894Z' },
        { amount: -900, type: 'withdrawal', date: '2023-07-26T12:01:20.894Z' },
        { amount: 4500, type: 'transfer', date: '2023-08-20T12:11:31.894Z' },
        { amount: -150, type: 'withdrawal', date: '2023-08-26T02:55:12.894Z' },
        { amount: 1800, type: 'deposit', date: '2023-08-27T12:01:20.894Z' },
    ],
    currency: "EUR",
    locale: "de-DE",
};
/* const account3 = {
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
 */
const accounts = [account1, account2, account3];

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

const converter = {
    exchangeRates: {
        "EUR": 1,
        "USD": 1.08,   // 1 EUR = 1.18 USD (example rate)
        "GBP": 0.86,// ,1 EUR = 0.85 GBP (example rate)
        "BGN": 1.95
    },

    convert: function (amount, fromCurrency, toCurrency) {
        let convertedAmount;
        if (fromCurrency === "eur") {
            const toRate = this.exchangeRates[toCurrency];
            convertedAmount = amount * toRate;
        } else if (toCurrency === "eur") {
            const fromRate = this.exchangeRates[fromCurrency];
            convertedAmount = amount / fromRate;
        } else {
            const fromRate = this.exchangeRates[fromCurrency];
            const toRate = this.exchangeRates[toCurrency];
            convertedAmount = (amount / fromRate) * toRate;
        }
        return convertedAmount;
    }
};


const formatMovementDate = function (date, locale) {
    const calcDaysPassed = (date1, date2) =>
        Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

    const daysPassed = calcDaysPassed(new Date(), date);

    if (daysPassed === 0) return "Today";
    if (daysPassed === 1) return "Yesterday";
    if (daysPassed <= 7) return `${daysPassed} days ago`;

    return new Intl.DateTimeFormat(locale).format(date);
};

const formatCurrency = function (amount, locale, currency) {
    return new Intl.NumberFormat(locale, {
        style: "currency",
        currency: currency
    }).format(amount);
};

const displayMovements = function (account, sorted = false) {
    containerMovements.innerHTML = "";

    const movs = sorted ? [...account.movements].sort((a, b) => a.amount - b.amount) : account.movements;
    movs.forEach((mov) => {

        const displayFormattedDate = formatMovementDate(new Date(mov.date), currentUser.locale);
        const displayFormatedMov = formatCurrency(mov.amount, account.locale, account.currency);

        const movementRow = `
         <div class="movements__row">
          <div class="movements__type movements__type--${mov.type}">${mov.type}</div>
          <div class="movements__date">${displayFormattedDate}</div>
          <div class="movements__value">${displayFormatedMov}</div>
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
    const balance = account.movements.reduce((acc, cur) => acc + cur.amount, 0);
    labelBalance.textContent = formatCurrency(balance, account.locale, account.currency);
    account.balance = balance;
};

//calcAndDisplayBalance(account1.movements);


const calcDisplaySummary = function (acc) {
    const incomes = acc.movements
        .filter(mov => mov.amount > 0)
        .reduce((acc, mov) => acc + mov.amount, 0);
    labelSumIn.textContent = formatCurrency(incomes, acc.locale, acc.currency);

    const out = acc.movements
        .filter(mov => mov.amount < 0)
        .reduce((acc, mov) => acc + mov.amount, 0);
    labelSumOut.textContent = formatCurrency(Math.abs(out), acc.locale, acc.currency);;

    const interest = acc.movements
        .filter(mov => mov.amount > 0)
        .map(deposit => (deposit.amount * acc.interestRate) / 100)
        .filter((int) => int >= 1)
        .reduce((acc, int) => acc + int, 0);
    labelSumInterest.textContent = formatCurrency(interest, acc.locale, acc.currency);
};
//calcDisplaySummary(account1);

function updateUI(account) {
    displayMovements(account);
    calcAndDisplayBalance(account);
    calcDisplaySummary(account);
}
// login

const startLogoutTimer = function (minutes) {
    let time = minutes * 60;
    const tick = function () {
        const minutes = `${Math.floor(time / 60)}`.padStart(2, 0);
        const seconds = `${Math.floor(time % 60)}`.padStart(2, 0);
        labelTimer.textContent = `${minutes}:${seconds}`;
        if (time === 0) {
            clearInterval(timer);
            containerApp.style.opacity = "0";
            labelWelcome.textContent = `Login to get started`;
            inputLoginUsername.value = inputLoginPin.value = "";
            alert("For security reasons, you have been logged out after 10 mintes of login!");
        }
        time--;
    };
    tick();
    const timer = setInterval(tick, 1000);
    return timer;
};

let currentUser, timer;
//FAKE ALWAYS LOGGED IN
// shift +alt + A to comment on multiple lines and the same for undo
/* currentUser = account1;
updateUI(currentUser);
containerApp.style.opacity = 1; */


btnLogin.addEventListener("click", function (e) {
    e.preventDefault();

    currentUser = accounts.find(acc => acc.username === inputLoginUsername.value.trim()
        && acc.pin === Number(inputLoginPin.value.trim()));

    if (currentUser) {
        labelWelcome.textContent = `Welcome back, ${currentUser.owner.split(" ")[0]}!`;
        inputLoginUsername.value = inputLoginPin.value = "";
        // Create current date and time
        const now = new Date();
        const options = {
            hour: "numeric",
            minute: "numeric",
            day: "numeric",
            month: "numeric",
            year: "numeric",
            // weekday: 'long23
        };
        // const locale = navigator.language;
        // console.log(locale);

        labelDate.textContent = new Intl.DateTimeFormat(currentUser.locale, options).format(now);
        inputLoginPin.blur();
        updateUI(currentUser);
        if (timer) clearInterval(timer);
        timer = startLogoutTimer(10);
        containerApp.style.opacity = "1";
    } else alert("Invalid username or password!");
});


btnTransfer.addEventListener("click", function (e) {
    e.preventDefault();
    const amount = Number(inputTransferAmount.value.trim());
    const receiver = accounts.find(acc => acc.username === inputTransferTo.value.trim());

    if (receiver && receiver?.username !== currentUser.username) {
        if (amount > 0 && currentUser.balance > amount) {
            currentUser.movements.push({ amount: -amount, type: "transfer", date: new Date().toISOString() });
            receiver.movements.push({
                amount: converter.convert(amount, currentUser.currency, receiver.currency),
                type: "transfer",
                date: new Date().toISOString()
            });
            setTimeout(() => { updateUI(currentUser); }, 3000);
            alert(`Money successfuly transfered to ${receiver.owner} !`);
            clearInterval(timer);
            timer = startLogoutTimer(10);
        } else alert("Negative amount / You dont have enough money!");
    } else alert("No such account!");
    inputTransferTo.value = inputTransferAmount.value = "";
});

btnLoan.addEventListener('click', function (e) {
    e.preventDefault();
    const amount = Math.floor(inputLoanAmount.value);

    if ((amount > 0 && amount <= 100000) && currentUser.movements.some(mov => mov.amount >= amount * 0.1)) {
        // Add movement
        currentUser.movements.push({ amount, type: "loan", date: new Date().toISOString() });
        // Update UI
        setTimeout(() => { updateUI(currentUser); }, 3000);
        alert("Successfully received loan!");
        clearInterval(timer);
        timer = startLogoutTimer(10);
    } else alert("Cannot receive loan with this amount!");
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

