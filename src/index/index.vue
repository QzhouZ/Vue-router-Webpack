<template>
    <div class="success"></div>
    <div class="btn" :click="fetch">加载数据</div>
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
                data: []
            }
        },
        methods: {
            fetch() {
                reqwest({
                    url: '/mock/home.json',
                    method: 'GET',
                    type: 'json',
                    success: (res) => {
                        var data = res.data.newProduct;
                        this.data = data;
                    }
                })
            }
        },
        components: { HeaderTop, List }
    }

</script>
