import axios from 'axios'

const USERS_REST_AP_URL = 'http://localhost:8080/api/users';

class UserService {
    getUsers() {
        return axios.get(USERS_REST_AP_URL);
    }
}

export default new UserService();