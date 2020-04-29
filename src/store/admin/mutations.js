/**
 * mutations直接修改数据对象state，注意这里的方法必须是同步方法
 */
import {
  ADD_USER, DELETE_USER
} from '../mutation-types'

export default {
  [ADD_USER] (state, { type, users }) {
    const { students, teachers, admins } = state
    switch (type) {
      case 'student':
        state.students = Array.isArray(users)
          ? students.concat(users)
          : [...students, users]
        break
      case 'teacher':
        state.teachers = Array.isArray(users)
          ? teachers.concat(users)
          : [...teachers, users]
        break
      default:
        state.admins = Array.isArray(users)
          ? admins.concat(users)
          : [...admins, users]
    }
  },
  [DELETE_USER] (state, { type, account }) {
    const { students, teachers, admins } = state
    switch (type) {
      case 'student':
        state.students = students.filter(item => account !== item.account)
        break
      case 'teacher':
        state.teachers = teachers.filter(item => account !== item.account)
        break
      default:
        state.admins = admins.filter(item => account !== item.account)
    }
  }
}
