import { defineComponent } from 'vue'
import { getWeatherData, WeatherConditionIcons } from './weather.service.ts'
import WeatherCard from './WeatherCard.js'
import './WeatherApp.css'

export default defineComponent({
  name: 'WeatherApp',

  components: {
    WeatherCard,
  },

  setup() {
    return {
      weatherData: getWeatherData(),
      weatherIcons: WeatherConditionIcons,
    }
  },

  template: `
    <div>
      <h1 class="title">Погода в Средиземье</h1>
      <ul class="weather-list unstyled-list">
        <WeatherCard v-for="weather in weatherData"
                     :weatherInfo="weather"
                     :weatherIcon="weatherIcons[weather.current.weather.id]"/>
      </ul>
    </div>
  `,
})
