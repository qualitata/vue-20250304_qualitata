import { defineComponent } from 'vue'

export default defineComponent({
  name: 'WeatherCardTitle',

  props: {
    name: {
      type: String,
    },
    time: {
      type: String,
    },
  },

  setup(props) {
    return {
      name: props.name,
      time: props.time,
    }
  },

  template: `
    <div>
      <h2 class="weather-card__name">
        {{ name }}
      </h2>
      <div class="weather-card__time">
        {{ time }}
      </div>
    </div>
  `,
})
