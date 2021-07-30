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
        return Region.findAll({attributes : ['name']})
    }

    Region.add = (region) => {
        //console.log(region)
        console.log("Add region");
        console.log(region)
        return Region.create(region)
    }

    Region.delete = (id) => {
        const query = {
            where: {
                id
            },
            raw: true
        }
        return Region.destroy(query)
    }
    
    return Region
}