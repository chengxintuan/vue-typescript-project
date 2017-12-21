import Vue from 'vue';
import Score from './score/index.vue';

new Vue({
    el: '#app',
    template: '<score :message="message"></score>',
    data: {
        message: 'hello world!'
    },
    components:{
        Score
    }
})
