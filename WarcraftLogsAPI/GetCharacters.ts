import * as alts from "../Util/alts.json";
import axios from 'axios';

export async function getCharacters(url: string): Promise<Array<string>> {
    let uniqueCharacters = [];
    return axios.get(url)
        .then(function (response) {
            console.log("Response length: " + response.data.exportedCharacters.length);
            console.log("Start time: " + response.data.start);
            let s = new Date(response.data.start).toLocaleTimeString("en-US")
            console.log(s)
            for (let i = 0; i < response.data.exportedCharacters.length; i++) {
                for (let key in alts.characters) {
                    for (let k = 0; k < alts.characters[key].length; k++) {
                        if (response.data.exportedCharacters[i].name == alts.characters[key][k].name) {
                            if (!uniqueCharacters.includes(key)) {
                                uniqueCharacters.push(key);
                            }
                        }
                    }
                }
            }
            console.log(uniqueCharacters);
            return uniqueCharacters;
            
        })
        .catch(function (error) {
            console.log(error);
            return null;
        })
}
