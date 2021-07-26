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

    User.findAll = () => {
        
    }
    return User
}