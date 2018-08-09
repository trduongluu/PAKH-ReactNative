var ip = 'http://192.168.10.147:9080';       //IP config

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
export default DataAction;

//API SEARCH
export const getSearchRequest = async (start_date, end_date, title, dep_code,system_code, user, pro_dep_code, pro_user, ticket_id, status) => {
    try {
        let res = await fetch(`http://192.168.10.147:9080/request/get?start_req_date=${start_date}&end_req_date=${end_date}&req_title=${title}&req_dep_code=${dep_code}&req_system_code=${system_code}&req_user=${user}&pro_dep_code=${pro_dep_code}&pro_user=${pro_user}&ticket_id=${ticket_id}&req_status=${status}`);
        let resJson = await res.json();
        return resJson;
    }
    catch (error) {
        console.error(`Error is: ${error}`);
        return '';
    }
};

//API lấy thông tin hệ thống
export const getReqSystemCode = async(departmentCode) =>{
    try{
        let res = await fetch(`${ip}/sys/${departmentCode}`)
        let resJson = await res.json();
        return resJson
    }
    catch(error) {
        console.error(`Error is: ${error}`);
    }
}

//API gửi yêu cầu
export const postRequest = async (rep_dep_code,rep_user, title, level, system, request, content_request, file_dir) => {
    try {
        let res = await fetch(`${ip}/request/post?req_dep_code=${rep_dep_code}&req_user=${rep_user}&req_system_code=${system}&req_title=${title}&pro_dep_code=&req_content=${content_request}&receiving_sms=Y&receiving_email=N&file_dir=${file_dir}&req_status=PHAN_CONG_XU_LY&pro_user=`, {
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
}


// API
