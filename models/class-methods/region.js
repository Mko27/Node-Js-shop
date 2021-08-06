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

    Region.createRegion = (region) => {
        //console.log(region)
        console.log("Region created");
        console.log(region)
        return Region.create(region)
    }

    Region.deleteRegionById = (id) => {
        const query = {
            where: {
                id
            },
            raw: true
        }
        return Region.destroy(query)
    }

    Region.updateRegionById = (id, data) => {
        const query = {
            where: {
                id
            },
            raw: true
        }
        return Region.update(data, query)
    }
    
    return Region
}