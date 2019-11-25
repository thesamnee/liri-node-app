const keys = require("./keys.js");
const Spotify = require('node-spotify-api');
const spotify = new Spotify(keys.spotify);


function spotifySearch(userInput){
    console.log("----SEARCHING----")
    spotify
    .search({ type: 'track', query: userInput, limit: 5 })
    .then(function(response) {
        console.log("====DATA FOUND====")
        data = response.tracks.items[0]
        console.log(`
        ----------------------------
        Title: ${data.name}

        Artist: ${data.artists[0].name}

        Album: ${data.album.name}

        Track No.: ${data.track_number}

        Link: ${data.external_urls.spotify}
        -----------------------------
        `);
    })
    .catch(function(err) {
        console.log(err);
    });
}

module.exports = spotifySearch