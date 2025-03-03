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


    // Validate that data is an array and contains required properties
    it("Validate that data is an array and contains required properties", function(){
        cy.request("GET", "https://reqres.in/api/unknown").then((jsonData) => {
            // Validate that "data" is an array and not empty
            expect(jsonData.body.data).to.be.an("array").that.is.not.empty;
    
            // Iterate through each item in the array and validate properties
            jsonData.body.data.forEach((item) => {
                expect(item).to.have.property("id");
                expect(item).to.have.property("name");
                expect(item).to.have.property("year");
                expect(item).to.have.property("color");
                expect(item).to.have.property("pantone_value");
            });
        });
    });

        // Validate that support object contains required properties
    it("Validate that support object contains required properties", function(){
        cy.request("GET", "https://reqres.in/api/unknown").then((jsonData) => {
            // Validate that "support" object exists
            expect(jsonData.body).to.have.property("support");
    
            // Validate that "support" object contains required properties
            expect(jsonData.body.support).to.have.property("url");
            expect(jsonData.body.support).to.have.property("text");
        });
    });

    // Validate the value of the support object properties
    it("Validate the value of the support object property", function(){
        cy.request("GET", "https://reqres.in/api/unknown").then((jsonData) => {
            // Validate the value of support object property
            expect(jsonData.body.support.url).to.equal("https://contentcaddy.io?utm_source=reqres&utm_medium=json&utm_campaign=referral");
            expect(jsonData.body.support.text).to.equal("Tired of writing endless social media content? Let Content Caddy generate it for you.");
        });
    });
    




    
});
