describe('Learning api test', () => {
    //  comments list test
    it('simple api intercept/ spy api request for comments list', () => {
        cy.visit('https://dummyapi.io/explorer') 

        cy.intercept({
            path: '/data/v1/post/60d21af267d0d8992e610b8d/comment?limit=10'
        }).as('comments')

        cy.contains('.flex.flex-wrap.-m-1 > *', 'Comments List').click()
        cy.wait('@comments').then((interception) => {
            expect(interception.request.method).to.eq('GET')
            expect(interception.response.statusCode).to.eq(200)
            expect(interception.response.body.data).to.have.length(3)
            expect(interception.response.body.limit).to.equal(10)
            
        })
    })
   
    // this a mock test where there is no actual api request but a mock response is used
    it('mock Api response', () => {
        cy.visit('https://dummyapi.io/explorer') 

        cy.intercept('GET', '/data/v1/post/60d21af267d0d8992e610b8d/comment?limit=10', {limit:20, Name: "damola bamijoko", length: 20}).as('mockup')
        cy.contains('.flex.flex-wrap.-m-1 > *', 'Comments List').click()
        cy.wait('@mockup').then((intercept) => {
            expect(intercept.request.method).to.eq('GET')
            expect(intercept.response.statusCode).to.eq(200)
            expect(intercept.response.body.length).to.have.equal(20)
            expect(intercept.response.body.limit).to.equal(20)
            expect(intercept.response.body.Name).to.equal("damola bamijoko")
            
    

   
        })
    })
// users list test
    it('APi intercept for user list',  () => {
        cy.visit('https://dummyapi.io/explorer', {timeout: 60000})

        cy.intercept({
            path: '/data/v1/user?limit=10'
        }).as('userlimit')
        cy.contains('.flex.flex-wrap.-m-1 > *', 'Users List').click()

        cy.wait('@userlimit').then((interception) => {

            expect(interception.request.method).to.eq('GET')
            expect(interception.response.statusCode).to.eq(200)
            expect(interception.response.body.limit).to.equal(10)
        })
    })


    // post list test
    it('APi intercept for post list', () => {
        cy.visit('https://dummyapi.io/explorer')

        cy.intercept({
            path: '/data/v1/post?limit=10'
        }).as('postlimit')

        cy.contains('.flex.flex-wrap.-m-1 > *', 'Posts List').click()
        cy.wait('@postlimit').then((interception) => {
            expect(interception.request.method).to.eq('GET')
            expect(interception.response.statusCode).to.eq(200)
            expect(interception.response.body.limit).to.equal(10)
    
        })
    })

    // tag list test
    it('APi intercept for tag list', () => {
        cy.visit('https://dummyapi.io/explorer')

        cy.intercept({
            path: '/data/v1/tag?limit=10'
        }).as('taglimit')

        cy.contains('.flex.flex-wrap.-m-1 > *', 'Tag List').click()
        cy.wait('@taglimit').then((interception) => {
            expect(interception.request.method).to.eq('GET')
            expect(interception.response.statusCode).to.eq(200)
            
    
        })
    })
    
     // full user profile test
     it('APi intercept for full user profile list', () => {
        cy.visit('https://dummyapi.io/explorer')

        cy.intercept({
            path: '/data/v1/user/60d0fe4f5311236168a109ca'
        }).as('fulllimit')

        cy.contains('.flex.flex-wrap.-m-1 > *', 'Full User Profile').click()
        cy.wait('@fulllimit').then((interception) => {
            expect(interception.request.method).to.eq('GET')
            expect(interception.response.statusCode).to.eq(404)
            
    
        })
    })
})