module.exports = {

    getHouses: (req, res) => {
        req.app.get('db').get_houses().then((houses) => {
            res.status(200).send(houses)
        })
    },

    addHouse: (req, res) => {
        let {name, address, city, state, zipcode, image, mortgage, desiredRent} = req.body;
        req.app.get('db').create_house([name, address, city, state, zipcode, image, mortgage, desiredRent]).then(() => {
            req.status(200).send('Added House!')
        })
    },

    deleteHouse: (req, res) => {
        let {id} = req.params;
        req.app.get('db').remove_house([id]).then(() => {
            req.status(200).send('House Removed!')
        })
    }
}