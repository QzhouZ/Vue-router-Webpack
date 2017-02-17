<template>
    <ul class="item-list">
        <li v-for="item in data">
            {{item.title}}
            <a href="javascript:;" v-on:click="del($index, item.objectId)">删除</a>
        </li>
    </ul>
</template>
<script>
    import reqwest from 'reqwest';
    export default {
        props: ['data'], 
        methods: {
            del(index, id) {
                let orgignData = this.data;
                orgignData.splice(index, 1);
                this.data = orgignData;
                reqwest({
                    url: '/article/' + id,
                    method: 'POST',
                    type: 'json',
                    success: (res) => {
                        
                    }
                });
            }
        }
    }
</script>
