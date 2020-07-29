const axios = require('axios');


   axios.get("https://www.warcraftlogs.com/v1/report/fights/WdcKM4FH6zQkDvnh?api_key=93e3627c72a14d3cb365219e30036eeb")
    .then(function(response){
        for(let i = 0; i< response.data.exportedCharacters.length; i++ ){
        console.log(response.data.exportedCharacters[i].name);
        }
    })
    .catch(function(error){
        console.log(error);
    })
    
