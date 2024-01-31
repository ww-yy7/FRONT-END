<template>
  <ul>
    <!-- <li>消息编号：{{ $route.query.id }}</li>
        <li>消息内容是：{{ $route.query.title  }}</li> -->

    <!-- <li>消息编号：{{ $route.params.id }}</li>
    <li>消息内容是：{{ $route.params.title }}</li> -->

    <li>消息编号：{{ id }}</li>
    <li>消息内容是：{{ title }}</li>

    <!-- <li>a:{{ a }}</li>
    <li>b:{{ b }}</li> -->
  </ul>
</template>

<script>
export default {
  name: "WyDetail",
  props: ["id", "title"],
};
</script>
