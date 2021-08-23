module.exports = (Product, sequelize) => {
    Product.findById = (id) => {
        const query = {
            where: {
                id
            },
            raw: true
        }

        return Product.findOne(query)
    }

    Product.findAll = () => {
        
    }
    return Product
}