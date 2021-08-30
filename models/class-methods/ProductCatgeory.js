module.exports = (ProductCategory, sequelize) => {
    ProductCategory.findById = (id) => {
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