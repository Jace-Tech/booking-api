export default {
  roles: {
    ADMIN: ['admin'],
    MANAGER: ['admin', 'manager'],
    STAFF: ['admin', 'manager', 'staff'],
    STUDENT: ['admin', 'manager', 'staff', 'student']
  },
  mail: {
    host: "smtp.gmail.com",
    password: "",
    username: "",
    port: "465"
  }
}