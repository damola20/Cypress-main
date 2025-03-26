describe('api tests', () =>{
    it('should validate the property and list of users returned', () =>{
        cy.request('GET', 'https://reqres.in/api/users?page=2').then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('data')
            expect(response.body.data).to.not.be.empty
            expect(response.body.data).to.have.length(6) //  ensure 6 users are returned 
          
        })
    })
    it('should create another user', () => {
        cy.request('POST', 'https://reqres.in/api/users', {
            name: 'John Doe',
            job: 'Developer'
        }).then((response) => {
            expect(response.status).to.eq(201)
            expect(response.body).to.have.property('name', 'John Doe')
            expect(response.body).to.have.property('job', 'Developer')
        })
    })

    it('should update the created user', () => {
        cy.request('GET', 'https://reqres.in/api/users?page=2').then((response) => {
            const userId = response.body.data[0].id
            cy.request('PUT', `https://reqres.in/api/users/${userId}`, {
                name: 'Jane Doe',
                job: 'QA'
            }).then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).to.have.property('name', 'Jane Doe')
                expect(response.body).to.have.property('job', 'QA')
            })
        })
    })

    it('should delete the created user', () => {
        cy.request('GET', 'https://reqres.in/api/users?page=2').then((response) => {
            const userId = response.body.data[0].id
            cy.request('DELETE', `https://reqres.in/api/users/${userId}`).then((response) => {
                expect(response.status).to.eq(204)
            })
        })
    })
    
})