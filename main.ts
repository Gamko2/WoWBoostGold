import * as GoogleDocs from './GoogleDocsAPI/CreateNewGoldSheet';
import * as warcraftLogs from './WarcraftLogsAPI/GetCharacters';
import * as dateInfo from './WarcraftLogsAPI/getDate';
import * as Discord from './Discord/notEnvy'
let args: string[] = process.argv.slice(2)
let logDate: string;

dateInfo.getDate("https://www.warcraftlogs.com/v1/report/fights/" + args[0] +"?api_key=93e3627c72a14d3cb365219e30036eeb").then((date =>{
    logDate = date;
    warcraftLogs.getCharacters("https://www.warcraftlogs.com/v1/report/fights/" + args[0] +"?api_key=93e3627c72a14d3cb365219e30036eeb").then(
    (characters: string[])=>{
        console.log(characters[1]);
        console.log(logDate);
        GoogleDocs.DocTest(characters, logDate).then((result)=>{
        Discord.newBoost();  
        }
        );  
            
    }

);
})


)









