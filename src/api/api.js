import axios from "axios";

export async function menoveKurzy(){
    return new Promise((resolve, reject) => {
        axios
        .get(' https://api.exchangeratesapi.io/latest')
        .then(response => resolve(response.data))
        .catch(error => reject(error));
    });
}

