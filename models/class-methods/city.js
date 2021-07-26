module.exports = (City, sequelize) => {
    City.findById = (id) => {
        const query = {
            where: {
                id
            },
            raw: true
        }

        return City.findOne(query)
    }

    City.findAll = () => {
        
    }
    return City
}