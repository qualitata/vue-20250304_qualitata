import { defineComponent, onUnmounted, ref, watch } from 'vue'

export default defineComponent({
  name: 'UiClock',

  setup() {
    const formattedDate = () => {
      return new Date().toLocaleTimeString(navigator.language, { timeStyle: 'medium' })
    }

    const intervalId = setInterval(() => {
      time.value = formattedDate()
    }, 1000)

    const time = ref(formattedDate())

    onUnmounted(() => clearInterval(intervalId))

    return {
      time
    }
  },

  template: `<div class="clock">{{ time }}</div>`,
})
