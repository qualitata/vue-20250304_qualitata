import { defineComponent } from 'vue'
import WeatherCardAlert from './WeatherCardAlert'
import WeatherCardTitle from './WeatherCardTitle'
import WeatherCardConditions from "./WeatherCardConditions.js";
import WeatherDetails from "./WeatherDetails.js";

export default defineComponent({
  name: 'WeatherCard',

  components: {
    WeatherCardAlert,
    WeatherCardTitle,
    WeatherCardConditions,
    WeatherDetails,
  },

  props: {
    weatherInfo: {
      type: Object,
      required: true,
    },
    weatherIcon: {
      type: String,
      required: true,
    },
  },

  setup(props) {
    return {
      weather: props.weatherInfo,
      weatherIcon: props.weatherIcon,
    }
  },

  template: `
    <WeatherCardAlert v-if="weather.alert"
                      :senderName="weather.alert.sender_name"
                      :description="weather.alert.description"
    />
    <WeatherCardTitle :name="weather.geographic_name"
                      :time="weather.current.dt"
    />
    <WeatherCardConditions :description="weather.current.weather.description"
                           :icon="weatherIcon"
                           :temperature="weather.current.temp"
    />
    <WeatherDetails :pressure="weather.current.pressure" :humidity="weather.current.humidity"
                    :clouds="weather.current.clouds" :wind-speed="weather.current.wind_speed"
    />
  `,
})
