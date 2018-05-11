const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const controller = require('../server/controller');

require('dotenv').config();

const app = express();
app.use(bodyParser.json());

    /* Connecting DataBase Through SeedFile */
massive(process.env.CONNECTION_STRING).then(dbInstance => {
    dbInstance.get_houses()
        .then((response) => console.log('Seed Succesful'))
            .catch((error) => console.log('Not Successful', error))

    app.set('db', dbInstance)
})

    /* End Points */
app.get('/api/houses', controller.getHouses);
app.post('/api/houses', controller.addHouse);
app.delete('/api/houses/:id', controller.deleteHouse);


    /* Port */
const port = 3005;
app.listen(port, console.log(`listening on ${port}`))