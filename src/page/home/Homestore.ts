import {HomeDto} from 'model';
import {HomeApi} from 'api';

const api = new HomeApi();

export default {
    state: {
        homeList: []
    },
    mutations: {
        updataState(state, payload) {
            state.homeList = payload;
        }
    },
    actions: {
        async getdata({commit, state}, payload: { id: number }) {
            const res = await api.getData({id: payload.id});

            if (res.success) {
                commit('updataState', res.data);
            } else {
                console.log(res.message);
            }
        }
    },
    getters: {
        manList: (state) => {
            return state.homeList.filter((item: HomeDto) => {
                return item.sex === true;
            });
        },
        womanLength: (state) => {
            return state.homeList.filter((item: HomeDto) => {
                return item.sex === false;
            }).length;
        }
    }
}