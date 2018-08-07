var ip = 'http://192.168.10.127:8080';       //IP config

//List API
var apiLogin = `${ip}/user?`;
var apiReceiveRQ = `${ip}/request/get?`;

//Fetch API function list
var DataAction = {
    userLogin(user, pass){
        var url = `${apiLogin}username=${user}&password=${pass}`;
        return fetch(url).then((res) => res.json());
    },

    getReceiveRQ(tabname){
        var url = `${apiReceiveRQ}start_req_date=12-12-2017&end_req_date=05-08-2018&req_status=${tabname}&pro_user=CHANHTC`;
        return fetch(url).then((res) => res.json());
    }
};

module.exports = DataAction;