require("dotenv").config();
const bandSearch = require("./bandSearch.js")
const movieSearch = require("./movieSearch.js")
const spotifySearch = require("./spotifySearch.js")
const qualifier = process.argv[2];
const search = process.argv.slice(3).join("+");

switch(qualifier.toLowerCase()){

    case("song"):
        spotifySearch(search);
        break;

    case("concert"):
        bandSearch(search)
        break;

    case("movie"):
        movieSearch(search)
        
    break;
}
