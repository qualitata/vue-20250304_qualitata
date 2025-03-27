import { computed, defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'CalculatorApp',

  setup() {
    let firstOperand = ref(0)
    let secondOperand = ref(0)
    let selectedOperator = ref('sum')

    let calc = computed(() => {
      let total = 0
      if (selectedOperator.value === 'sum') {
        total = firstOperand.value + secondOperand.value
      } else if (selectedOperator.value === 'subtract') {
        total = firstOperand.value - secondOperand.value
      } else if (selectedOperator.value === 'multiply') {
        total = firstOperand.value * secondOperand.value
      } else if (selectedOperator.value === 'divide') {
        total = firstOperand.value / secondOperand.value
      }
      return total
    })

    return {
      firstOperand,
      secondOperand,
      selectedOperator,
      calc,
    }
  },

  template: `
    <div class="calculator">
      <input type="number" aria-label="First operand" v-model="firstOperand"/>

      <div class="calculator__operators">
        <label><input type="radio" name="operator" value="sum" v-model="selectedOperator"/>➕</label>
        <label><input type="radio" name="operator" value="subtract" v-model="selectedOperator"/>➖</label>
        <label><input type="radio" name="operator" value="multiply" v-model="selectedOperator"/>✖</label>
        <label><input type="radio" name="operator" value="divide" v-model="selectedOperator"/>➗</label>
      </div>

      <input type="number" aria-label="Second operand" v-model="secondOperand" />

      <div>=</div>

      <output>{{ calc }}</output>
    </div>
  `,
})
