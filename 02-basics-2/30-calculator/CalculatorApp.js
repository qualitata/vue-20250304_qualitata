import { defineComponent, ref, computed } from 'vue'

export default defineComponent({
  name: 'CalculatorApp',

  setup() {
    const a = ref(0)
    const b = ref(0)
    const operand = ref("sum")

    const calculate = computed(() => {
      const aValue = a.value;
      const bValue = b.value;
      const opValue = operand.value;

      if (opValue === "sum") {
        return aValue + bValue;
      }

      if (opValue === "subtract") {
        return aValue - bValue;
      }

      if (opValue === "multiply") {
        return aValue * bValue;
      }

      if (opValue === "divide") {
        return aValue / bValue;
      }
    })

    return {
      a,
      b,
      operand,
      calculate,
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

      <output>{{ calculate }}</output>
    </div>
  `,
})
