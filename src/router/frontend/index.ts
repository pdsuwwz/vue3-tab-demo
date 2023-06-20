import { CacheSpaceKeys } from './constants'

const Layout = () => import('@/components/Layout/index.vue')
const LayoutWork = () => import('@/components/Layout/LayoutWork.vue')
const LayoutWorkTabs = () => import('@/widgets/WorkTabs/index.vue')
const LayoutView = () => import('@/components/Layout/LayoutView.vue')

import * as _TestRoutes from './test-routes'

/** ------------------------- 工作台下的所有子页面 ------------------------- */
export const routesWorkPlatform: RouteRecordRaw = {
  path: 'work-platform',
  name: 'WorkPlatform',
  meta: {
    title: '工作台'
  },
  redirect: {
    name: 'MemberTeamManageRoot'
  },
  component: Layout,
  children: [

    /** ------------------------- 测试路由 ------------------------- */
    _TestRoutes.testRoutesNested,
    _TestRoutes.testRoutesExample,


    /** ------------------------- 成员管理页面 ------------------------- */

    // 成员管理-团队成员
    {
      path: 'member-team-manage',
      name: 'MemberTeamManageRoot',
      component: LayoutWork,
      redirect: {
        name: 'MemberTeamIndex'
      },
      children: [
        {
          path: '',
          name: 'MemberTeamIndex',
          meta: {
            title: '成员管理-团队成员列表',
            cacheSpaceKey: CacheSpaceKeys.memberTeam
          },
          component: () => import('@/modules/MemberTeam/pages/index.vue')
        },
        {
          path: ':datasetId',
          name: 'MemberTeamManageDetail',
          redirect: {
            name: 'MemberTeamPreview'
          },
          children: [
            {
              path: 'preview',
              name: 'MemberTeamPreview',
              meta: {
                title: '成员管理-成员信息查看',
                cacheSpaceKey: CacheSpaceKeys.memberTeam
              },
              component: () => import('@/modules/MemberTeam/pages/preview.vue')
            },
            {
              path: 'edit',
              name: 'MemberTeamEdit',
              meta: {
                title: '成员管理-成员信息编辑',
                cacheSpaceKey: CacheSpaceKeys.memberTeam
              },
              component: () => import('@/modules/MemberTeam/pages/edit.vue')
            }
          ]
        }
      ]
    },

    // 成员管理-角色权限分配
    {
      path: 'member-access-manage',
      name: 'MemberAccessManageRoot',
      component: LayoutWork,
      redirect: {
        name: 'MemberAccessIndex'
      },
      children: [
        {
          path: '',
          name: 'MemberAccessIndex',
          meta: {
            title: '成员管理-角色权限分配-角色列表',
            cacheSpaceKey: CacheSpaceKeys.memberAccess
          },
          component: () => import('@/modules/MemberAccess/pages/index.vue')
        },
        {
          path: ':datasetId',
          name: 'MemberAccessManageDetail',
          redirect: {
            name: 'MemberAccessEdit'
          },
          children: [
            {
              path: 'edit',
              name: 'MemberAccessEdit',
              meta: {
                title: '成员管理-角色权限分配-角色信息编辑',
                cacheSpaceKey: CacheSpaceKeys.memberAccess
              },
              component: () => import('@/modules/MemberAccess/pages/edit.vue')
            },
            {
              path: 'assign-member',
              name: 'MemberAccessAssignMember',
              meta: {
                title: '成员管理-角色权限分配-成员分配',
                cacheSpaceKey: CacheSpaceKeys.memberAccess
              },
              component: () => import('@/modules/MemberAccess/pages/assign-member.vue')
            }
          ]
        }
      ]
    },


    /** ------------------------- 资料管理页面 ------------------------- */

    // 资料管理-资料准备
    {
      path: 'material-prepare-manage',
      name: 'MaterialPrepareManageRoot',
      component: LayoutWork,
      redirect: {
        name: 'MaterialPrepareIndex'
      },
      children: [
        {
          path: '',
          name: 'MaterialPrepareIndex',
          meta: {
            title: '资料管理-资料准备-资料列表',
            cacheSpaceKey: CacheSpaceKeys.materialPrepare
          },
          component: () => import('@/modules/MaterialPrepare/pages/index.vue')
        },
        {
          path: 'new',
          name: 'MaterialPrepareNew',
          meta: {
            title: '资料管理-资料准备-资料上传',
            cacheSpaceKey: CacheSpaceKeys.materialPrepare
          },
          component: () => import('@/modules/MaterialPrepare/pages/new.vue')
        },
        {
          path: ':datasetId',
          name: 'MaterialPrepareManageDetail',
          redirect: {
            name: 'MaterialPreparePreview'
          },
          children: [
            {
              path: 'preview',
              name: 'MaterialPreparePreview',
              meta: {
                title: '资料管理-资料准备-资料信息查看',
                cacheSpaceKey: CacheSpaceKeys.materialPrepare
              },
              component: () => import('@/modules/MaterialPrepare/pages/preview.vue')
            },
            {
              path: 'edit',
              name: 'MaterialPrepareEdit',
              meta: {
                title: '资料管理-资料准备-资料信息编辑',
                cacheSpaceKey: CacheSpaceKeys.materialPrepare
              },
              component: () => import('@/modules/MaterialPrepare/pages/edit.vue')
            }
          ]
        }
      ]
    },

    // 资料管理-资料审阅
    {
      path: 'material-review-manage',
      name: 'MaterialReviewManageRoot',
      component: LayoutWork,
      redirect: {
        name: 'MaterialReviewIndex'
      },
      children: [
        {
          path: '',
          name: 'MaterialReviewIndex',
          meta: {
            title: '资料管理-资料审阅-审阅列表',
            cacheSpaceKey: CacheSpaceKeys.materialReview
          },
          component: () => import('@/modules/MaterialReview/pages/index.vue')
        },
        {
          path: 'status',
          name: 'MaterialReviewStatus',
          meta: {
            title: '资料管理-资料审阅-审阅状态管理',
            cacheSpaceKey: CacheSpaceKeys.materialReview
          },
          component: () => import('@/modules/MaterialReview/pages/status.vue')
        },
        {
          path: ':datasetId',
          name: 'MaterialReviewManageDetail',
          redirect: {
            name: 'MaterialReviewPreview'
          },
          children: [
            {
              path: 'preview',
              name: 'MaterialReviewPreview',
              meta: {
                title: '资料管理-资料审阅-审阅任务详情',
                cacheSpaceKey: CacheSpaceKeys.materialReview
              },
              component: () => import('@/modules/MaterialReview/pages/preview.vue')
            },
            {
              path: 'comment-record',
              name: 'MaterialReviewCommentRecord',
              meta: {
                title: '资料管理-资料审阅-审阅意见记录',
                cacheSpaceKey: CacheSpaceKeys.materialReview
              },
              component: () => import('@/modules/MaterialReview/pages/comment-record.vue')
            }
          ]
        }
      ]
    },


    // 资料管理-备份与恢复
    {
      path: 'material-backup-manage',
      name: 'MaterialBackupManageRoot',
      component: LayoutWork,
      redirect: {
        name: 'MaterialBackupIndex'
      },
      children: [
        {
          path: '',
          name: 'MaterialBackupIndex',
          meta: {
            title: '资料管理-备份与恢复-备份版本列表',
            cacheSpaceKey: CacheSpaceKeys.materialBackup
          },
          component: () => import('@/modules/MaterialBackup/pages/index.vue')
        },
        {
          path: 'settings',
          name: 'MaterialBackupSettings',
          meta: {
            title: '资料管理-备份与恢复-备份设置',
            cacheSpaceKey: CacheSpaceKeys.materialBackup
          },
          component: () => import('@/modules/MaterialBackup/pages/settings.vue')
        },
        {
          path: 'log',
          name: 'MaterialBackupLog',
          meta: {
            title: '资料管理-备份与恢复-日志记录',
            cacheSpaceKey: CacheSpaceKeys.materialBackup
          },
          component: () => import('@/modules/MaterialBackup/pages/log.vue')
        },
        {
          path: 'new',
          name: 'MaterialBackupNew',
          meta: {
            title: '资料管理-备份与恢复-新建备份',
            cacheSpaceKey: CacheSpaceKeys.materialBackup
          },
          component: () => import('@/modules/MaterialBackup/pages/new.vue')
        },
        {
          path: ':datasetId',
          name: 'MaterialBackupManageDetail',
          redirect: {
            name: 'MaterialBackupPreview'
          },
          children: [
            {
              path: 'preview',
              name: 'MaterialBackupPreview',
              meta: {
                title: '资料管理-备份与恢复-备份明细查看',
                cacheSpaceKey: CacheSpaceKeys.materialBackup
              },
              component: () => import('@/modules/MaterialBackup/pages/preview.vue')
            }
          ]
        }
      ]
    },


    /** ------------------------- 成本核算管理页面 ------------------------- */

    // 成本核算管理-预算设定
    {
      path: 'cost-budget-manage',
      name: 'CostBudgetManageRoot',
      component: LayoutWork,
      redirect: {
        name: 'CostBudgetIndex'
      },
      children: [
        {
          path: '',
          name: 'CostBudgetIndex',
          meta: {
            title: '成本核算管理-预算设定-成本预算总览', // 总体和各个类别的预算数据预览
            cacheSpaceKey: CacheSpaceKeys.costBudget
          },
          component: () => import('@/modules/CostBudget/pages/index.vue')
        },
        {
          path: 'category-assign',
          name: 'CostBudgetCategoryAssign',
          meta: {
            title: '成本核算管理-预算设定-成本类别分配',
            cacheSpaceKey: CacheSpaceKeys.costBudget
          },
          component: () => import('@/modules/CostBudget/pages/category-assign.vue')
        },
        {
          path: ':datasetId',
          name: 'CostBudgetManageDetail',
          redirect: {
            name: 'CostBudgetEdit'
          },
          children: [
            {
              path: 'edit',
              name: 'CostBudgetEdit',
              meta: {
                title: '成本核算管理-预算设定-成本预算录入',
                cacheSpaceKey: CacheSpaceKeys.costBudget
              },
              component: () => import('@/modules/CostBudget/pages/edit.vue')
            }
          ]
        }
      ]
    },

    // 成本核算管理-数据收集
    {
      path: 'cost-collection-manage',
      name: 'CostCollectionManageRoot',
      component: LayoutWork,
      redirect: {
        name: 'CostCollectionIndex'
      },
      children: [
        {
          path: '',
          name: 'CostCollectionIndex',
          meta: {
            title: '成本核算管理-数据收集-数据收集预览',
            cacheSpaceKey: CacheSpaceKeys.costCollection
          },
          component: () => import('@/modules/CostCollection/pages/index.vue')
        },
        {
          path: 'direct',
          name: 'CostCollectionDirect',
          meta: {
            title: '成本核算管理-数据收集-直接成本',
            cacheSpaceKey: CacheSpaceKeys.costCollection
          },
          component: () => import('@/modules/CostCollection/pages/direct.vue')
        },
        {
          path: 'indirect',
          name: 'CostCollectionIndirect',
          meta: {
            title: '成本核算管理-数据收集-间接成本',
            cacheSpaceKey: CacheSpaceKeys.costCollection
          },
          component: () => import('@/modules/CostCollection/pages/indirect.vue')
        },
        {
          path: 'manual-upload',
          name: 'CostCollectionManualUpload',
          meta: {
            title: '成本核算管理-数据收集-手动录入',
            cacheSpaceKey: CacheSpaceKeys.costCollection
          },
          component: () => import('@/modules/CostCollection/pages/manual-upload.vue')
        }
        // TODO: 为丰富页面元素，可以增加一个导入的弹框按钮（非新页面导入）
      ]
    },

    // 成本核算管理-分配和归集
    {
      path: 'cost-distribute-manage',
      name: 'CostDistributeManageRoot',
      component: LayoutWork,
      redirect: {
        name: 'CostDistributeIndex'
      },
      children: [
        {
          path: '',
          name: 'CostDistributeIndex',
          meta: {
            title: '成本核算管理-分配和归集-成本数据列表', // 为多个成本分配（交互为多选表格，勾选后可打开多个子tab，在子tab页面进行归集、汇总）
            cacheSpaceKey: CacheSpaceKeys.costDistribute
          },
          component: () => import('@/modules/CostDistribute/pages/index.vue')
        },
        {
          path: ':datasetId',
          name: 'CostDistributeManageDetail',
          redirect: {
            name: 'CostDistributeEdit'
          },
          children: [
            {
              path: 'edit',
              name: 'CostDistributeEdit',
              meta: {
                title: '成本核算管理-分配和归集-成本数据详情',
                cacheSpaceKey: CacheSpaceKeys.costDistribute
              },
              component: () => import('@/modules/CostDistribute/pages/edit.vue')
            }
          ]
        }
      ]
    },

    // 成本核算管理-分析和报告
    {
      path: 'cost-analysis-manage',
      name: 'CostAnalysisManageRoot',
      component: LayoutWork,
      redirect: {
        name: 'CostAnalysisIndex'
      },
      children: [
        {
          path: '',
          name: 'CostAnalysisIndex',
          meta: {
            title: '成本核算管理-分析和报告-成本总览', // 总体成本情况，可视化组件，包括总成本、成本占比、成本趋势等概览信息
            cacheSpaceKey: CacheSpaceKeys.costAnalysis
          },
          component: () => import('@/modules/CostAnalysis/pages/index.vue')
        },
        {
          path: 'structure',
          name: 'CostAnalysisStructure',
          meta: {
            title: '成本核算管理-分析和报告-成本结构',
            cacheSpaceKey: CacheSpaceKeys.costAnalysis
          },
          component: () => import('@/modules/CostAnalysis/pages/structure.vue')
        },
        {
          path: 'diff',
          name: 'CostAnalysisDiff',
          meta: {
            title: '成本核算管理-分析和报告-成本比较',
            cacheSpaceKey: CacheSpaceKeys.costAnalysis
          },
          component: () => import('@/modules/CostAnalysis/pages/diff.vue')
        },
        {
          path: ':datasetId', // 每个成本报告对应多个报表
          name: 'CostAnalysisManageDetail',
          redirect: {
            name: 'CostAnalysisPreview'
          },
          children: [
            {
              path: 'preview',
              name: 'CostAnalysisPreview',
              meta: {
                title: '成本核算管理-分析和报告-报表列表',
                cacheSpaceKey: CacheSpaceKeys.costAnalysis
              },
              component: () => import('@/modules/CostAnalysis/pages/preview.vue')
            },
            {
              path: ':reportId',
              name: 'CostAnalysisManageDetailReport',
              redirect: {
                name: 'CostAnalysisReportInfo'
              },
              children: [
                {
                  path: 'report-info',
                  name: 'CostAnalysisReportInfo',
                  meta: {
                    title: '成本核算管理-分析和报告-报表查看',
                    cacheSpaceKey: CacheSpaceKeys.costAnalysis
                  },
                  component: () => import('@/modules/CostAnalysis/pages/report-info.vue')
                }
              ]
            }
          ]
        }
      ]
    }
    // ......

  ]
}


