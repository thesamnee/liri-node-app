const axios = require("axios")

function movieSearch(userInput){
    console.log("----SEARCHING----")
    movieURL = "http://www.omdbapi.com/?t=" + userInput + "&apikey=trilogy"
        axios.get(movieURL).then(function(response){
            console.log("====DATA FOUND====")
            data = response.data
            console.log(`
            Title: ${data.Title}
            Year: ${data.Year}
            Director: ${data.Director}
            Plot: ${data.Plot}
            `)
        }).catch(function(error){
            console.log(error)
        })
    }

    module.exports = movieSearch