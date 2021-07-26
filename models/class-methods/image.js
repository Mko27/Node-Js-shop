module.exports = (Image, sequelize) => {
    Tag.findById = (id) => {
        const query = {
            where: {
                id
            },
            raw: true
        }

        return Image.findOne(query)
    }

    Image.findAll = () => {
        
    }
    return Image
}