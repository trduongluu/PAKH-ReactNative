var ip = 'http://localhost:8080';       //IP config

//List API
var apiLogin = `${ip}/user?`;
var apiReceiveRQ = `${ip}/request/get?`;

//Fetch API function list
var DataAction = {
    userLogin(user, pass){
        var url = `${apiLogin}username=${user}&password=${pass}`;
        return fetch(url).then((res) => res.json());
    },

    getReceiveRQ(user){
        var url = `${apiReceiveRQ}pro_user=${user}`;
        return fetch(url).then((res) => res.json());
    }
};

module.exports = DataAction;