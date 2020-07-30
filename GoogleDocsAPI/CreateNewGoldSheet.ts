import { GoogleSpreadsheet } from 'google-spreadsheet';
import * as credentials from "../Util/client_secret.json";


export async function DocTest(characterList: Object) {
    const doc = new GoogleSpreadsheet('1SrOnqY4_5DB3sDLsP2VYaQ1Ff32ZRd4ieXt4P2Iy-5A');
    await doc.useServiceAccountAuth({
        client_email: credentials.client_email,
        private_key: credentials.private_key
    });
    await doc.loadInfo(); // loads document properties and worksheets
    console.log(doc.title);
    const newSheet = await doc.addSheet({ title: "Gold to Send" });
}