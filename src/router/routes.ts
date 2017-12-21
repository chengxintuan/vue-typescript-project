import App from '../page/App.vue';

export default [{
    path: '/',
    component: App,
    children: [{
        path: '',
        component: (r: any) => require.ensure([], () => r(require('../page/home')), 'home')
    }, {
        path: '/item',
        component: (r: any) => require.ensure([], () => r(require('../page/item')), 'item')
    }, {
        path: '/score',
        component: (r: any) => require.ensure([], () => r(require('../page/score')), 'score')
    }]
}]