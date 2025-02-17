class HomePage {
    elements = {
        searchTextbox: () => cy.get('input[name="search_query"]').first(),
        searchIcon: () => cy.get('.YtSearchboxComponentSearchButton > yt-icon > .yt-icon-shape > div')

    };

    visit() {
        cy.visit('https://www.youtube.com/');
    }

    searchInYoutube() {
        this.elements.searchTextbox().type('api testing by testers talk');
        this.elements.searchIcon().click();
    }
}

module.exports = new HomePage();


