import './css/styles.css';
import { fetchCountries } from './fetchCountry';

let debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;
const searchBox = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryData = document.querySelector('.country-info');

searchBox.addEventListener('input', debounce(searchedCountry, DEBOUNCE_DELAY));

function searchedCountry(event) {
    countryList.innerHTML = "";
    countryData.innerHTML = "";
    const Country = event.target.value.trim();;

    

    if (Country !== '') {
        fetchCountries(Country);
    }
};



