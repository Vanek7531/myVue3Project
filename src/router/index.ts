import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import ArticleView from '../views/ArticleView.vue'
import QuestionsView from '../views/QuestionsView.vue'
import SpecialistssView from '../views/SpecialistssView.vue'
import UserAccountView from '../views/UserAccountView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainView
    },
    {
      path: '/article',
      name: 'article',
			component: ArticleView
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue')
    },
		{
      path: '/questions',
      name: 'questions',
      component: QuestionsView
    },
		{
      path: '/specialists',
      name: 'specialists',
      component: SpecialistssView
    },
		{
      path: '/userAccount',
      name: 'userAccount',
      component: UserAccountView
    },
  ]
})

export default router
