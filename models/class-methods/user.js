module.exports = (User, sequelize) => {
  User.findById = (id) => {
    const query = {
      where: {
        id
      },
      raw: true
    }

    return User.findOne(query)
  }

  User.getUsers = () => {
    return User.findAll()
  }

  User.registration = (user) => {
    console.log('user registration')
    return User.create(user)
  }

  User.findByEmail = (email) => {
    const query = {
      where: {
        email
      },
      raw: false
    }
    console.log(query.where.email)
    return User.findOne(query)
  }

  return User
}
