const Layout = () => import('@/components/Layout/index.vue')
const LayoutWork = () => import('@/components/Layout/LayoutWork.vue')
const LayoutWorkTabs = () => import('@/widgets/WorkTabs/index.vue')
const LayoutView = () => import('@/components/Layout/LayoutView.vue')

import { CacheSpaceKeys } from './constants'

/** ------------------------- 工作台下的所有子页面 ------------------------- */
const _routesWorkPlatform: RouteRecordRaw = {
  path: 'work-platform',
  name: 'WorkPlatform',
  meta: {
    title: '工作台'
  },
  redirect: {
    name: 'MemberManageRoot'
  },
  component: Layout,
  children: [
    /** ------------------------- 成员管理页面 ------------------------- */

    // 成员管理-团队成员
    {
      path: 'member-team-manage',
      name: 'MemberTeamManageRoot',
      component: LayoutWork,
      redirect: {
        name: 'MemberTeamManageIndex'
      },
      children: [
        {
          path: '',
          name: 'MemberTeamManageIndex',
          meta: {
            title: '成员管理-团队成员',
            cacheSpaceKey: CacheSpaceKeys.memberTeam
          },
          component: () => import('@/modules/Result/pages/overview.vue')
        },
        {
          path: ':datasetId',
          name: 'MemberTeamManageDetail',
          redirect: {
            name: 'MemberTeamManageDetailPreview'
          },
          children: [
            {
              path: 'preview',
              name: 'MemberTeamManageDetailPreview',
              meta: {
                title: '成员管理-成员信息查看',
                cacheSpaceKey: CacheSpaceKeys.memberTeam
              },
              component: () => import('@/modules/Result/pages/overview.vue')
            },
            {
              path: 'edit',
              name: 'MemberTeamManageDetailEdit',
              meta: {
                title: '成员管理-成员信息编辑',
                cacheSpaceKey: CacheSpaceKeys.memberTeam
              },
              component: () => import('@/modules/Result/pages/overview.vue')
            }
          ]
        }
      ]
    },
    // 成员管理-角色分配
    {
      path: 'member-access-manage',
      name: 'MemberAccessManageRoot',
      component: LayoutWork,
      redirect: {
        name: 'MemberAccessManageIndex'
      },
      children: [
        {
          path: '',
          name: 'MemberAccessManageIndex',
          meta: {
            title: '成员管理-角色列表',
            cacheSpaceKey: CacheSpaceKeys.memberAccess
          },
          component: () => import('@/modules/Result/pages/overview.vue')
        },
        {
          path: ':datasetId',
          name: 'MemberAccessManageDetail',
          redirect: {
            name: 'MemberAccessManageDetailPreview'
          },
          children: [
            {
              path: 'edit',
              name: 'MemberTeamManageDetailEdit',
              meta: {
                title: '成员管理-角色信息编辑',
                cacheSpaceKey: CacheSpaceKeys.memberAccess
              },
              component: () => import('@/modules/Result/pages/overview.vue')
            },
            {
              path: 'assign-member',
              name: 'MemberTeamManageDetailAssignMemberEdit',
              meta: {
                title: '成员管理-角色-成员分配',
                cacheSpaceKey: CacheSpaceKeys.memberAccess
              },
              component: () => import('@/modules/Result/pages/overview.vue')
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
        name: 'MaterialPrepareManageIndex'
      },
      children: [
        {
          path: '',
          name: 'MaterialPrepareManageIndex',
          meta: {
            title: '资料管理-资料列表',
            cacheSpaceKey: CacheSpaceKeys.materialPrepare
          },
          component: () => import('@/modules/Result/pages/overview.vue')
        },
        {
          path: 'new',
          name: 'MaterialPrepareManageNew',
          meta: {
            title: '资料管理-资料上传',
            cacheSpaceKey: CacheSpaceKeys.materialPrepare
          },
          component: () => import('@/modules/Result/pages/overview.vue')
        },
        {
          path: ':datasetId',
          name: 'MaterialPrepareManageDetail',
          redirect: {
            name: 'MaterialPrepareManageDetailPreview'
          },
          children: [
            {
              path: 'preview',
              name: 'MaterialPrepareManageDetailPreview',
              meta: {
                title: '资料管理-资料信息查看',
                cacheSpaceKey: CacheSpaceKeys.materialPrepare
              },
              component: () => import('@/modules/Result/pages/overview.vue')
            },
            {
              path: 'edit',
              name: 'MaterialPrepareManageDetailEdit',
              meta: {
                title: '资料管理-资料信息编辑',
                cacheSpaceKey: CacheSpaceKeys.materialPrepare
              },
              component: () => import('@/modules/Result/pages/overview.vue')
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
        name: 'MaterialReviewManageIndex'
      },
      children: [
        {
          path: '',
          name: 'MaterialReviewManageIndex',
          meta: {
            title: '资料管理-审阅列表',
            cacheSpaceKey: CacheSpaceKeys.materialReview
          },
          component: () => import('@/modules/Result/pages/overview.vue')
        },
        {
          path: 'status',
          name: 'MaterialReviewManageStatus',
          meta: {
            title: '资料管理-审阅状态管理',
            cacheSpaceKey: CacheSpaceKeys.materialReview
          },
          component: () => import('@/modules/Result/pages/overview.vue')
        },
        {
          path: ':datasetId',
          name: 'MaterialReviewManageDetail',
          redirect: {
            name: 'MaterialReviewManageDetailPreview'
          },
          children: [
            {
              path: 'preview',
              name: 'MaterialReviewManageDetailPreview',
              meta: {
                title: '资料管理-审阅任务详情',
                cacheSpaceKey: CacheSpaceKeys.materialReview
              },
              component: () => import('@/modules/Result/pages/overview.vue')
            },
            {
              path: 'comment-record',
              name: 'MaterialReviewManageDetailCommentRecord',
              meta: {
                title: '资料管理-审阅意见记录',
                cacheSpaceKey: CacheSpaceKeys.materialReview
              },
              component: () => import('@/modules/Result/pages/overview.vue')
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
        name: 'MaterialBackupManageIndex'
      },
      children: [
        {
          path: '',
          name: 'MaterialBackupManageIndex',
          meta: {
            title: '资料管理-备份版本列表',
            cacheSpaceKey: CacheSpaceKeys.materialBackup
          },
          component: () => import('@/modules/Result/pages/overview.vue')
        },
        {
          path: 'settings',
          name: 'MaterialBackupManageSettings',
          meta: {
            title: '资料管理-备份设置',
            cacheSpaceKey: CacheSpaceKeys.materialBackup
          },
          component: () => import('@/modules/Result/pages/overview.vue')
        },
        {
          path: 'log',
          name: 'MaterialBackupManageLog',
          meta: {
            title: '资料管理-日志记录',
            cacheSpaceKey: CacheSpaceKeys.materialBackup
          },
          component: () => import('@/modules/Result/pages/overview.vue')
        },
        {
          path: 'new',
          name: 'MaterialBackupManageNew',
          meta: {
            title: '资料管理-新建备份',
            cacheSpaceKey: CacheSpaceKeys.materialBackup
          },
          component: () => import('@/modules/Result/pages/overview.vue')
        },
        {
          path: ':datasetId',
          name: 'MaterialBackupManageDetail',
          redirect: {
            name: 'MaterialBackupManageDetailPreview'
          },
          children: [
            {
              path: 'preview',
              name: 'MaterialBackupManageDetailPreview',
              meta: {
                title: '资料管理-备份明细查看',
                cacheSpaceKey: CacheSpaceKeys.materialBackup
              },
              component: () => import('@/modules/Result/pages/overview.vue')
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
        name: 'CostBudgetManageIndex'
      },
      children: [
        {
          path: '',
          name: 'CostBudgetManageIndex',
          meta: {
            title: '成本核算管理-成本预算总览', // 总体和各个类别的预算数据预览
            cacheSpaceKey: CacheSpaceKeys.costBudget
          },
          component: () => import('@/modules/Result/pages/overview.vue')
        },
        {
          path: 'category-assign',
          name: 'CostBudgetManageCategoryAssign',
          meta: {
            title: '成本核算管理-成本类别分配',
            cacheSpaceKey: CacheSpaceKeys.costBudget
          },
          component: () => import('@/modules/Result/pages/overview.vue')
        },
        {
          path: ':datasetId',
          name: 'CostBudgetManageDetail',
          redirect: {
            name: 'CostBudgetManageDetailPreview'
          },
          children: [
            {
              path: 'edit',
              name: 'CostBudgetManageDetailEdit',
              meta: {
                title: '成本核算管理-成本预算录入',
                cacheSpaceKey: CacheSpaceKeys.costBudget
              },
              component: () => import('@/modules/Result/pages/overview.vue')
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
        name: 'CostCollectionManageIndex'
      },
      children: [
        {
          path: '',
          name: 'CostCollectionManageIndex',
          meta: {
            title: '成本核算管理-数据收集预览',
            cacheSpaceKey: CacheSpaceKeys.costCollection
          },
          component: () => import('@/modules/Result/pages/overview.vue')
        },
        {
          path: 'direct',
          name: 'CostCollectionManageDirect',
          meta: {
            title: '成本核算管理-数据收集-直接成本',
            cacheSpaceKey: CacheSpaceKeys.costCollection
          },
          component: () => import('@/modules/Result/pages/overview.vue')
        },
        {
          path: 'indirect',
          name: 'CostCollectionManageIndirect',
          meta: {
            title: '成本核算管理-数据收集-间接成本',
            cacheSpaceKey: CacheSpaceKeys.costCollection
          },
          component: () => import('@/modules/Result/pages/overview.vue')
        },
        {
          path: 'manual-upload',
          name: 'CostCollectionManageManualUpload',
          meta: {
            title: '成本核算管理-数据收集-手动录入',
            cacheSpaceKey: CacheSpaceKeys.costCollection
          },
          component: () => import('@/modules/Result/pages/overview.vue')
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
        name: 'CostDistributeManageIndex'
      },
      children: [
        {
          path: '',
          name: 'CostDistributeManageIndex',
          meta: {
            title: '成本核算管理-成本数据列表', // 为多个成本分配（交互为多选表格，勾选后可打开多个子tab，在子tab页面进行归集、汇总）
            cacheSpaceKey: CacheSpaceKeys.costDistribute
          },
          component: () => import('@/modules/Result/pages/overview.vue')
        },
        {
          path: ':datasetId',
          name: 'CostDistributeManageDetail',
          redirect: {
            name: 'CostDistributeManageDetailEdit'
          },
          children: [
            {
              path: 'edit',
              name: 'CostDistributeManageDetailEdit',
              meta: {
                title: '成本核算管理-成本数据详情',
                cacheSpaceKey: CacheSpaceKeys.costDistribute
              },
              component: () => import('@/modules/Result/pages/overview.vue')
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
        name: 'CostAnalysisManageIndex'
      },
      children: [
        {
          path: '',
          name: 'CostAnalysisManageIndex',
          meta: {
            title: '成本核算管理-分析和报告-成本总览', // 总体成本情况，可视化组件，包括总成本、成本占比、成本趋势等概览信息
            cacheSpaceKey: CacheSpaceKeys.costAnalysis
          },
          component: () => import('@/modules/Result/pages/overview.vue')
        },
        {
          path: 'structure',
          name: 'CostAnalysisManageStructure',
          meta: {
            title: '成本核算管理-分析和报告-成本结构',
            cacheSpaceKey: CacheSpaceKeys.costAnalysis
          },
          component: () => import('@/modules/Result/pages/overview.vue')
        },
        {
          path: 'diff',
          name: 'CostAnalysisManageLog',
          meta: {
            title: '成本核算管理-分析和报告-成本比较',
            cacheSpaceKey: CacheSpaceKeys.costAnalysis
          },
          component: () => import('@/modules/Result/pages/overview.vue')
        },
        {
          path: 'diff',
          name: 'CostAnalysisManageLog',
          meta: {
            title: '成本核算管理-分析和报告-成本比较',
            cacheSpaceKey: CacheSpaceKeys.costAnalysis
          },
          component: () => import('@/modules/Result/pages/overview.vue')
        },
        {
          path: ':datasetId', // 每个成本对应多个报表
          name: 'CostAnalysisManageDetail',
          redirect: {
            name: 'CostAnalysisManageDetailPreview'
          },
          children: [
            {
              path: 'preview',
              name: 'CostAnalysisManageDetailPreview',
              meta: {
                title: '成本核算管理-分析和报告-报表列表',
                cacheSpaceKey: CacheSpaceKeys.costAnalysis
              },
              component: () => import('@/modules/Result/pages/overview.vue')
            },
            {
              path: ':reportId',
              name: 'CostAnalysisManageDetailReport',
              children: [
                {
                  path: 'report-info',
                  name: 'CostAnalysisManageDetailReportInfo',
                  meta: {
                    title: '成本核算管理-分析和报告-报表查看',
                    cacheSpaceKey: CacheSpaceKeys.costAnalysis
                  },
                  component: () => import('@/modules/Result/pages/overview.vue')
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
        name: 'GroupProjectOverview'
      },
      children: [
        {
          path: 'overview', // overview 类似驾驶舱
          name: 'GroupProjectOverview',
          meta: {
            title: '项目整体概况'
          },
          component: () => import('@/modules/HomeFront/pages/overview.vue')
        },
        {
          path: 'dashboard',
          name: 'DashboardIndex',
          meta: {
            title: 'Dashboard'
          },
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
        _routesWorkPlatform
      ]
    }
  ]
}
