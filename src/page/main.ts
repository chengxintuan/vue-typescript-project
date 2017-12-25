import Vue from 'vue';
import Score from './score/index.vue';
import Home from './home/index.vue';
import Todo from './todo/index.vue';
import store from './store';

new Vue({
    el: '#app',
    store,
    template: `
        <div>
            <todo></todo>
        </div>
    `,
    data: {
        message: 'hello world!'
    },
    components: {
        Score,
        Home,
        Todo
    }
});
