import axios from "./axios.customize";

const createdUserApi = (fullName,email,phone,password) => {
     //axios post user
    const url_createdUser ="/api/v1/user";
    const dataNewUser = {
        fullName: fullName, 
        email: email, 
        password: password, 
        phone: phone
    }
    // Call API create user
    return axios.post(url_createdUser, dataNewUser);
};

const updatedUserApi = () => {

};

const deleteUserApi = () => {

};

const fetchAllUsersApi = () => {
    const url_fetchAllUsers = "/api/v1/user";
    return axios.get(url_fetchAllUsers);
};

export { createdUserApi, updatedUserApi, deleteUserApi, fetchAllUsersApi };