<template>
    <div class="success"></div>
    <div class="btn" v-on:click="fetch">{{text}}</div>
    <div class="btn" v-on:click="add">add</div>
    <header-top v-if="data.length" :datalen="data.length"></header-top>
    <list v-if="data.length" :data="data"></list>
    <p>
        <a v-link="'user'">用户列表</a>
        <a v-link="'about'">关于我们</a>
    </p>
</template>
<script>
    import './less/index';
    import reqwest from 'reqwest';
    import HeaderTop from './header';
    import List from './list';
    export default {
        data() {
            return {
                text: '加载数据',
                data: []
            }
        },
        methods: {
            fetch() {
                this.text = '正在加载';
                reqwest({
                    url: '/article',
                    method: 'GET',
                    type: 'json',
                    success: (res) => {
                        if (res.code) {
                            this.data = res.data;
                        }
                        this.text = '加载数据';
                    }
                });
            },
            add() {
                reqwest({
                    url: '/article',
                    method: 'POST',
                    type: 'json',
                    success: (res) => {
                        
                    }
                });
            }
        },
        components: { HeaderTop, List }
    }

</script>
