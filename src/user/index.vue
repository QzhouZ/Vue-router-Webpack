<template>
    <p><a v-link="'/'">首页</a></p>
    <ul class="item-list">
        <li v-for="item in data">
            {{item.name}}
            <a v-link="'/user/'+item.id">详细</a>
        </li>
    </ul>
</template>
<script>
    import reqwest from 'reqwest';
    export default {
        data() {
            return {
                data: []
            }
        },
        created() {
            reqwest({
                url: '/mock/user.json',
                method: 'GET',
                type: 'json',
                success: (res) => {
                    var data = res.data;
                    this.data = data;
                }
            })
        }
    }
</script>
