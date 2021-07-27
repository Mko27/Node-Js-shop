module.exports = (Region, sequelize) => {
    console.log('21312321321323')
    Region.findById = (id) => {
        const query = {
            where: {
                id
            },
            raw: true
        }
        console.log(query.where.id)
        return Region.findOne(query)
    }

    Region.getRegions = () => {
        console.log('Get regions')
        return Region.findAll()
    }

    Region.add = (name) => {
        console.log('Add regions')
        return Region.create({
            name
          })
    }
    
    return Region
}