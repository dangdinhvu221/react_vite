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

export { createdUserApi, updatedUserApi, deleteUserApi };