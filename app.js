fetch('https://restcountries.eu/rest/v2/all')
.then(res=>res.json())
.then(data=>{
    displayCountries(data)
})

const displayCountries =(countries)=>{
    const countriesDiv=document.getElementById('countries');

    countries.forEach(country => {
 
      const countryDiv = document.createElement('div');
      countryDiv.className=('country')

            const countryInfo=`
           <h3 class='country-name'>${country.name}</h3>
           <p>${country.capital}</p>
           <button onclick="displayCountryDetail('${country.name}')">Details</button>

         `;
                    countryDiv.innerHTML=countryInfo;

          countriesDiv.appendChild(countryDiv);
    });
    //  for (let i = 0; i < countries.length; i++) {
    //      const country = countries[i];
    //     const countryDiv = document.createElement('div');
    // //     const countryName = document.createElement('h3');
    // //     countryName.innerText=country.name;
    // //     const countryCapital = document.createElement('p');
    // //     countryCapital.innerText=country.capital;
      

    // //       countryDiv.appendChild(countryName);
    // //       countryDiv.appendChild(countryCapital);

    // countryDiv.className=('country')

    //      const countryInfo=`
    //        <h3 class='country-name'>${country.name}</h3>
    //        <p>${country.capital}</p>

    //      `;
    //        countryDiv.innerHTML=countryInfo;

    //       countriesDiv.appendChild(countryDiv);
        
        
    // }
}

const displayCountryDetail = (name)=>{
  const url=`https://restcountries.eu/rest/v2/name/${name}`
  fetch(url)
  .then(response=>response.json())
  .then(data=> renderCountryDetail(data[0]))

}

const renderCountryDetail = (country)=>{
 
  const countryDiv=document.getElementById('countryInfo');
  countryDiv.innerHTML=`
  <h1>${country.name}</h1>
  <p>Population: ${country.population}</P>
  <p>Area:${country.area}</P>
  <img src='${country.flag}'>
  `
}