<template>
    <div class="home_container">
        <ul>
            <li v-for="home in homeList">
                {{ home.name }}
            </li>
        </ul>
        <p><span>这是女孩的人数:</span><span>{{womanLength}}</span></p>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import {HomeDto} from "model";

    @Component
    export default class Home extends Vue {
        $store;

        get homeList() {
            return this.$store.state.home.homeList;
        }

        get womanLength() {
            return this.$store.getters['home/womanLength'];
        }

        created() {
            this.$store.dispatch('home/getdata', {id: 4});
        }
    }
</script>

<style lang="less">
    .home_container {
        color: orangered;
    }
</style>