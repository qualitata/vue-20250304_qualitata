import { defineComponent, ref, computed } from 'vue'

export default defineComponent({
  name: 'CalculatorApp',

  setup() {
    const a = ref(0)
    const b = ref(0)
    const operand = ref("sum")

    const result = computed(() => {
      if (operand.value === "sum") {
        return a.value + b.value;
      }

      if (operand.value === "subtract") {
        return a.value - b.value;
      }

      if (operand.value === "multiply") {
        return a.value * b.value;
      }

      if (operand.value === "divide") {
        return a.value / b.value;
      }
    })

    return {
      a,
      b,
      operand,
      result,
    }
  },

  template: `
    <div class="calculator">
      <input type="number" aria-label="First operand" v-model="a"/>

      <div class="calculator__operators">
        <label><input type="radio" name="operator" value="sum" v-model="operand"/>➕</label>
        <label><input type="radio" name="operator" value="subtract" v-model="operand"/>➖</label>
        <label><input type="radio" name="operator" value="multiply" v-model="operand"/>✖</label>
        <label><input type="radio" name="operator" value="divide" v-model="operand"/>➗</label>
      </div>

      <input type="number" aria-label="Second operand" v-model="b"/>

      <div>=</div>

      <output>{{ result }}</output>
    </div>
  `,
})
