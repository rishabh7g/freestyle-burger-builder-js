import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://react-my-burger-d2172.firebaseio.com/'
})

export default instance;