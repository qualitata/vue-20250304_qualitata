import { defineComponent } from 'vue'

export default defineComponent({
  name: 'WeatherCardAlert',

  props: {
    senderName: {
      type: String,
    },
    description: {
      type: String,
    },
  },

  setup(props) {
    return {
      senderName: props.senderName,
      description: props.description,
    }
  },

  template: `
    <div class="weather-alert">
      <span class="weather-alert__icon">⚠️</span>
      <span class="weather-alert__description">{{ senderName }}: {{ description }}</span>
    </div>
  `,
})
