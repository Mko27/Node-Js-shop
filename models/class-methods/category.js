module.exports = (Category, sequelize) => {
    Category.findById = (id) => {
        const query = {
            where: {
                id
            },
            raw: true
        }

        return Category.findOne(query)
    }

    Category.findAll = () => {
        
    }
    return Category
}