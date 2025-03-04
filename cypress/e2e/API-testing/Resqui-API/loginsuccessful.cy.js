describe("login successful", function () {
    it("Create a new resource using POST", function () {
        cy.request({
            method: "POST",
            url: "https://reqres.in/api/login", // API endpoint
            body: {
                "email": "eve.holt@reqres.in",
                "password": "cityslicka"
            
            }
        }).then((jsonData) => {
            // Log response for debugging
            cy.log("Response Body: ", jsonData.body);
            console.log("Response:", jsonData);

            // Validate response status
            expect(jsonData.status).to.eq(200); // 200 means resource successful

            // Validate response body and values
            expect(jsonData.body).to.have.property("token", "QpwL5tke4Pnpja7X4");
            
       
        });
    });
});