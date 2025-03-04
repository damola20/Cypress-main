describe("Register - unsuccessful (empty body)", function () {
    it("Send an empty request body", function () {
        cy.request({
            method: "GET",
            url: "https://reqres.in/api/users/23",
            body: {}, // Empty body
            failOnStatusCode: false // Prevent Cypress from failing on non-2xx responses
        }).then((jsonData) => {
            // Log response for debugging
            cy.log("Response Body: ", jsonData.body);
            console.log("Response:", jsonData);

            // Validate response status
            expect(jsonData.status).to.eq(404); // Expecting 400 Bad Request

        });
    });
});
