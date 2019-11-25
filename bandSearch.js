moment = require("moment")
const axios = require("axios")

function bandSearch(userInput){
    console.log("----SEARCHING----")
    const bandsURL = "https://rest.bandsintown.com/artists/" + userInput + "/events?app_id=codingbootcamp"
    axios.get(bandsURL).then(function(response){
        console.log("====DATA FOUND====")
          console.log(`
          ------------------
          ${response.data.length} UPCOMING SHOWS`)
          console.log(`
          ------------------
          SOONEST PERORMANCE
          ------------------
          `)
          console.log(`
          Date: ${moment(response.data[0].datetime).format("MM/DD/YYYY")}
          Performing: ${response.data[0].artist.name}
          Venue: ${response.data[0].venue.name}
                 ${response.data[0].venue.city}, ${response.data[0].venue.region}, ${response.data[0].venue.country}
          Tickets: ${response.data[0].offers[0].url}
          `)
      }).catch(function(error){
          console.log(error)
      })
    }

    module.exports = bandSearch