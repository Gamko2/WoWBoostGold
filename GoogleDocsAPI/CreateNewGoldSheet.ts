import { GoogleSpreadsheet } from 'google-spreadsheet';
import * as credentials from "../Util/client_secret.json";


export async function DocTest(characterList: string[], date:string) {
    const doc = new GoogleSpreadsheet('1SrOnqY4_5DB3sDLsP2VYaQ1Ff32ZRd4ieXt4P2Iy-5A');
    await doc.useServiceAccountAuth({
        client_email: credentials.client_email,
        private_key: credentials.private_key
    });
    await doc.loadInfo(); // loads document properties and worksheets
    const newSheet = await doc.addSheet({ title: "Gold " + date, headerValues: ['CharacterName', 'Payed', 'GoldAmount', 'PlayerCount'] });
    for (let i = 0; i < characterList.length; i++) {
        console.log(characterList[i]);
        await newSheet.addRow({ CharacterName: characterList[i], Payed: "No" });
    }
    await newSheet.addRow({ CharacterName: "Gold per Person: ", Payed: "=C2/D2" });
    await newSheet.loadCells('A1:E10');
    const cellD2 = newSheet.getCellByA1('D2');
    cellD2.value = characterList.length;
    await newSheet.saveUpdatedCells();

}