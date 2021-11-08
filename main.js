// Create Variables from form
var formEl = document.querySelector('form')
var searchInput = document.querySelector('input')
var weather = document.getElementById('weather')
console.log (formEl, searchInput, weather)

// Fetch data using variables

    fetch('https://api.openweathermap.org/data/2.5/weather?q=miami&units=imperial&appid=32eb3edd83ffd4be71f34fe205739f96')
    .then(function(res){
        return res.json()
    })
    .then(function(res){
    console.log(res)    
})

// Display data




// Name of the Searched City with Country Code
// Description of current weather
// Icon image for current weather conditions
// Current Temperature
// Current "feels like" Temperature

// api.openweathermap.org/data/2.5/weather?q=YOURQUERY&units=imperial&appid=YOURAPIKEY