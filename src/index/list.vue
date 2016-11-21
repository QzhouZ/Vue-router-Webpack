<template>
    <ul class="item-list">
        <li v-for="item in data">
            {{item.name}}
            <a href="javascript:;" v-on:click="del($index)">删除</a>
        </li>
    </ul>
</template>
<script>
    export default {
        props: ['data'], 
        methods: {
            del(index) {
                let orgignData = this.data;
                orgignData.splice(index, 1);
                this.data = orgignData;
            }
        }
    }
</script>
