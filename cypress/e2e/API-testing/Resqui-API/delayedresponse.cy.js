describe("list users api", function (){
    it("List users and validate structure of the JSON response", function(){
        cy.request("GET", "https://reqres.in/api/users?page=3").then((jsonData) => {

            // Validate json response structure
            expect(jsonData.status).to.eq(200);
            expect(jsonData.body).to.have.property("data");
            expect(jsonData.body).to.have.property("per_page");
            expect(jsonData.body).to.have.property("total");
            expect(jsonData.body).to.have.property("total_pages");
            expect(jsonData.body).to.have.property("support");
            expect(jsonData.body).to.have.property("page");
        });
    });


        // Validate array isnt empty and also property of data array 
        it("Validate user data", function(){
            cy.request("GET", "https://reqres.in/api/users?page=3").then((jsonData) => {
                // Validate that "data" is an array and not empty
                expect(jsonData.body.data).to.be.an("array")
        
                // Iterate through each item in the array and validate properties
                jsonData.body.data.forEach((user) => {
                    expect(user).to.have.property("id");
                    expect(user).to.have.property("email");
                    expect(user).to.have.property("first_name");
                    expect(user).to.have.property("last_name");
                    expect(user).to.have.property("avatar");
                });
            });
        });

                     // Validate that support object contains required properties
      it("Validate that support object contains required properties", function(){
        cy.request("GET", "https://reqres.in/api/users?page=3").then((jsonData) => {
            // Validate that "support" object exists
            expect(jsonData.body).to.have.property("support");
    
            // Validate that "support" object contains required properties and values  
            expect(jsonData.body.support).to.have.property("url", "https://contentcaddy.io?utm_source=reqres&utm_medium=json&utm_campaign=referral");
            expect(jsonData.body.support).to.have.property("text", "Tired of writing endless social media content? Let Content Caddy generate it for you.");
        });

     });

     //validate pages, per page, total and total pages value
     it("validate pages, per page, total and total pages value", function(){
        cy.request("GET", "https://reqres.in/api/users?page=3").then((jsonData) => {
            //validate pages, per page, total and total pages value
            expect(jsonData.body.page).to.equal(3);
            expect(jsonData.body.per_page).to.equal(6);
            expect(jsonData.body.total_pages).to.equal(2);
            expect(jsonData.body.total).to.equal(12);
        });
    });
})