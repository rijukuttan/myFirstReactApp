import axios from 'axios';

const USER_API_BASE_URL = "https://localhost:44351/api/Users";

class userServices {

    getUser(){
        return axios.get(USER_API_BASE_URL);
    }

    createUser(user){
        return axios.post(USER_API_BASE_URL, user);
    }

    getUserById(userId){
        return axios.get(USER_API_BASE_URL + '/' + userId);
    }
    // userLogin(email,password){
    //     alert("userlogin");
    //     return axios.get(USER_API_BASE_URL + '/' + email,password);
    // }
    userLogin(email,password){
        return axios.get(`https://localhost:44351/api/Users/${email},${password}`); 
        }
    updateUser(user, userId){
        return axios.put(USER_API_BASE_URL + '/' + userId, user);
    }

    deleteUser(userId){
        return axios.delete(USER_API_BASE_URL + '/' + userId);
    }
}

export default new userServices()