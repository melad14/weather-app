let dayName=document.getElementById("dayName")
let date=document.getElementById("date")
let cityNamy=document.getElementById("cityName")
let degree=document.getElementById("degree_num")
let iconaa=document.getElementById("iconaa")
let sunState=document.getElementById("sunState")
let humidty=document.getElementById("humidty")
let windSpeed=document.getElementById("windSpeed")
let dirct=document.getElementById("dirct")
searchBar=document.getElementById("searchBar")
//daaaaaaaaaaaaaay 2222222222222
let day2=document.getElementById("day2")
let degree2=document.getElementById("degree_num2")
let degree_small2=document.getElementById("degree_num_small2")
let iconaa2=document.getElementById("icona2")
let sunState2=document.getElementById("sunState2")

//daaaaaaaaaaaaaaaaaaay 3333333333333333333
let day3=document.getElementById("day3")
let degree3=document.getElementById("degree_num3")
let degree_small3=document.getElementById("degree_num_small3")
let iconaa3=document.getElementById("icona3")
let sunState3=document.getElementById("sunState3")

let monthName = ['Jan','Feb','March','April','May','June','July','Aug','Spet','Oct','Nov','Dec'];
  let days = [
      "Sunday","Monday","Tuesday","Wednesday", "Thursday","Friday","Saturday"];
      
let finalData ;


 async function getWeather(currentCity="london"){
let data = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=a237db5b080a4ec7a54123036232602&q=${currentCity}&days=3`)
 finalData= await data.json()
   getToday();
   nextday();
   thirdday();
 };
 getWeather();


function getToday(){
    let dateInfo =new Date();
    dayName.innerHTML= days[dateInfo.getDay()];
    date.innerHTML=`${dateInfo.getDate()} ${ monthName[dateInfo.getMonth()]}`;
    cityNamy.innerHTML=finalData.location.name;
    degree.innerHTML=finalData.current.temp_c
    iconaa.setAttribute("src",`https:${finalData.current.condition.icon}`)
    sunState.innerHTML=finalData.current.condition.text;

    humidty.innerHTML = finalData.current.humidity;
 windSpeed.innerHTML = finalData.current.wind_kph;
 dirct.innerHTML =finalData.current.wind_dir;
}

function nextday(){
    let dateInfo =new Date();
    day2.innerHTML= days[dateInfo.getDay()+1];
    iconaa2.setAttribute("src",`https:${finalData.forecast.forecastday[1].day.condition.icon}`)
    degree2.innerHTML=finalData.forecast.forecastday[1].day.maxtemp_c
    degree_small2.innerHTML=finalData.forecast.forecastday[1].day.mintemp_c
    sunState2.innerHTML=finalData.forecast.forecastday[1].day.condition.text

}
function thirdday(){
    let dateInfo =new Date();
    day3.innerHTML= days[dateInfo.getDay()+2];
    iconaa3.setAttribute("src",`https:${finalData.forecast.forecastday[2].day.condition.icon}`)
    degree3.innerHTML=finalData.forecast.forecastday[2].day.maxtemp_c
    degree_small3.innerHTML=finalData.forecast.forecastday[2].day.mintemp_c
    sunState3.innerHTML=finalData.forecast.forecastday[2].day.condition.text

}
searchBar.addEventListener("keyup",function(){
    currentCity= searchBar.value;
  getWeather(currentCity);
  })
  
