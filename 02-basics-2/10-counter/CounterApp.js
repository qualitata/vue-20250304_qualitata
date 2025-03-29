import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'CounterApp',

  setup() {
    const maxValue = 5
    const minValue = 0
    const count = ref(minValue)

    return {
      count,
      maxValue,
      minValue
    }
  },

  template: `
    <div class="counter">
      <button
        class="button button--secondary"
        type="button"
        aria-label="Decrement"
        @click="count--"
        :disabled="count === minValue"
      >➖</button>

      <span class="count" data-testid="count">{{ count }}</span>
      <span class="count" data-testid="count">{{ count }}</span>

      <button
        class="button button--secondary"
        type="button"
        aria-label="Increment"
        @click="count++"
        :disabled="count === maxValue"
      >➕</button>
    </div>
  `,
})
