import {AsyncStorage} from 'react-native';

var ip = 'http://14.160.91.174:8080';       // IP config

// List API
var apiLogin = `${ip}/user?`;
var apiUser = `${ip}/user/`;
var apiGetRequest = `${ip}/request/get?`;
var apiAddRequest = `${ip}/request/post?`;
var apiHethong = `${ip}/sys/`;
var apiNguyenNhan = `${ip}/cause?`;
var apiRqDetail = `${ip}/request/recent/`;
var apiPutRqDetail = `${ip}/request/updateRequestDetail/`;
var apiPutRequest = `${ip}/request/updateRequest/`;
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
        var url = `${apiGetRequest}start_req_date=12-12-2017&end_req_date=12-08-2018&req_status=${tabname}&pro_user=${user}`;
        return fetch(url).then((res) => res.json());
    },

    getUserInfo(user){
        var url = `${apiUser}${user}`;
        return fetch(url).then((res) => res.json());
    },

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


    // MHA

// Thông tin người dùng
    async getInfoUser(username){
        try {
            let res = await fetch(`${ip}/user/${username}`);
            let resJson = res.json();
            return resJson;
        }
        catch (error)  {
            console.log(error)
            return ''
        }
    },
// lấy yêu cầu gửi
    getSendRQ(tabname, user){
        var url = `${apiGetRequest}start_req_date=18-01-2018&end_req_date=18-08-2018&req_status=${tabname}&req_user=${user}`;
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
    }
};

// module.exports = DataAction;
export default DataAction;