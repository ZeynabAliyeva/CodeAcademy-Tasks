let url = 'https://restcountries.com/v3.1/all';
let url_name =  "https://restcountries.com/v3.1/name";
let url_region = "https://restcountries.com/v3.1/region";
let infBox = document.getElementById('inf_box');
let input = document.querySelector('input');
let filterRegion = document.getElementById('chooseRegions');
let box_container = document.getElementById('box_container');


function addData(element){
    box_container.innerHTML +=`
    <div class="inf_box">
    <img class="img" src="${element.flags.svg}" alt="" />
    <p class="country">${element.name.common}</p>
    <p class="population"><span>Population:${element.population}</span></p>
    <p class="region"><span>Region:${element.region}</p>
    <p class="capital"><span>Capital:${element.capital}</p>
  </div>`
}

function getBox(){
    axios.get(url).then((res)=>{
        res.data.forEach((element) => {
            addData(element);
        });
    })
}
getBox();

input.addEventListener('input',updateValue);
function updateValue(){
    box_container.innerHTML = ""
    axios.get(`${url_name}/${input.value}`).then((res)=>{  
         res.data.forEach((element=>{ 
            addData(element);
         }))
    })
}

filterRegion.addEventListener('change',filterSection);
function filterSection(){
    box_container.innerHTML = ""
    console.log(filterRegion.value)
    if(filterRegion.value == "all"){
        axios.get(url).then((res)=>{
            res.data.forEach((element) => {
                addData(element);
            });
        })
    }
    axios.get(`${url_region}/${filterRegion.value}`)
    .then((res)=>{
        res.data.forEach((element)=>{
            addData(element);
        })
    })
}
