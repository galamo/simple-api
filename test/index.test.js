const { expect } = require("chai")
const axios = require("axios")

describe("Test Countries", () => {
    it("GET /countries", async () => {
        const result = await axios.get("http://localhost:3500/countries")
        expect(result.status).to.be.equal(200)
    })
})