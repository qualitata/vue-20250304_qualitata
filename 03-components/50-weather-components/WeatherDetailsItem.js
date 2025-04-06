import { defineComponent } from 'vue'

export default defineComponent({
  name: 'WeatherDetailsItem',

  props: {
    label: {
      type: String,
    },
    value: {
      type: Number,
    },
  },

  setup(props) {
    return {
      label: props.label,
      pressure: props.value,
    }
  },

  template: `
    <div class="weather-details__item">
      <div class="weather-details__item-label"> {{ label }}</div>
      <div class="weather-details__item-value">{{ value }}</div>
    </div>
  `,
})
