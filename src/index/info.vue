<template>
    <div>
      <p>当前路径: {{$route.path}}</p>
      <p>当前路由参数: {{$route.params | json}}</p>
    </div>
    <a v-link="'/'">首页</a>
</template>
<script>
    export default {
        data() {
            return {
                data: []
            }
        }
    }

</script>
