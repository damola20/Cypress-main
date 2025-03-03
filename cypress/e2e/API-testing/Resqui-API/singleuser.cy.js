describe("single user", function () {
    it("Validate object structure", function(){
        cy.request("GET", "https://reqres.in/api/users/2").then((jsonData) => {

            // Validate response property
            expect(jsonData.status).to.eq(200);
            expect(jsonData.body).to.have.property("data");
            expect(jsonData.body).to.have.property("support");

        });
    });

    // Validate user data object property
    it("Validate user data object property and values", function(){
        cy.request("GET", "https://reqres.in/api/users/2").then((jsonData) => {

            // Validate data property and values
            expect(jsonData.status).to.eq(200);
            expect(jsonData.body.data).to.have.property("id", 2);
            expect(jsonData.body.data).to.have.property("email", "janet.weaver@reqres.in");
            expect(jsonData.body.data).to.have.property("first_name", "Janet");
            expect(jsonData.body.data).to.have.property("last_name", "Weaver");
            expect(jsonData.body.data).to.have.property("avatar", "https://reqres.in/img/faces/2-image.jpg");
            

        });
    });

    // validate support property and values
    it("Validate support object property and values", function(){
        cy.request("GET", "https://reqres.in/api/users/2").then((jsonData) => {

            // Validate support property values
            expect(jsonData.status).to.eq(200);
            expect(jsonData.body.support).to.have.property("url", "https://contentcaddy.io?utm_source=reqres&utm_medium=json&utm_campaign=referral");
            expect(jsonData.body.support).to.have.property("text", "Tired of writing endless social media content? Let Content Caddy generate it for you.");       
        });
    });
})