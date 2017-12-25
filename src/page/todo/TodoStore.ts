import {TodoDto} from 'model';
import {TodoApi} from 'api';

const api = new TodoApi();

export type todoType = 'all' | 'active' | 'completed';

interface State {
    newTodo: string;
    todoList: TodoDto[];
    type: todoType;
}

const state: State = {
    newTodo: '',
    todoList: [],
    type: 'all'
}

export default {
    namespaced: true,
    state: state, // state(该模块中的数据)
    mutations: { // 所有需要修改store值的方法, 同步, action中触发数据修改的都需要调用此对象内部的方法
        addTodoList(state: State, payload: TodoDto) {
            const {todoList} = state;
            const {title} = payload;
            let uid = todoList.length;

            todoList.push({
                id: ++uid,
                completed: false,
                title: title
            });

            state.newTodo = '';
        },
        updateTodoList(state: State, payload: TodoDto[]) {
            state.todoList = payload;
        },
        changeNewTodo(state: State, newTodo: string) {
            state.newTodo = newTodo;
        },
        changeTodoByType(state: State, type: todoType) {
            state.type = type;
        },
        clearByCompleted(state: State) {
            const {todoList} = state;

            state.todoList = todoList.filter((item) => {
                return item.completed === false;
            });
        },
        changeItem(state: State, todoItem: TodoDto) {
            const {todoList} = state;

            state.todoList = todoList.map((item: TodoDto) => {
                return item.id === todoItem.id ? Object.assign(item, {completed: !item.completed}) : item;
            });
        },
        deleteTodo(state: State, id: number) {
            let {todoList} = state;

            state.todoList = todoList.filter((item: TodoDto) => {
                return item.id !== id;
            });
        },
        checkAll(state: State) {
            const {todoList} = state;
            const checkBoxAllState = haveAll(todoList);

            state.todoList = todoList.map((item: TodoDto) => {
                return Object.assign(item, {
                    completed: checkBoxAllState ? false : true
                });
            });
        }
    },
    actions: { // 异步处理的接口
        async getdata({commit, state}) {
            const res = await api.getData();

            if (res.success) {
                commit('updateTodoList', res.data);
            } else {
                console.log(res.message);
            }
        }
    },
    getters: { // 相当于计算属性
        filterTodoList(state: State) {
            const {todoList, type} = state;

            if (type === 'all') {
                return todoList;
            } else {
                return todoList.filter((item: TodoDto) => {
                    return item.completed === (type === 'completed');
                });
            }
        },
        activeTodoListLength(state: State) {
            return state.todoList.filter((item: TodoDto) => {
                return item.completed === false;
            }).length;
        },
        completedTodoListLength(state: State) {
            return state.todoList.filter((item: TodoDto) => {
                return item.completed === true;
            }).length;
        },
        isShowClearComplete(state: State, getters) {
            return getters.completedTodoListLength > 0;
        },
        checkBoxAllState(state: State) {
            return haveAll(state.todoList);
        }
    }
}

function haveAll(todoList) {
    return todoList.every((item: TodoDto) => {
        return item.completed === true;
    });
}