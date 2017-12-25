import Vue from 'vue';
import Vuex from 'vuex';
import Home from './home/Homestore';
import Todo from './todo/TodoStore';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        firstName: 'zhang',
        lastName: 'san',
        password: '123456'
    },
    modules: {
        home: Home,
        todo: Todo
    }
})
