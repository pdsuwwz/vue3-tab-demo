import { NIcon } from 'naive-ui'

import {
  MenuOutlined as IconMenuOutlined,
  TeamOutlined as IconTeamOutlined
} from '@vicons/antd'
import {
  Components as IconComponents,
  Menu as IconMenu,
  ReportMoney as IconReportMoney,
  UserCheck as IconUserCheck
} from '@vicons/tabler'
import {
  DataBackup as IconDataBackup,
  DataCheck as IconDataCheck,
  DataCollection as IconDataCollection,
  DataViewAlt as IconDataViewAlt,
  Report as IconReport,
  TableSplit as IconTableSplit,
  TextLinkAnalysis as IconTextLinkAnalysis
} from '@vicons/carbon'
import {
  TextAlignDistributed24Filled as IconTextAlignDistributed24Filled
} from '@vicons/fluent'
import { RouterLink } from 'vue-router'


function renderIcon (icon: Component) {
  return () => h(
    NIcon,
    null,
    {
      default: () => h(icon)
    }
  )
}

function renderLink (labelText: string, routeName: RouteRecordName) {
  return () => h(
    RouterLink,
    {
      to: {
        name: routeName
      }
    },
    {
      default: () => labelText
    }
  )
}


export const _menuOptions: MenuOption[] = [
  {
    type: 'group',
    label: '成员管理',
    key: 'MemberTeamManageRoot',
    children: [
      {
        label: '团队成员',
        key: 'MemberTeamManageRoot',
        icon: renderIcon(IconTeamOutlined)
      },
      {
        label: '角色权限分配',
        key: 'MemberAccessManageRoot',
        icon: renderIcon(IconUserCheck)
      }
    ]
  },
  {
    type: 'group',
    label: '资料管理',
    key: 'MaterialPrepareManageRoot',
    children: [
      {
        label: '资料准备',
        key: 'MaterialPrepareManageRoot',
        icon: renderIcon(IconDataCheck)
      },
      {
        label: '资料审阅',
        key: 'MaterialReviewManageRoot',
        icon: renderIcon(IconDataViewAlt)
      },
      {
        label: '备份与恢复',
        key: 'MaterialBackupManageRoot',
        icon: renderIcon(IconDataBackup)
      }
    ]
  },
  {
    type: 'group',
    label: '成本核算',
    key: 'CostBudgetManageRoot',
    children: [
      {
        label: '预算设定',
        key: 'CostBudgetManageRoot',
        icon: renderIcon(IconReportMoney)
      },
      {
        label: '数据收集',
        key: 'CostCollectionManageRoot',
        icon: renderIcon(IconDataCollection)
      },
      {
        label: '分配和归集',
        key: 'CostDistributeManageRoot',
        icon: renderIcon(IconTextAlignDistributed24Filled)
      },
      {
        label: '分析和报告',
        key: 'CostAnalysisManageRoot',
        icon: renderIcon(IconTextLinkAnalysis)
      }
    ]
  },
  {
    type: 'group',
    label: '组件示例',
    key: 'ExampleComponentRoot',
    children: [
      {
        label: '基础组件',
        key: 'ExampleComponentBasic',
        icon: renderIcon(IconComponents)
      },
      {
        label: '表格',
        key: 'ExampleComponentTable',
        icon: renderIcon(IconTableSplit)
      },
      {
        label: '表单',
        key: 'ExampleComponentForm',
        icon: renderIcon(IconReport)
      }
    ]
  },
  {
    type: 'group',
    label: '多级菜单',
    key: 'NestedLevelRoot',
    children: [
      {
        label: '1-1',
        key: 'NestedLevelRoot',
        icon: renderIcon(IconMenuOutlined)
      },
      {
        label: '1-2',
        key: 'NestedLevel12',
        icon: renderIcon(IconMenuOutlined),
        children: [
          {
            label: '2-1',
            key: 'NestedLevel21',
            icon: renderIcon(IconMenu)
          },
          {
            label: '2-2',
            key: 'NestedLevel22',
            icon: renderIcon(IconMenu),
            children: [
              {
                label: '3-1',
                key: 'NestedLevel31',
                icon: renderIcon(IconMenu)
              },
              {
                label: '3-2',
                key: 'NestedLevel32',
                icon: renderIcon(IconMenu)
              },
              {
                label: '3-3',
                key: 'NestedLevel33',
                icon: renderIcon(IconMenu),
                children: [
                  {
                    label: '4-1',
                    key: 'NestedLevel41',
                    icon: renderIcon(IconMenu)
                  },
                  {
                    label: '4-2',
                    key: 'NestedLevel42',
                    icon: renderIcon(IconMenu)
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        label: '1-3',
        key: 'NestedLevel13',
        icon: renderIcon(IconMenuOutlined)
      },
      {
        label: '1-4',
        key: 'NestedLevel14',
        icon: renderIcon(IconMenuOutlined)
      }
    ]
  }
]
