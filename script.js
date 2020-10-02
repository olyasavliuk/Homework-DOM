let CountryList = [
    {
     country: "Україна",
     capital:"Київ",
     count: 40000000
    },
    {
     country: "Грузія",
     capital:"Тбілісі",
     count: 10000000
    },
    {
     country: "Великобританія",
     capital:"Лондон",
     count: 100000000
    },
    {
     country: "США",
     capital:"Вашингтон",
     count: 300000000
    }];
let ol = document.createElement("ol");
let list = document.getElementById("country-list");
for (let i = 0; i < CountryList.length; i++) {
    let li = document.createElement("li");
    let liCountry = document.createElement("p");
    let liCapital = document.createElement("p");
    let liCount = document.createElement("p");
    liCountry.innerHTML = `${CountryList[i].country}`;
    liCapital.innerHTML = `${CountryList[i].capital}`;
    liCount.innerHTML = `${CountryList[i].count/1000000} млн`;
    if (CountryList[i].country === "Україна") {
        liCountry.style.color = "blue";
    }
    if (CountryList[i].capital === "Київ") {
        liCapital.style.color = "yellow";
    }
    li.appendChild(liCountry);
    li.appendChild(liCapital);
    li.appendChild(liCount);
    ol.appendChild(li);
}
list.appendChild(ol);
