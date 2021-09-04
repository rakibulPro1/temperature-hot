const API_KEY = `9c571bfa9d319d4c88b1e5a85dbe7d43`

const searchTemperature = () => {
    const cityInput = document.getElementById('city-name');
    const cityName = cityInput.value;

    const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data));
    
}
const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}
const displayTemperature = temperature => {
    setInnerText('city', temperature.name)
    setInnerText('temperature', temperature.main.temp);
    setInnerText('condition', temperature.weather[0].main);
    const iconUrl = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const weatherIconField = document.getElementById('weather-icon');
    weatherIconField.setAttribute('src', iconUrl);
}
