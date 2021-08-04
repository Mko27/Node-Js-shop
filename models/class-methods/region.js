module.exports = (Region, sequelize) => {
    Region.findById = (id) => {
        const query = {
            where: {
                id
            }
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
            }
        }
        return Region.destroy(query)
    }

    Region.updateName = (id, name) => {
        const query = {
            where: {
                id
            }
        }
        return Region.update({name}, query)
    }
    
    return Region
}