describe("login unsuccessful", function () {
    it("Create a new resource using POST", function () {
        cy.request({
            method: "POST",
            url: "https://reqres.in/api/login", // API endpoint
            body: {
                email: "peter@klaven"
            
            },
            failOnStatusCode: false 
        }).then((jsonData) => {
            // Log response for debugging
            cy.log("Response Body: ", jsonData.body);
            console.log("Response:", jsonData);

            // Validate response status
            expect(jsonData.status).to.eq(400); // 201 means resource created

            // Validate response body and values
            expect(jsonData.body).to.have.property("error", "Missing password");
            
       
        });
    });
});