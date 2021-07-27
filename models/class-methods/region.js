module.exports = (Region, sequelize) => {
    console.log('21312321321323')
    Region.findById = (id) => {
        const query = {
            where: {
                id
            },
            raw: true
        }

        return Region.findOne(query)
    }

    Region.getRegions = () => {
        console.log('Get regions')
        return Region.findAll()
    }

    Region.add = () => {
        console.log('Add regions')
    }
    
    return Region
}