const express = require("express")
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger/index.json');
const data = require("./data/countries.json")
const bodyParser = require("body-parser")
const app = express();
const PORT = 3500;

app.use(bodyParser.json({ extended: true }))
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.use((req, res, next) => {
    if (req.headers.authorization === "1") return next()
    return res.status(500).json({ message: "err" })
})

app.get("/countries", (req, res, next) => {
    res.json(data)
})

app.get("/country/:name", (req, res, next) => {
    const countryName = req.params.name;
    if (countryName.length > 50) return res.json({ message: "error country name is too long" })
    const result = data.filter(c => c.name.common.toLowerCase() === countryName)
    if (!result.length) return res.status(404).json({ message: "not found" })
    res.json(result)
})
app.delete("/country/:name", (req, res, next) => {
    res.status(204).json(data)
})

app.post("/countries", (req, res, next) => {
    res.json(data)
})





app.listen(PORT, () => {
    console.log(`Server is Up and Running on Port: ${PORT}`)
})