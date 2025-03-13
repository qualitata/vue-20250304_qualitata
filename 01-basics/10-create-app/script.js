import { defineComponent, createApp } from 'vue'

const App = defineComponent({
    name: 'App',
    setup () {
        function formatAsLocalDate() {
            return new Date().toLocaleDateString(navigator.language, { dateStyle: 'long' })
        }
        
        return {
            formatAsLocalDate
        } 
    },

    template: 'Сегодня {{ formatAsLocalDate() }}'
})

const app = createApp(App)
const vm = app.mount('#app')

window.vm = vm