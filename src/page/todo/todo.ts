import {Component, Vue} from "vue-property-decorator";
import {
    State as ModuleState,
    Getter as ModuleGetter,
    Mutation as ModuleMutation,
    Action as ModuleAction,
    namespace
} from "vuex-class";
import {TodoDto} from "model";
import {todoType} from './TodoStore';

const State = namespace("todo", ModuleState);
const Getter = namespace("todo", ModuleGetter);
const Mutation = namespace("todo", ModuleMutation);
const Action = namespace("todo", ModuleAction);

@Component
export default class Todo extends Vue {
    // 私有变量和实例
    todoType = ['all', 'active', 'completed'];

    @State todoList: TodoDto[];
    @State newTodo: string;
    @State type: todoType;

    @Getter activeTodoListLength: number;
    @Getter completedTodoListLength: number;
    @Getter filterTodoList: TodoDto[];
    @Getter isShowClearComplete: boolean;
    @Getter checkBoxAllState: boolean;

    @Mutation addTodoList: (payload: TodoDto) => void;
    @Mutation changeNewTodo: (payload: string) => void;
    @Mutation changeTodoByType: (type: todoType) => void;
    @Mutation clearByCompleted: () => void;
    @Mutation changeItem: () => void;
    @Mutation deleteTodo: (id: number) => void;
    @Mutation checkAll: () => void;

    @Action getdata: () => void;

    addTodo() {
        const newTodo = this.newTodo && this.newTodo.trim();

        if (!newTodo) {
            return;
        } else {
            this.addTodoList({title: newTodo});
        }
    }

    changeInputValue(e) {
        const value = e.target.value || '';

        this.changeNewTodo(value);
    }

    created() {
        this.getdata();
    }
}