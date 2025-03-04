describe("API Testing with Cypress", function () {
    it("Create a new resource using POST", function () {
        cy.request({
            method: "POST",
            url: "https://reqres.in/api/users", // API endpoint
            body: {
                name: "Damola",
                job: "Software Tester"
            }
        }).then((jsonData) => {
            // Log response for debugging
            cy.log("Response Body: ", response.body);
            console.log("Response:", response);

            // Validate response status
            expect(response.status).to.eq(201); // 201 means resource created

            // Validate response body
            expect(jsonData.body).to.have.property("name", "Damola");
            expect(jsonData.body).to.have.property("job", "Software Tester");
            expect(jsonData.body).to.have.property("id"); // API generates an ID
            expect(jsonData.body).to.have.property("createdAt"); // Timestamp of creation
        });
    });
});
