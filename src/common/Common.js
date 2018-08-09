const Common = {
    formatPro_dep_code(str){
        if(str === 'DA_XU_LY'){
            return 'ĐÃ XỬ LÝ'
        }
        else  if(str === 'PHAN_CONG_XU_LY'){
            return 'PHÂN CÔNG XỬ LÝ'
        }
        else  if(str === 'DANG_XU_LY'){
            return 'ĐANG XỬ LÝ'
        }
        else  if(str === 'BAN_NHAP'){
            return 'BẢN NHÁP'
        }
    },
    color: {
        color_header: '#1976D2',
        color_theme: '#0057AA',
        font_input: 20,
    }

}
export default Common