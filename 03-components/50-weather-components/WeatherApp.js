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
      isNight: (weatherInfo) => {
          const {dt: currentTime, sunrise, sunset} = weatherInfo
          return currentTime < sunrise || currentTime > sunset
      }
    }
  },

  template: `
    <div>
      <h1 class="title">Погода в Средиземье</h1>

      <ul class="weather-list unstyled-list">
        <li v-for="weather in weatherData" class="weather-card" :class="{ 'weather-card--night': isNight(weather.current) } ">
          <WeatherCard :weatherInfo="weather" :weatherIcon="weatherIcons[weather.current.weather.id]"/>
        </li>
      </ul>
    </div>
  `,
})
