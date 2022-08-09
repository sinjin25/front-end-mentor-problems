console.log('component.js is running')

// add component
Vue.component('card', {
    name: 'card',
    template: `
    <!-- working html. Base vue off this -->
    <div class="card">
        <div class="card-head">
            <slot name="svg"></slot>
        </div>
        <div class="card-body">
            <div class="card-title title"><slot name="title"></slot></div>
            <div class="card-text"><slot name="body"></slot></div>
        </div>
        <div class="footer">
            <button class="card-cta">Learn More</button>
        </div>
    </div>
    `
})

// initialize vue
const vueApp = new Vue({
    el: '#app',
    data: {
    }
})