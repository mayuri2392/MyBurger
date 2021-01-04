import axios from 'axios';

const instance = axios.create({
    baseURL:'https://react-my-burger-f4c53-default-rtdb.europe-west1.firebasedatabase.app/'
});

export default instance;