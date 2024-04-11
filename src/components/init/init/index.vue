<!--
 * @Author: love-yuri yuri2078170658@gmail.com
 * @Date: 2024-04-11 22:13:13
 * @LastEditTime: 2024-04-11 23:06:22
 * @Description: 基础模板
-->
<template>
  <el-button type="primary"> {{ text }} </el-button>
</template>
<script setup lang="ts">
// import { ref } from 'vue'
defineProps<{
  text: string;
}>();
</script>
