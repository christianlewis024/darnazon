import axios from "axios"
const instance = axios.create({
    baseUrl: 'https://us-central1-darnazon.cloudfunctions.net/api' // the api (cloud function) url 
});

export default instance;

//  deployed URL https://us-central1-darnazon.cloudfunctions.net/api