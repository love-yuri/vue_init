/*
 * @Author: love-yuri yuri2078170658@gmail.com
 * @Date: 2024-05-13 20:24:56
 * @LastEditTime: 2024-05-13 20:26:06
 * @Description: 路由配置
 */
import { createRouter, createWebHashHistory } from 'vue-router';
// import { ElNotification } from 'element-plus';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [{ path: '/', component: () => import('./views/welcome.vue'), props: true }],
});

export default router;
