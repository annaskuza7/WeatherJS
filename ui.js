// Convert Kelvin to Celsius 
const calcCelsDegree = kelvinDegree => {
  return (kelvinDegree - 273.15).toFixed(1);
}

class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feels-like');
    this.dewpoint = document.getElementById('w-dewpoint');
    this.wind = document.getElementById('w-wind');
  }

  paint(data) {
    const {
      name,
      sys,
      main,
      weather,
      wind
    } = data;

    const {
      description,
      icon
    } = weather[0];
    
    this.location.textContent = `${name}, ${sys.country}`;
    this.desc.textContent = description;
    this.string.textContent = `${calcCelsDegree(main.temp)}C / ${main.temp}K`;
    this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${icon}@2x.png`);
    this.humidity.textContent = `Relative Humidity: ${main.humidity}%`;
    this.feelsLike.textContent = `Feels Like: ${calcCelsDegree(main.feels_like)}C / ${main.feels_like}K`;
    this.dewpoint.textContent = `Pressure: ${main.pressure}hPa`;
    this.wind.textContent = `Wind: ${wind.speed}km/h`;
  }
}
