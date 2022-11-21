import { Notify } from 'notiflix/build/notiflix-notify-aio';

const countryList = document.querySelector('.country-list');
const countryData = document.querySelector('.country-info');

export function fetchCountries(name) {
    fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        })
        .then(data => {
            let countries = data;
            for (let { name: { official: countryName }, capital, population, flags: { svg: flag }, languages } of countries) {
                if (countries.lenght > 1 && countries.lenght < 11) {
                    countryList.insertAdjacentHTML('beforeend', `
                    <li>
                    <img src="${flag}", width="70"></img>
                    <span class="country-info__entry">${countryName}</span>
                    </li>`);
                } else if (countries.length === 1) {
                    countryData.insertAdjacentHTML('beforeend', `
                        <div class="country-info">
                        <img src="${flag}", width="70"></img>
                        <span class="country-info">${countryName}</span>
                        </div>
                        <p><span class="country-info">Capital:</span> ${capital}</p>
                        <p><span class="country-info">Population:</span> ${population}</p>
                        <p><span class="country-info">Languages:</span> ${Object.values(languages)}</p>
                        `)
           
                }
                else {
                    Notify.info("Too many matches found. Please enter a more specific name.");
                    return;
                }
            }
        })
           
        .catch ((error) => {
            
                Notify.failure('Oops, there is no country with that name');
            
            })
};


