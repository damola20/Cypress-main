class PlaylistPage {

    elements = {
        playlistTitle : () => cy.get('h1.style-scope.ytd-watch-metadata yt-formatted-string')
    }

}

module.exports = new PlaylistPage();