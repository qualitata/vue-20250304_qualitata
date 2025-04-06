import { defineComponent, toRef } from 'vue'
import { UiButton } from '@shgk/vue-course-ui'
import './UiCounter.css'

export default defineComponent({
  name: 'UiCounter',

  components: {
    UiButton,
  },

  props: {
    count: {
      type: Number,
    },
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: Infinity,
    },
  },

  setup(props) {
    const count = toRef(props, 'count')

    function disabledDecrement() {
      return count.value <= props.min
    }

    function disabledIncrement() {
      return count.value >= props.max
    }

    return {
      count,
      disabledIncrement,
      disabledDecrement
    }
  },

  emits: ['update:count'],

  template: `
    <div class="counter">
      <UiButton aria-label="Decrement" @click="$emit('update:count', count - 1)" :disabled="disabledDecrement()">➖</UiButton>
      <span class="count" data-testid="count">{{ count }}</span>
      <UiButton aria-label="Increment" @click="$emit('update:count', count + 1)" :disabled="disabledIncrement()">➕</UiButton>
    </div>
  `,
})
