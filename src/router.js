import Vue from 'vue'
import VueRouter from 'vue-router';
Vue.use(VueRouter)
// 英雄页面
import HeroList from './view/heroes/HeroList.vue';
// 装备页面
import EquipsList from './view/equips/EquipsList.vue';
// 武器页面
import WeaponsList from './view/weapons/WeaponsList.vue';

const router = new VueRouter({
    // 精确配置高亮显示
    linkActiveClass: 'active',
  
    routes: [{
        name: '/',
        path: '/',
        redirect: '/heroes'
      },
      {
        name: 'heroes',
        path: '/heroes',
        component: HeroList
      },
      {
        name: 'equips',
        path: '/equips',
        component: EquipsList
      },
      {
        name: 'weapons',
        path: '/weapons',
        component: WeaponsList
      }
    ]
  })

export default router;