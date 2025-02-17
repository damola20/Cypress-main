import invalidLoginPage from '../orange-POM/InvalidLogin';
import LoginPage from '../orange-POM/login'; // Adjust the path based on your project structure
import blankfieldPage from '../orange-POM/Blankfield'; 
import NegativeTestsPage from '../orange-POM/Negativetests';
import EmployeePage from '../orange-POM/employee';
import RequirementPage from '../orange-POM/requirement';
import InfoPage from '../orange-POM/myInfo';
describe('Login Test Suite', () => {
    // valid login test 
    it('should log in successfully', () => {
        const loginPage = new LoginPage();
        const username = 'Admin'; // Replace with valid test username
        const password = 'admin123'; // Replace with valid test password
        loginPage.login(username, password);
    });
    // Invalid login test
    it('Should display error message when logged in with invalid credentials', () => {
        const invalidloginPage = new invalidLoginPage()
        const username = 'sfff'; // Replace with invalid test username
        const password = 'okl2355'; // Replace with invalid test password
        invalidloginPage.InvalidLogin(username, password);
    })
});


describe('Blankfield tests', () =>{
    it('should display error message when logged in with empty field', () => {
        const BlankfieldPage = new blankfieldPage()
        const username = "fffidj"; // Replace with empty test username
        BlankfieldPage.blankfieldLogin(username);
    })
}) 

describe('Negative test suite', () => {
    it('should assert blank field text and a text that says(No records Found)', () => {
        const NegativetestPage = new NegativeTestsPage()
        const username = "Admin"
        const Password = "admin123"
        NegativetestPage.negativetestpage(username, Password);
    })
})

describe('Employee page tests', () =>{
    it('this should add an employee and also delete an employee', () => {
        const Employeetest = new EmployeePage()
        Employeetest.employeeTests()
    })

    describe('requirementpage tests', () => {
        it('it should be able to add a new requirement and assert error message with an empty field', () => {
            const requirement = new RequirementPage()
            const username = "Admin"
            const password = "admin123"
            requirement.requirementpage(username, password)
        })
    })
    describe.only('Info page tests', () => {
        it('it should be able to add a new requirement and assert error message with an empty field', () => {
            const infotest = new InfoPage()
            infotest.infotests()
        })
    })
})







