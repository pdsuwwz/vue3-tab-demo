/**
 * 方法一
 */

// 定义：
/**
 * 团队成员
 */
export namespace TypesMemberTeam {
  /**
   * 团队成员-个人信息
   */
  export interface TypeMemberPerson {
    username: string
    roleId: string
    userId: string
    avatar: string
    email: string
    phone: string
    rank: string
    /**
     * 1活跃, 0停用
    */
    memberStatus: number | null | undefined
  }
}


// 使用时：

/**
  import type { TypesMemberTeam } from '@/modules/MemberTeam/types'

  const a: TypesMemberTeam.TypeMemberPerson = {
    username: '',
    roleId: '',
    userId: '',
    avatar: '',
    email: '',
    phone: '',
    rank: '',
    memberStatus: undefined
  }
  console.log(a)
 */


/** ------------------------- 分割线 ------------------------- */


/**
 * 方法二 （不太推荐，会导致循环引用）
 */
// 需要 auto-import 定义：dirs: ['./src/modules/**/types']

// /**
//  * 团队成员-个人信息
//  */
// export interface TypeMemberPerson {
//   username: string
//   roleId: string
//   userId: string
//   avatar: string
//   email: string
//   phone: string
//   rank: string
//   /**
//    * 1活跃, 0停用
//   */
//   memberStatus: number | null | undefined
// }

// /**
//  * 团队成员
//  */
// export * as TypesMemberTeam from '.'
// export as namespace TypesMemberTeam

// 使用时：

/**
 * 无需引入即可使用

  const a: TypesMemberTeam.TypeMemberPerson = {
    username: '',
    roleId: '',
    userId: '',
    avatar: '',
    email: '',
    phone: '',
    rank: '',
    memberStatus: undefined
  }
  console.log(a)
 */
