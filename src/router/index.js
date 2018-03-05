import Vue from 'vue'
import Router from 'vue-router'

// Pages
import About from '@/components/About'
import Contact from '@/components/Contact'
import Portfolio from '@/components/Portfolio'
import Resume from '@/components/Resume'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/Portfolio',
      name: 'Portfolio',
      component: Portfolio
    },
    {
      path: '/Resume',
      name: 'Resume',
      component: Resume
    }
  ]
})
