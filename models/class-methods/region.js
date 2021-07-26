module.exports = (Region, sequelize) => {
    Region.findById = (id) => {
        const query = {
            where: {
                id
            },
            raw: true
        }

        return Region.findOne(query)
    }

    Region.findAll = () => {
        
    }
    return Region
}