
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
     
    ]
  },
  {
    path: '/info',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '/info', component: () => import('pages/info.vue') },
     
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
