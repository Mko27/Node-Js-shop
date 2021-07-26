module.exports = (ProductTag, sequelize) => {
    Tag.findById = (id) => {
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