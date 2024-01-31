<template>
  <div >
    <WyText/>
    <WyText2/>
    <WyText3/>
  </div>
</template>

<script>
//引入组件
import WyText from "./components/WyText";
import WyText2 from "./components/WyText2";
import WyText3 from "./components/WyText3";


export default {
  name: "App",
  components: { WyText,WyText2,WyText3 },
};
</script>

