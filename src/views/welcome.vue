<!--
 * @Author: love-yuri yuri2078170658@gmail.com
 * @Date: 2024-04-11 23:06:51
 * @LastEditTime: 2024-05-13 21:53:42
 * @Description: 欢迎界面
-->
<template>
  <div class="w-full h-full flex justify-center items-center">
    <InitComponents text="欢迎使用" />
  </div>
</template>
<script setup lang="ts">
import { InitComponents } from '@/components/init/index';
import { login } from '@/api/userApi/user';
import { onMounted } from 'vue';

onMounted(async () => {
  const res = await login('');
  console.log(res);
});
</script>
