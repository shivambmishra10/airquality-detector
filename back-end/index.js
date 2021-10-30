const express = require('express')
const app = express()
const path = require('path')
const request = require('request')
const airquality = require('./utils/air.js')
app.use(express.json())
const public = path.join(__dirname, '../front-end')
app.use(express.static(public))
const port = process.env.PORT || 3000
app.get('/airquality', (req, res) => {
    if (!req.query.address)
        return res.send({ error: 'You must provide a address term' })
    airquality(req.query.city, req.query.state, (error, dataset) => {
        if (error)
            return res.send({ error })
        res.send({
            aqius: dataset.aqius,
            aqicn: dataset.aqicn
        })
    })

})
app.listen(port, () => {
    console.log('port connected')
})

