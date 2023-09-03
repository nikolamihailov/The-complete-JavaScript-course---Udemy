"use strict";

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
///////////////////////////////////////
// Our First AJAX Call: XMLHttpRequest
/*
const getCountryData = function (country) {
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
    request.send();

    request.addEventListener('load', function () {
        const [data] = JSON.parse(this.responseText);
        console.log(data);

        const html = `
  <article class="country">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
                +data.population / 1000000
            ).toFixed(1)}M people</p>
      <p class="country__row"><span>🗣️</span>${Object.values(data.languages)[0]}</p>
      <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name}</p>
    </div>
  </article>
  `;
        countriesContainer.insertAdjacentHTML('beforeend', html);
        countriesContainer.style.opacity = 1;
    });
};

getCountryData('portugal');
getCountryData('usa');
getCountryData('germany');



///////////////////////////////////////
// Welcome to Callback Hell
*/
const renderError = function (msg) {
  countriesContainer.insertAdjacentText("beforeend", msg);
  // countriesContainer.style.opacity = 1;
};

const renderCountry = function (data, className = "") {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
      +data.population / 1000000
    ).toFixed(1)}M people</p>
      <p class="country__row"><span>🗣️</span>${Object.values(data.languages)[0]}</p>
      <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name}</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  //countriesContainer.style.opacity = 1;
};
/*
const getCountryAndNeigbour = function (country) {

  // AJAX call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    // render country 1
    renderCountry(data);

    // get neighbour county 2
    const neighbour = data.borders?.[0];
    // console.log(neighbour);
    if (!neighbour) return;

    // AJAX call county 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener("load", function () {
      const data = JSON.parse(this.responseText)[0];
      renderCountry(data, "neighbour");
    });
  });
};

getCountryAndNeigbour('bulgaria');

setTimeout(() => {
  console.log('1 second passed');
  setTimeout(() => {
    console.log('2 seconds passed');
    setTimeout(() => {
      console.log('3 second passed');
      setTimeout(() => {
        console.log('4 second passed');
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
*/

///////////////////////////////////////
// Consuming Promises
// Chaining Promises
// Handling Rejected Promises
// Throwing Errors Manually

// fetch builds and returns a promise
// promise - a container for a future value(asynchronously delivered value)
/* const request = fetch("https://restcountries.com/v3.1/name/bulgaria");
console.log(request);
 */

const getJSON = function (URL, errorMsg = 'Something went wrong') {
  return fetch(URL).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
    return response.json();
  });
};
/* 
const getCountryData = function (countryName) {
  // country 1
  fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    .then(res => {
      if (!res.ok) throw new Error(`Country not found! ${res.status}`);
      return res.json();
    })
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];
      if (!neighbour) return;
      // country 2
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(res => res.json())
    .then(data => {
      renderCountry(data[0], "neighbour");
    })
    .catch(err => {
      renderError(`Something went wrong!!! ${err.message}. Try again!`);
    })
    .finally(() => countriesContainer.style.opacity = 1);
}; */

const getCountryData = function (countryName) {
  getJSON(`https://restcountries.com/v3.1/name/${countryName}`, "Country not found")
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];
      if (!neighbour) throw new Error("No neighbour found!");
      return getJSON(`https://restcountries.com/v3.1/alpha/${neighbour}`, "Country not found");
    })
    .then(data => renderCountry(data[0], "neighbour"))
    .catch(err => {
      renderError(`Something went wrong!!! ${err.message}. Try again!`);
    })
    .finally(() => countriesContainer.style.opacity = 1);
};


btn.addEventListener("click", () => {
  getCountryData("usa");
});

