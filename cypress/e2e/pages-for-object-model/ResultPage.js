class ResultPage {

    elements = {
        playlist : () => cy.contains('API Testing by Testers Talk☑️'),
    }

    goToPlaylist() {
        this.elements.playlist().click();
    }

}

module.exports = new ResultPage();