import * as alts from "../Util/alts.json";
import axios from 'axios';

export async function getCharacters(url: String): Promise<Array<string>> {
    let uniqueCharacters = [];
    return axios.get("https://www.warcraftlogs.com/v1/report/fights/WdcKM4FH6zQkDvnh?api_key=93e3627c72a14d3cb365219e30036eeb")
        .then(function (response) {
            for (let i = 0; i < response.data.exportedCharacters.length; i++) {
                for (let key in alts.characters) {
                    for (let k = 0; k < alts.characters[key].length; k++) {
                        if (response.data.exportedCharacters[i].name == alts.characters[key][k]["name"]) {
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
