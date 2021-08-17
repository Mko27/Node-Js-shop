module.exports = (ProductTag, sequelize) => {
    ProductTag.findById = (id) => {
        const query = {
            where: {
                id
            },
            raw: true
        }

        return ProductTag.findOne(query)
    }

    ProductTag.findAll = () => {
        
    }
    return ProductTag
}