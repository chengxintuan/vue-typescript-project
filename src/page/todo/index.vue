<template>
    <section class="todoapp">
        <header class="header">
            <h1>todos</h1>
            <div class="addBar">
                <span class="arrow" :class="{checkArrow: checkBoxAllState}" @click="checkAll"></span>
                <input class="new-todo" type="text" :value="newTodo" @keyup.enter="addTodo" @input="changeInputValue"/>
            </div>
            <ul class="todoList">
                <li class="todoItem" v-for="(todoItem, key) in filterTodoList" :key="key">
                    <span class="checkBox" :class="{checked: todoItem.completed}" @click="changeItem(todoItem)"></span>
                    <span class="content" :class="{red: todoItem.completed}">{{todoItem.title}}</span>
                    <span class="close" @click="deleteTodo(todoItem.id)">x</span>
                </li>
            </ul>
            <div class="footer">
                <span class="footerItem">{{activeTodoListLength}} items left</span>
                <span class="footerItem" v-for="(typeItem, key) in todoType" :key="key"
                      :class="{active: (type === typeItem)}" @click="changeTodoByType(typeItem)">
                    {{typeItem}}
                </span>
                <span class="footerItem" v-show="isShowClearComplete" @click="clearByCompleted">clear completed</span>
            </div>
        </header>
    </section>
</template>

<script lang="ts" src="./todo.ts"/>

<style lang="less">
    @import "./Todostyle.less";
</style>