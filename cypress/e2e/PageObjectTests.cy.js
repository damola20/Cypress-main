import homePage from './pages-for-object-model/HomePage'
import resultPage from './pages-for-object-model/ResultPage'
import playlistPage from './pages-for-object-model/PlaylistPage'

describe('Page Object Test Suite', ()=>{

    it('Page Object Test1', ()=>{

        // Open youtube
        homePage.visit();

        //search in youtube
        homePage.searchInYoutube();

        //Go to playlist
        resultPage.goToPlaylist();

        //validate playlist title
        playlistPage.elements.playlistTitle().should('have.text','API Testing Postman Tutorial Full Course 2024')

    })

})