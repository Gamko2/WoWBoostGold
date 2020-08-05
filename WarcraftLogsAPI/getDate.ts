import Axios from "axios";

export async function getDate(url: string): Promise<string> {
    return Axios.get(url)
        .then(function (response) {
            return new Date(response.data.start).toLocaleDateString("en-US");

        }
        )
}