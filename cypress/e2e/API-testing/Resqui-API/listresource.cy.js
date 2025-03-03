describe("reqres API methods", function(){
    it("List resource and validate structure of the JSON response", function(){
        cy.request("GET", "https://reqres.in/api/unknown").then((jsonData) => {
            // Log the full response
            cy.log(JSON.stringify(jsonData.body));
            console.log(jsonData.body); // Logs in the browser console

            // Validate response structure
            expect(jsonData.status).to.eq(200);
            expect(jsonData.body).to.have.property("data");
            expect(jsonData.body).to.have.property("per_page");
            expect(jsonData.body).to.have.property("total");
            expect(jsonData.body).to.have.property("total_pages");
            expect(jsonData.body).to.have.property("support");
            expect(jsonData.body).to.have.property("page");
        });
    });

    // Validate the number of pages per page and total pages 
    it("Validate the number of pages, per page, and total pages", function(){
        cy.request("GET", "https://reqres.in/api/unknown").then((jsonData) => {
             // Validate values
        expect(jsonData.body.page).to.equal(1);
        expect(jsonData.body.per_page).to.equal(6);
        expect(jsonData.body.total).to.equal(12);
        expect(jsonData.body.total_pages).to.equal(2)
        });
    });
    
});
