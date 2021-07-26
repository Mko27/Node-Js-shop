module.exports = (ProductCategory, sequelize) => {
    Tag.findById = (id) => {
        const query = {
            where: {
                id
            },
            raw: true
        }

        return ProductCategory.findOne(query)
    }

    ProductCategory.findAll = () => {
        
    }
    return ProductCategory
}