import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchCountries } from './fetchCountry';

let debounce = require('lodash.debounce');

const DEBOUNCE_DELAY = 300;
const searchBox = document.querySelector('#search-box');
console.log(searchedCountry);
const countryList = document.querySelector('.country-list');
const countryData = document.querySelector('.country-info');
searchBox.addEventListener('input', debounce(searchedCountry, DEBOUNCE_DELAY));

function searchedCountry() {
 const Country = event.target.value;

    clearPreviousInfo();

    if (Country === '') {
        return;
    };
};
 