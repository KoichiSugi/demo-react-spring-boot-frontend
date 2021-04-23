import axios from 'axios';

const USERS_REQUEST_REST_URL = 'http://localhost:8080/api/v1/users';

class UserService{

    getUsers(){
        return axios.get(USERS_REQUEST_REST_URL);
    }
    createUser(user){
        return axios.post(USERS_REQUEST_REST_URL + '/', user);
    }
    getUserById(userId){
        return axios.get(USERS_REQUEST_REST_URL + '/' + userId);
    }
    updateUser(user, userId){
        return axios.put(USERS_REQUEST_REST_URL + '/' + userId, user);
    }
    deleteUser(userId){
        return axios.delete(USERS_REQUEST_REST_URL + '/' + userId);
    }
    
}

export default new UserService()