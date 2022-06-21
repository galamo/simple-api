const express = require("express")
const data = require("./data/index.json")

const app = express();



app.get("/countries", (req, response, next) => {
    response.json(data)
})

app.get("/country/:name", (req, response, next) => {
    const countryName = req.params.name
    console.log("country name:", countryName)
    if (countryName.length > 30) response.status(400).json({ message: "Country name is too long " })
    const result = data.filter(country => country.name.common.toLowerCase() === countryName)
    response.json(result)
})


app.listen(3500, () => {
    console.log("Api is starting")
})