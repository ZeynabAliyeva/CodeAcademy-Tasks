let url_name =  "https://restcountries.com/v3.1/name";
let back_btn = document.getElementById('back_btn');
let containerDetails = document.querySelector('.containerDetails');
let countryName = JSON.parse(localStorage.getItem("countryName"));


function clickCountry(){
    axios.get(`${url_name}/${countryName}`).then((res)=>{
        console.log(res);
        res.data.forEach(element => {
            let nativeName = Object.entries(element.name.nativeName)[0][1].common;
			console.log(nativeName);
            containerDetails.innerHTML += `
            <div class="country_inf">
              <p class="native_name">
                <span>Native Name:${element.nativeName}</span>
              </p>
              <p class="population">
                <span>Population:${element.population}</span>
              </p>
              <p class="region"><span>Region:${element.region}</span></p>
              <p class="sub_region">
                <span>Sub Region:${element.subRegion}</span>
              </p>
              <p class="capital"><span>Capital:${element.capital}</span></p>
              <p class="top_level_domain">
                <span>Top Level Domain:${element.tld}</span>
              </p>
              <p class="currencies">
                <span>Currencies:${element.currencies}</span>
              </p>
              <p class="languages"><span>Languages:${element.languages}</span></p>
            </div>
            <div class="border_countries">
              <p>Border Countries:</p>
              <button class="btn">France</button>
              <button class="btn">Germany</button>
              <button class="btn">Netherlands</button>
            </div>
          </div>
        </div>`
        });
    })
}
clickCountry();
