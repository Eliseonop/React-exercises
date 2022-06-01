import { ROLES } from './roles.enum'

export class User {
  username = ''
  email = ''
  password = ''
  role = ROLES.USER
  constructor (name, email, password, role) {
    this.name = name
    this.email = email
    this.password = password
    this.role = role
  }
}