/** ------------------------- 首页涉及的子路由 ------------------------- */
export const routesHomeFrontend: RouteRecordRaw = {
  path: '/group-project',
  name: 'GroupProjectRoot',
  component: LayoutView,
  redirect: {
    name: 'GroupProjectList'
  },
  children: [
    {
      path: 'list',
      name: 'GroupProjectList',
      meta: {
        title: '项目列表'
      },
      component: () => import('@/modules/HomeFront/pages/index.vue')
    },
    {
      path: ':projectId',
      name: 'GroupProjectDetail',
      redirect: {
        name: 'GroupProjectOverviewRoot'
      },
      children: [
        {
          path: 'overview', // overview 类似驾驶舱
          name: 'GroupProjectOverviewRoot',
          component: LayoutWorkTabs,
          redirect: {
            name: 'GroupProjectOverview'
          },
          children: [
            {
              path: '',
              name: 'GroupProjectOverview',
              meta: {
                title: '项目整体概况',
                cacheSpaceKey: CacheSpaceKeys.dashboard
              },
              component: () => import('@/modules/HomeFront/pages/overview.vue')
            }
          ]
        },
        {
          path: 'dashboard',
          name: 'DashboardIndex',
          redirect: {
            name: 'DashboardConsole'
          },
          // TODO: 测试 tabs 页签的布局
          // component: LayoutTestRoutes,
          component: LayoutWorkTabs,
          children: [
            {
              path: '',
              name: 'DashboardConsole',
              meta: {
                title: '主控制台',
                cacheSpaceKey: CacheSpaceKeys.dashboard
              },
              component: () => import('@/modules/HomeFront/pages/dashboard-console.vue')
            },
            {
              path: 'monitor',
              name: 'DashboardMonitor',
              meta: {
                title: '数据监测',
                cacheSpaceKey: CacheSpaceKeys.dashboard
              },
              component: () => import('@/modules/HomeFront/pages/dashboard-monitor.vue')
            },
            {
              path: 'statistics',
              name: 'DashboardStatistics',
              meta: {
                title: '数据统计',
                cacheSpaceKey: CacheSpaceKeys.dashboard
              },
              component: () => import('@/modules/HomeFront/pages/dashboard-statistics.vue')
            },
            {
              path: 'schema',
              name: 'DashboardSchemaRoot',
              redirect: {
                name: 'DashboardSchema'
              },
              children: [
                {
                  path: '',
                  name: 'DashboardSchema',
                  meta: {
                    title: '概要信息列表', // 下级为编辑页面
                    cacheSpaceKey: CacheSpaceKeys.dashboard
                  },
                  component: () => import('@/modules/HomeFront/pages/dashboard-schema.vue')
                },
                {
                  path: ':recordId/record',
                  name: 'DashboardSchemaRecord',
                  meta: {
                    title: '报表更新记录查看',
                    cacheSpaceKey: CacheSpaceKeys.dashboard
                  },
                  component: () => import('@/modules/HomeFront/pages/dashboard-schema-record.vue')
                }
              ]
            }
          ]
        },

        /** ------------------------- 工作台下的所有子页面 ------------------------- */
        routesWorkPlatform
      ]
    }
  ]
}
