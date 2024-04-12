<!--
 * @Author: love-yuri yuri2078170658@gmail.com
 * @Date: 2024-04-11 22:13:13
 * @LastEditTime: 2024-04-12 21:58:11
 * @Description: 基础模板
-->
<template>
  <div class="flex items-center p-2">
    <el-button type="primary" class="mx-2"> {{ text }} </el-button>
    <Button class="yuri-ant">这是 vue-init</Button>
  </div>
</template>
<script setup lang="ts">
// import { ref } from 'vue'
import { Button } from 'ant-design-vue';
defineProps<{
  text: string;
}>();
</script>
