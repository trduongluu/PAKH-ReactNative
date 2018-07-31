var ip = 'http://localhost:8080';       //IP config

//List API
var apiLogin = `${ip}/user?`;

//Fetch API function list
var loginAPI = {
    userLogin(user, pass){
        var url = `${apiLogin}username=${user}&password=${pass}`;
        return fetch(url).then((res) => res.json());
    }
};

module.exports = loginAPI;