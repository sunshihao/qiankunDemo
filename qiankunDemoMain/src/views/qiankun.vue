<template>
  <div>
    <div id="child" class="about">
      111
    </div>
  </div>
</template>


<script setup lang="ts">

import { onMounted } from "vue"
import { start } from 'qiankun'

onMounted(() => {
  // 启动 qiankun

  // if (!window.qiankunStarted) {
    // window.qiankunStarted = true;
    start(
      {
        sandbox: {
          experimentalStyleIsolation: true // 样式隔离
        }
      }
    );
  // }


})

</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
