import { NIcon } from 'naive-ui'
import type { MenuOption } from 'naive-ui'
import {
  TeamOutlined as IconTeamOutlined,
  ProfileOutlined as IconProfileOutlined,
  MenuOutlined as IconMenuOutlined
} from '@vicons/antd'
import {
  Users as IconUsers,
  ReportMoney as IconReportMoney,
  Components as IconComponents,
  Menu as IconMenu,
  UserCheck as IconUserCheck
} from '@vicons/tabler'
import {
  DataCheck as IconDataCheck,
  DataViewAlt as IconDataViewAlt,
  DataBackup as IconDataBackup,
  Report as IconReport,
  TableSplit as IconTableSplit,
  DataCollection as IconDataCollection,
  TextLinkAnalysis as IconTextLinkAnalysis
} from '@vicons/carbon'
import {
  TableSimple16Regular as IconTableSimple16Regular,
  TextAlignDistributed24Filled as IconTextAlignDistributed24Filled
} from '@vicons/fluent'
import {
  AssignmentTurnedInOutlined as IconAssignmentTurnedInOutlined
} from '@vicons/material'

function renderIcon (icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}



export const _menuOptions: MenuOption[] = [
  {
    // type: 'group',
    label: '成员管理',
    key: 'member',
    icon: renderIcon(IconUsers),
    children: [
      {
        label: '团队成员',
        key: 'member-index',
        icon: renderIcon(IconTeamOutlined)
      },
      {
        label: '角色权限分配',
        key: 'member-role',
        icon: renderIcon(IconUserCheck)
      }
    ]
  },
  {
    // type: 'group',
    label: '资料管理',
    key: 'ziliaoguanli',
    icon: renderIcon(IconProfileOutlined),
    children: [
      {
        label: '资料准备',
        key: 'ziliaoguanli-1',
        icon: renderIcon(IconDataCheck)
      },
      {
        label: '资料审阅',
        key: 'ziliaoguanli-2',
        icon: renderIcon(IconDataViewAlt)
      },
      {
        label: '备份与恢复',
        key: 'ziliaoguanli-3',
        icon: renderIcon(IconDataBackup)
      }
    ]
  },
  {
    // type: 'group',
    label: '成本核算',
    key: '成本核算',
    icon: renderIcon(IconReportMoney),
    children: [
      {
        label: '预算设定',
        key: '预算设定',
        icon: renderIcon(IconAssignmentTurnedInOutlined)
      },
      {
        label: '数据收集',
        key: '数据收集',
        icon: renderIcon(IconDataCollection)
      },
      {
        label: '分配和归集',
        key: '分配和归集',
        icon: renderIcon(IconTextAlignDistributed24Filled)
      },
      {
        label: '分析和报告',
        key: '分析和报告',
        icon: renderIcon(IconTextLinkAnalysis)
      }
    ]
  },
  {
    // type: 'group',
    label: '组件示例',
    key: 'example-component',
    icon: renderIcon(IconComponents),
    children: [
      {
        label: '基础组件',
        key: 'example-component-basic',
        icon: renderIcon(IconTableSimple16Regular)
      },
      {
        label: '表格',
        key: 'example-component-table',
        icon: renderIcon(IconTableSplit)
      },
      {
        label: '表单',
        key: 'example-component-form',
        icon: renderIcon(IconReport)
      }
    ]
  },
  {
    // type: 'group',
    label: '多级菜单',
    key: 'multiple-level',
    icon: renderIcon(IconMenuOutlined),
    children: [
      {
        label: '1-1',
        key: '1-1',
        icon: renderIcon(IconMenu)
      },
      {
        label: '1-2',
        key: '1-2',
        icon: renderIcon(IconMenu),
        children: [
          {
            label: '2-1',
            key: '2-1',
            icon: renderIcon(IconMenu)
          },
          {
            label: '2-2',
            key: '2-2',
            icon: renderIcon(IconMenu),
            children: [
              {
                label: '3-1',
                key: '3-1',
                icon: renderIcon(IconMenu)
              },
              {
                label: '3-2',
                key: '3-2',
                icon: renderIcon(IconMenu)
              },
              {
                label: '3-3',
                key: '3-3',
                icon: renderIcon(IconMenu),
                children: [
                  {
                    label: '4-1',
                    key: '4-1',
                    icon: renderIcon(IconMenu)
                  },
                  {
                    label: '4-2',
                    key: '4-2',
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
        key: '1-3',
        icon: renderIcon(IconMenu)
      },
      {
        label: '1-4',
        key: '1-4',
        icon: renderIcon(IconMenu)
      }
    ]
  }
]
