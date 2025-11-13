document.getElementById("searchBtn").addEventListener("click", async () => {
  const searchValue = document.querySelector('input[type="search"]').value;
  try {
    const weatherRes = await fetch(
      ` http://api.weatherapi.com/v1/current.json?key=35c6b141e18644adbf490250251211&q=${searchValue}`
    );
    const weatherData = await weatherRes.json();

    const res = await fetch(
      `https://restcountries.com/v3.1/name/${weatherData.location.country}`
    );
    const data = await res.json();
    const country = data[0];

    document.querySelector(
      "#locationName"
    ).textContent = `${weatherData.location.name}, ${weatherData.location.country}`;

    document.querySelector("#countryName").textContent = country.name.common;
    document.querySelector("#countryOfficialName").textContent =
      country.name.official;

    document.querySelector(
      "#countryFlag"
    ).innerHTML = `<img src="${country.flags.png}" class="w-[150px]">`;

    document.querySelector("#capital").textContent = country.capital;
    document.querySelector("#population").textContent = country.population;
    document.querySelector("#area").textContent = country.area;
    document.querySelector("#region").textContent = country.region;

    document.querySelector("#subregion").textContent = country.subregion;
    document.querySelector("#coordinates").textContent = country.coordinates;
    document.querySelector("#continents").textContent = country.continents;
    document.querySelector("#landlocked").textContent = country.landlocked;
    document.querySelector("#timezones").textContent = country.timezones;

    if (country.gini == undefined) {
      document.querySelector("#gini").textContent = "-";
    } else {
      document.querySelector("#gini").textContent =
        country.gini[Object.keys(country.gini)[0]] +
        Object.keys(country.gini)[0];
    }

    let languagesBody = "";
    for (const lang in country.languages) {
      languagesBody += `
          <div class="bg-white p-3 rounded border border-gray-200">
            <span class="text-gray-900">${country.languages[lang]}</span>
          </div>
          `;
    }
    document.querySelector("#languages").innerHTML = languagesBody;

    let currenciesBody = "";
    for (const currency in country.currencies) {
      currenciesBody += `
          <div class="bg-white p-3 rounded border border-gray-200">
            <p class="font-semibold text-gray-900">
              ${country.currencies[currency].name}
            </p>
            <p class="text-lg text-gray-700 mt-1">${country.currencies[currency].symbol}</p>
          </div>
      `;
    }
    document.querySelector("#currencies").innerHTML = currenciesBody;

    document.querySelector("#cca2").textContent = country.cca2;
    document.querySelector("#cca3").textContent = country.cca3;
    document.querySelector("#ccn3").textContent = country.ccn3;
    document.querySelector("#cioc").textContent = country.cioc;
    document.querySelector("#fifa").textContent = country.fifa;
    document.querySelector("#callingCode").textContent =
      country.idd.root + country.idd.suffixes[0];

    // let nativeNamesDiv = "";
    // Object.entries(country.name.nativeName).forEach(([code, names]) => {
    //   const langName = country.languages[code] || code;
    //   nativeNamesDiv.innerHTML += `
    //     <div class="bg-gray-50 p-4 rounded-lg border border-gray-200">
    //       <p class="text-sm text-gray-600 mb-2">${langName}</p>
    //       <p class="text-xl font-semibold text-gray-900 mb-1">
    //         ${names.common}
    //       </p>
    //       <p class="text-sm text-gray-700">
    //         ${names.official}
    //       </p>
    //     </div>
    //   `;
    // });

    // document.querySelector("#nativeNamesDiv").innerHTML = nativeNamesDiv;

    // document.querySelector("#id").innerHTML = country;
  } catch (error) {
    console.log(error);
  }
});

// 35c6b141e18644adbf490250251211
