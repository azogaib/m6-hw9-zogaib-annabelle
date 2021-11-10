// grab references to form, input, and #weather
var formEl = document.querySelector('form')
var inputEl = document.querySelector('input')
var weatherEl = document.getElementById('weather')

// attach submit to form event
// fetch weather data if there is a query
// call render weather function
formEl.onsubmit = function(e) {
    e.preventDefault()
    var query = inputEl.value
    if(!query) return
    fetch('https://api.openweathermap.org/data/2.5/weather?units=imperial&appid=32eb3edd83ffd4be71f34fe205739f96&q=' + query)
    .then(function(res) {
        return res.json()
    })
    .then(function(result){
        renderWeather(result)
        inputEl.value = ""
    })
}

// renderWeather function
function renderWeather(weatherObj) {
    // clear previous search
    weatherEl.innerHTML = ""

    // city not found error
    if (weatherObj.message) {
        weatherEl.textContent = weatherObj.message
        return
    }

    // name of city "name", "sys.country"
    var city = document.createElement('h2')
    city.textContent = weatherObj.name + ", "  + weatherObj.sys.country
    weatherEl.appendChild(city)

    // current weather - "weather.description"
    weatherObj.weather.forEach(function(currWeather) {
        var currWeather = document.createElement('h3')
        currWeather.textContent = weatherObj.weather.description
        weatherEl.appendChild(currWeather)
        console.log(currWeather)
    })

    // icon image "weather.icon"
    var icon = document.createElement('img')
    icon.src = weatherObj.weather.icon
    weatherEl.appendChild(icon)
    console.log(icon)

    // current temperature "main.temp"
    var currTemp = document.createElement('h4')
    currTemp.textContent = "Current: " + weatherObj.main.temp + "℉"
    weatherEl.appendChild(currTemp)

    // feels-like temperature "main.feels_like"
    var feelsLikeTemp = document.createElement('h4')
    feelsLikeTemp.textContent = "Feels Like: " + weatherObj.main.feels_like + "℉"
    weatherEl.appendChild(feelsLikeTemp)
}

    // Description of current weather - "weather.description"
    // Icon image for current weather conditions - "weather.icon"