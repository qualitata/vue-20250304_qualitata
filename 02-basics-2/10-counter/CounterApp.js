import { computed, defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'CounterApp',

  setup() {
    const minValue = 0
    const maxValue = 5
    const count = ref(minValue)

    return {
      count,
      minValue,
      maxValue
    }
  },

  template: `
    <div class="counter">
      <button
        class="button button--secondary"
        type="button"
        aria-label="Decrement"
        :disabled="count === minValue"
        @click="count--"
      >➖</button>

      <span class="count" data-testid="count">{{ count }}</span>

      <button
        class="button button--secondary"
        type="button"
        aria-label="Increment"
        :disabled="count === maxValue"
        @click="count++"
      >➕</button>
    </div>
  `,
})
