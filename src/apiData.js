import {AsyncStorage} from 'react-native';

var ip = 'http://14.160.91.174:8080';       // IP config

var date = new Date();
let today = date.getDate() + '-' + parseInt(date.getMonth() + 1) + '-' + date.getFullYear();
let startday = '12-12-2017';

// List API
var apiLogin = `${ip}/user?`;
var apiUser = `${ip}/user/`;
var apiGetRequest = `${ip}/request/get?`;
var apiAddRequest = `${ip}/request/post?`;
var apiHethong = `${ip}/sys/`;
var apiNguyenNhan = `${ip}/cause?`;
var apiRecentRqDetail = `${ip}/request/recent/`;
var apiPutRequest = `${ip}/request/updateRequest/`;
var apiPutRqDetail = `${ip}/request/updateRequestDetail/`;
var apiResponse = `${ip}/request/response?`;

// Fetch API function list
var DataAction = {
    // Bộ hàm lưu-lấy-xóa thông tin user cho toàn app
    async storeUser(user){
        try {
            await AsyncStorage.setItem('userinfo', user);
            console.log('User action-store is: ' + await AsyncStorage.getItem('userinfo'));
        } catch (error) {
            console.log(`Error is: ${error}`)
        }
    },

    async getUser(){
        try {
            let user = await AsyncStorage.getItem('userinfo');
            console.log('User action-get is: ' + user);
            return user;
        } catch (error) {
            console.log(`Error is: ${error}`)
        }
    },

    async removeUser(){
        try {
            await AsyncStorage.removeItem('userinfo');
            console.log('User action-remove is: ' + await AsyncStorage.getItem('userinfo'));
        } catch (error) {
            console.log(`Error is: ${error}`)
        }
    },

    //Đăng nhập
    userLogin(user, pass){
        var url = `${apiLogin}username=${user}&password=${pass}`;
        return fetch(url).then((res) => res.json());
    },

    // Lấy yêu cầu nhận của user
    getReceiveRQ(tabname, user){
        var url = `${apiGetRequest}start_req_date=${startday}&end_req_date=${today}&req_status=${tabname}&pro_user=${user}`;
        return fetch(url).then((res) => res.json());
    },

    // Lấy thông tin user
    getUserInfo(user){
        var url = `${apiUser}${user}`;
        return fetch(url).then((res) => res.json());
    },

    // Lấy nguyên nhân cấp 1, 2, 3
    getNguyenNhanCap1(){
        var url = `${apiNguyenNhan}level=1`;
        return fetch(url).then((res) => res.json());
    },

    getNguyenNhanCap2(idcap1){
        var url = `${apiNguyenNhan}level=2&id_parent=${idcap1}`;
        return fetch(url).then((res) => res.json());
    },

    getNguyenNhanCap3(idcap2){
        var url = `${apiNguyenNhan}level=2&id_parent=${idcap2}`;
        return fetch(url).then((res) => res.json());
    },

    // Recent RQ detail
    getRecentRqDetail(ticketid){
        var url = `${apiRecentRqDetail}${ticketid}`;
        return fetch(url).then((res) => res.json());
    },

    async putRequest(ticketid, ngayxl, ndxl, username, userdep){
        var url = `${apiPutRequest}${ticketid}?pro_actua=${ngayxl}&pro_content=${ndxl}&pro_user=${username}&pro_dep_code=${userdep}`;
        try {
            let response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ngayxl, ndxl, username, userdep
                })
            })
            let resjson = await response.json();
            return resjson;
        } catch (error) {
            console.error(`Error is: ${error}`);
        }
    },

    async putRqDetail(idRqForward, reqDate, userdep, username, ngayxl, ndxlNB, ndxl, idcauseCap1, idcauseCap3){
        var url = `${apiPutRqDetail}${idRqForward}?receiving_date=${reqDate}&receiving_dep_code=${userdep}&receiving_user=${username}&actualy_finish=${ngayxl}&return_content_private=${ndxlNB}&return_content=${ndxl}&dic_cause_id=${idcauseCap1}&dic_cause_id_private=${idcauseCap3}`;
        try {
            let response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    reqDate, userdep, username, ngayxl, ndxlNB, ndxl, idcauseCap1, idcauseCap3
                })
            })
            let resjson = await response.json();
            return resjson;
        } catch (error) {
            console.error(`Error is: ${error}`);
        }
    },

    async responseRQ(ticketid, fwDep, fwUser, fwContent, reqDate, userdep, username, ndxl, ndxlNB, idcauseCap1, idcauseCap3){
        var url = `${apiResponse}ticketid=${ticketid}&fw_dep_code=${fwDep}&fw_user=${fwUser}&fw_content=${fwContent}&receiving_date=${reqDate}&receiving_dep_code=${userdep}&receiving_user=${username}&return_content=${ndxl}&return_content_private=${ndxlNB}&dic_cause_id=${idcauseCap1}&dic_cause_id_private=${idcauseCap3}`;
        try {
            let response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    fwDep, fwUser, fwContent, reqDate, userdep, username, ndxl, ndxlNB, idcauseCap1, idcauseCap3
                })
            })
            let resjson = await response.json();
            return resjson;
        } catch (error) {
            console.error(`Error is: ${error}`);
        }
    },


    // MHA

    // lấy yêu cầu gửi
    getSendRQ(tabname, user){
        var url = `${apiGetRequest}start_req_date=${startday}&end_req_date=${today}&req_status=${tabname}&req_user=${user}`;
        return fetch(url).then((res) => res.json());
    },
    // Tìm kiếm yêu cầu
    async getSearchRequest(start_date, end_date, title, dep_code,system_code, user, pro_dep_code, pro_user, ticket_id, status) {
        try {
            let res = await fetch(`${apiGetRequest}start_req_date=${start_date}&end_req_date=${end_date}&req_title=${title}&req_dep_code=${dep_code}&req_system_code=${system_code}&req_user=${user}&pro_dep_code=${pro_dep_code}&pro_user=${pro_user}&ticket_id=${ticket_id}&req_status=${status}`);
            let resJson = await res.json();
            return resJson;
        }
        catch (error) {
            console.error(`Error is: ${error}`);
            return '';
        }
    },

    // Lấy danh sách hệ thống
    async getReqSystemCode(departmentCode) {
        try{
            let res = await fetch(`${apiHethong}${departmentCode}`)
            let resJson = await res.json();
            return resJson
        }
        catch(error) {
            console.error(`Error is: ${error}`);
        }
    },

    // Gửi yêu cầu
    async postRequest(rep_dep_code,rep_user, title, level, system, request, content_request, file_dir) {
        try {
            let res = await fetch(`${apiAddRequest}req_dep_code=${rep_dep_code}&req_user=${rep_user}&req_system_code=${system}&req_title=${title}&pro_dep_code=&req_content=${content_request}&receiving_sms=Y&receiving_email=N&file_dir=${file_dir}&req_status=PHAN_CONG_XU_LY&pro_user=`, {
                method: 'POST',
                headers : {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    rep_dep_code,
                    rep_user,
                    title, level,
                    system,
                    request,
                    content_request,
                    file_dir
                })
            })
            let resJson = await res.json();
            return resJson
        }
        catch (error){
            console.error(`Error is: ${error}`);
        }
    },
    //Lấy yêu cầu cấp cha
    async getRequestTypesParent(departcode, sys_code, username){
        try{
            let res = await fetch(`${ip}/request/type?department_code=${departcode}&system_code=${sys_code}&username=${username}`);
            let resJson = await res.json();
            return resJson;
        }
        catch(error) {
            console.error(`Error is: ${error}`);
            return ''
        }
    },
    //Lấy yêu cầu cấp con
    async getRequestTypesChild(departcode, sys_code, is_has){
        try{
            let res = await fetch(`${ip}/request/type?department_code=${departcode}&system_code=${sys_code}&is_has=${is_has}`);
            let resJson = await res.json();
            return resJson;
        }
        catch(error) {
            console.error(`Error is: ${error}`);
            return ''
        }
    },
    // API lấy danh sách phòng ban
    async getListDepartCode(){
        try{
            let res = await fetch(`${ip}/depart`);
            let resJson = await res.json();
            return resJson;
        }
        catch(error) {
            console.error(`Error is: ${error}`);
            return ''
        }
    },
    // API lấy danh sách nhân viên
    async getStaffDepartment(dep_code){
        try{
            let res = await fetch(`${ip}/staff/${dep_code}`)
            let reJson = await res.json();
            return reJson;
        }
        catch (error) {
            console.error(`Error is: ${error}`);
        }

    },
};

// module.exports = DataAction;
export default DataAction;