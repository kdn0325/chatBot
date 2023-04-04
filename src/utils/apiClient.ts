import AsyncStorage from "@react-native-async-storage/async-storage";
import apiUtil from "./apiUtil";

const YGBSURL = `http://3.36.97.211:9856`

/* ---------------------------------------------SignUp--------------------------------------------- */




/* ----------------------- 로그인 -----------------------*/


export const getLogin = async (reqData:any) => {
	const url = `${YGBSURL}/login`;
    
	return await apiUtil({
    	url : url,
        method : 'post',
        data : reqData
    })
}

/* ----------------------- 회원가입 -----------------------*/


export const getSignUp = async (reqData:any) => {
	const url = `${YGBSURL}/signup`;
    
	return await apiUtil({
    	url : url,
        method : 'post',
        data : reqData
    })
}

/* ----------------------- 회원가입 -----------------------*/


export const getFormSubmit = async (reqData:any) => {
	const url = `${YGBSURL}/message`;
    
	return await apiUtil({
    	url : url,
        method : 'post',
        data : reqData
    })
}
