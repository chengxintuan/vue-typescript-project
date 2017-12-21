import Vuex from 'vuex';
import Home from './home/Homestore';

export default new Vuex.Store({
    state: {
        name: 'zhangsan',
        password: '123456'
    },
    modules: {Home}
})
