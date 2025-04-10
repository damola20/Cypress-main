describe("Register- successful", function () {
    it("Create a new resource using POST", function () {
        cy.request({
            method: "POST",
            url: "https://reqres.in/api/register", // API endpoint
            body: {
                email: "eve.holt@reqres.in",
                password: "pistol"
            }
        }).then((jsonData) => {
            // Log response for debugging
            cy.log("Response Body: ", jsonData.body);
            console.log("Response:", jsonData);

            // Validate response status
            expect(jsonData.status).to.eq(200); // 201 means resource created

            // Validate response body and values
            expect(jsonData.body).to.have.property("id", 4);
            expect(jsonData.body).to.have.property("token", "QpwL5tke4Pnpja7X4");
       
        });
    });
});
