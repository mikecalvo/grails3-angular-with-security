package grails.security

class UserRole {

  User user
  Role role

  UserRole(User u, Role r) {
    this()
    user = u
    role = r
  }

  static constraints = {
  }
}
