import * as GoogleDocs from './GoogleDocsAPI/CreateNewGoldSheet';
import * as warcraftLogs from './WarcraftLogsAPI/GetCharacters';


warcraftLogs.getCharacters("https://www.warcraftlogs.com/v1/report/fights/WdcKM4FH6zQkDvnh?api_key=93e3627c72a14d3cb365219e30036eeb").then(
    (characters: String[])=>{
        console.log("Characters: " + characters[1]);
        GoogleDocs.DocTest(characters);        
    }
);






