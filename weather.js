const searchForm = document.querySelector(".search_form");
const searchInput = document.querySelector(".search_box");
const tempValue = document.querySelector(".temp_value");
const tempDescription = document.querySelector(".temp_desc");
const state =document.querySelector(".state");
const windSpeed = document.querySelector(".speed");
const weather_images = document.querySelectorAll(".weather-img");
const myImg = document.querySelectorAll("img");

searchForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const states = searchInput.value;
    // console.log(states)

    getWeatherData(states);
})

async function getWeatherData(states){
    try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${states}&appid=29e97e42587b83299a4398fe7cae4beb&units=metric`);

        const data = await res.json();

        // console.log(data);
        // console.log(data.weather[0].icon);

        tempValue.style.font = "16px"
        state.innerHTML = data.name;
        windSpeed.innerHTML = data.wind.speed;
        tempDescription.innerHTML = data.weather[0].description;
        tempValue.innerHTML = `${data.main.temp}&deg;C`;
        
        let icon = data.weather[0].icon;

        weather_images = `http://openweathermap.org/img/wn/${icon}@2x.png`;

        // let mySrc = myImg.setAttribute('src');
        // if (mySrc === "http://openweathermap.org/img/wn/02d@2x.png"){
        //     myImg.setAttribute('src', "http://openweathermap.org/img/wn/02d@2x.png")
        // }else{
        //     myImg.setAttribute('src', `http://openweathermap.org/img/wn/${icon}@2x.png`)
        // }

        // for (let icon = data.weather[0].icon; icon < array.length; icon++) {
            // const element = array[icon];
            
            // weather_images.setAttribute('src', `http://openweathermap.org/img/wn/${icon}@2x.png`)
        // }

    } catch (error) {
        
    }
}