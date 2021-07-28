module.exports = (Region, sequelize) => {
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