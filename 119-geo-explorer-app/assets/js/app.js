const searchInput = document.getElementById("searchInput");
const emptyState = document.getElementById("emptyState");
const notFoundState = document.getElementById("notFoundState");
const loader = document.getElementById("loader");
const informationContainer = document.getElementById("informationContainer");

document.querySelector('input[type="search"]').addEventListener(
  "input",
  debounce((e) => {
    const value = e.target.value.trim();

    if (value === "") {
      emptyState.classList.remove("hidden");
      loader.classList.add("hidden");
      notFoundState.classList.add("hidden");
      informationContainer.classList.add("opacity-0");
      return;
    }

    emptyState.classList.add("hidden");
    loader.classList.remove("hidden");
    informationContainer.classList.add("opacity-0");
    notFoundState.classList.add("hidden");

    handleSearch(e);
  }, 500)
);

async function handleSearch(e) {
  try {
    const weatherRes = await fetch(
      ` http://api.weatherapi.com/v1/current.json?key=35c6b141e18644adbf490250251211&q=${e.target.value.trim()}`
    );
    const weatherData = await weatherRes.json();

    const res = await fetch(
      `https://restcountries.com/v3.1/name/${weatherData.location.country}`
    );
    const data = await res.json();
    const country = data[0];

    loader.classList.add("hidden");
    informationContainer.classList.remove("opacity-0");

    /**
     * weather data
     */
    // header
    document.querySelector(
      "#locationName"
    ).textContent = `${weatherData.location.name}, ${weatherData.location.country}`;
    document.querySelector("#localTime").textContent =
      weatherData.location.localtime;
    document.querySelector("#weatherIcon").src =
      weatherData.current.condition.icon;
    document.querySelector("#conditionText").textContent =
      weatherData.current.condition.text;
    document.querySelector("#tempC").textContent = weatherData.current.temp_c;

    // quick stats
    document.querySelector("#feelsLike").textContent =
      weatherData.current.feelslike_c;
    document.querySelector("#humidity").textContent =
      weatherData.current.humidity;
    document.querySelector("#windKph").textContent =
      weatherData.current.wind_kph;
    document.querySelector("#uv").textContent = weatherData.current.uv;

    // atmospheric info
    document.querySelector("#pressure").textContent =
      weatherData.current.pressure_in;
    document.querySelector("#precip").textContent =
      weatherData.current.precip_in;
    document.querySelector("#cloud").textContent = weatherData.current.cloud;
    document.querySelector("#dewpoint").textContent =
      weatherData.current.dewpoint_c;
    document.querySelector("#visibility").textContent =
      weatherData.current.vis_km;
    document.querySelector("#windDir").textContent =
      weatherData.current.wind_dir;

    // solar data
    document.querySelector("#shortRad").textContent =
      weatherData.current.short_rad;
    document.querySelector("#diffRad").textContent =
      weatherData.current.diff_rad;
    document.querySelector("#gti").textContent = weatherData.current.gti;

    /**
     * country data
     */
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
    document.querySelector("#coordinates").textContent =
      country.latlng.join(", ");
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

    let nativeBody = "";
    for (const lang in country.name.nativeName) {
      const nn = country.name.nativeName[lang];
      nativeBody += `
    <div class="bg-white p-3 rounded border border-gray-200">
      <p class="font-semibold text-gray-900">${nn.common}</p>
      <p class="text-gray-700 text-sm mt-1">${nn.official}</p>
    </div>
  `;
    }
    document.querySelector("#nativeNames").innerHTML = nativeBody;

    document.querySelector("#tld").textContent = country.tld.join(", ");

    document.querySelector("#carSide").textContent = country.car.side;
    document.querySelector("#carSigns").textContent =
      country.car.signs.join(", ");

    document.querySelector("#postalCode").textContent =
      country.postalCode.format;

    document.querySelector("#unMember").textContent = country.unMember;
    document.querySelector("#independent").textContent = country.independent;
    document.querySelector("#status").textContent = country.status;

    let demonymsBody = "";
    for (const lang in country.demonyms) {
      const d = country.demonyms[lang];
      demonymsBody += `
    <div class="bg-white p-4 rounded border border-gray-200">
      <p class="font-semibold text-gray-900">${lang.toUpperCase()}</p>
      <p class="text-gray-700 mt-1">Male: ${d.m}</p>
      <p class="text-gray-700">Female: ${d.f}</p>
    </div>
  `;
    }
    document.querySelector("#demonyms").innerHTML = demonymsBody;

    document.querySelector("#altSpellings").textContent =
      country.altSpellings.join(", ");

    let translationsBody = "";
    for (const lang in country.translations) {
      const t = country.translations[lang];
      translationsBody += `
    <div class="bg-white p-4 rounded border border-gray-200">
      <p class="font-semibold text-gray-900">${lang.toUpperCase()}</p>
      <p class="text-gray-700 mt-1">${t.common}</p>
      <p class="text-gray-500 text-sm">${t.official}</p>
    </div>
  `;
    }
    document.querySelector("#translations").innerHTML = translationsBody;
  } catch (error) {
    notFoundState.classList.remove("hidden");
    loader.classList.add("hidden");
    informationContainer.classList.add("opacity-0");
  }
}

function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}
