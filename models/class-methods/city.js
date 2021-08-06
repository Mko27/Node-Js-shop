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

    City.getCities = () => {
        console.log('Get Cities')
        return City.findAll()
    }
    return City
}