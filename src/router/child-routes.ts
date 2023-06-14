import { routesHomeFrontend } from './frontend'

const importModule = import.meta.glob('../modules/**/*.vue')
const Layout = () => import('@/components/Layout/index.vue')
const LayoutView = () => import('@/components/Layout/LayoutView.vue')
const LayoutArea = () => import('@/components/Layout/LayoutArea.vue')

const childrenRoutes: Array<RouteRecordRaw> = [
  {
    path: '/test-layout',
    name: '布局测试',
    meta: {
      title: 'TestLayout'
    },
    component: LayoutArea
  },
  {
    path: '/user',
    component: Layout,
    name: 'User',
    meta: {
      title: '账户'
    },
    redirect: {
      name: 'UserLogin'
    },
    children: [
      {
        path: 'login',
        name: 'UserLogin',
        component: importModule['../modules/UserAccount/pages/login.vue'],
        meta: {
          title: '登录'
        }
      }
    ]
  },


  /** ------- 所有业务路由 ------- */
  routesHomeFrontend
]

export default childrenRoutes
