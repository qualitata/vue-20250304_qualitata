import { computed, defineComponent } from 'vue'
import WeatherDetailsItem from './WeatherDetailsItem.js'

export default defineComponent({
  name: 'WeatherDetails',

  components: {
    WeatherDetailsItem,
  },

  props: {
    pressure: {
      type: Number,
    },
    humidity: {
      type: Number,
    },
    clouds: {
      type: Number,
    },
    windSpeed: {
      type: Number,
    },
  },

  setup(props) {
    const pressureFormatter = computed(() => Math.round(props.pressure * 0.75))

    return {
      pressure: pressureFormatter,
      humidity: props.humidity,
      clouds: props.clouds,
      windSpeed: props.windSpeed,
    }
  },

  template: `
    <div class="weather-details">
      <WeatherDetailsItem :label="'Давление, мм рт. ст.'" :value="pressure"/>
      <WeatherDetailsItem :label="'Влажность, %'" :value="humidity"/>
      <WeatherDetailsItem :label="'Облачность, %'" :value="clouds"/>
      <WeatherDetailsItem :label="'Ветер, м/с'" :value="windSpeed"/>
    </div>
  `,
})
