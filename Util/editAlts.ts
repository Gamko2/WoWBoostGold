import * as alts from "./alts.json";
let fs = require('fs');



let args: string[] = process.argv.slice(2)
console.log("args: " + args);

switch (args[0]) {
    case 'add':
        console.log("Adding player");
        if (alts.characters.hasOwnProperty(args[1])) {
            let jsonObj = {
                name: args[2]
            } 
            console.log("Player exists: adding alt");
            alts.characters[args[1]].push(jsonObj);
            console.log(alts.characters[args[1]]);
            updateAlts(alts);
        }
        else {
            console.log("Player doesnt exist yet: Adding player");
            let jsonObj = [{
                name: args[2]
            }]
            alts.characters[args[1]] = jsonObj;
            console.log(args[1]);
            updateAlts(alts);



        }

        break
    case 'remove':
        if (args[2]){
            console.log("Removing alt character");
            for (let characterName in alts.characters ){
                if (characterName == args[1]){
                    console.log(alts.characters[args[1]].length);
                    
                    for (let i = 0; i< alts.characters[args[1]].length; i++){
                        if(args[2]== alts.characters[args[1]][i].name){
                            console.log(alts.characters[args[1][i]]);
                            alts.characters[args[1]].splice(i,1);
                            updateAlts(alts);
                        }
                        
                    }
                }
            }
        }

        else{
            console.log("Removing whole entry");
            delete alts.characters[args[1]];
            updateAlts(alts);
        }

        break;

    default: console.log("Unkown command");
}

export function updateAlts(alts: Object){
    fs.writeFileSync("alts.json", JSON.stringify(alts), (err, result) => {
        if (err) {
            console.log(err);
        }
    }); 
}