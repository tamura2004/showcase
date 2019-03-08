import Vue from 'vue';
import Router from 'vue-router';

import ShowcaseIcon from '@/views/ShowcaseIcon.vue';
import ShowcaseBtn from '@/views/ShowcaseBtn.vue';
import ShowcaseCard from '@/views/ShowcaseCard.vue';
import ShowcaseList from '@/views/ShowcaseList.vue';
import ShowcaseForm from '@/views/ShowcaseForm.vue';
import ShowcaseDialog from '@/views/ShowcaseDialog.vue';

Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/icon',
      component: ShowcaseIcon,
    },
    {
      path: '/btn',
      component: ShowcaseBtn,
    },
    {
      path: '/card',
      component: ShowcaseCard,
    },
    {
      path: '/list',
      component: ShowcaseList,
    },
    {
      path: '/form',
      component: ShowcaseForm,
    },
    {
      path: '/dialog',
      component: ShowcaseDialog,
    },
  ],
});
