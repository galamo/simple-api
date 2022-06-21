const { expect } = require("chai")
const axios = require("axios")

const axiosInstance = axios.create({ headers: { authorization: "1" } })

describe("Test the api Module", () => {
    it("/ Get Countries", async () => {
        const result = await axiosInstance.get("http://localhost:3500/countries")
        expect(result.status).to.be.equal(200)
    })
    it("/ DELETE Countries", async () => {
        const result = await axiosInstance.delete("http://localhost:3500/country/isr")
        expect(result.status).to.be.equal(204)
    })
    it("/ Get ISR", async () => {
        try {
            const result = await axiosInstance.get("http://localhost:3500/country/isr")
        } catch (ex) {
            expect(ex.response.status).to.be.equal(404)
        }
    })
})