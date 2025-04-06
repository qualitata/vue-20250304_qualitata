import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'WeatherCardConditions',

  props: {
    description: {
      type: String,
    },
    icon: {
      type: String,
    },
    temperature: {
      type: Number,
    },
  },

  setup(props) {
    const tempFormatter = computed(() => (props.temperature - 273.15).toFixed(1))

    return {
      description: props.description,
      icon: props.icon,
      temperature: tempFormatter,
    }
  },

  template: `
    <div class="weather-conditions">
      <div class="weather-conditions__icon" :title="description">
        {{ icon }}
      </div>
      <div class="weather-conditions__temp">{{ temperature }} °C</div>
    </div>
  `,
})
