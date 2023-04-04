import axios, { AxiosRequestConfig , AxiosInstance } from 'axios'
import AsyncStorage from "@react-native-async-storage/async-storage";

const YGBSURL = `http://172.30.1.64:8588`

const CAFEURL = `http://192.168.35.149:8588`


const BASE_URL = `${YGBSURL}`;
const BASE_URL_USER = `${YGBSURL}/user`;
const BASE_URL_ETH = `${YGBSURL}/eth`;
const BASE_URL_TRANSACTION = `${YGBSURL}/transaction`;
const BASE_URL_SWAP = `${YGBSURL}/swap`;
const BASE_URL_ADMIN = `${YGBSURL}/admin`;
const BASE_URL_STORE = `${YGBSURL}/store`;


type CustomResponseFormat<T = any> = {
    response: T;
    refreshedToken?: string;
  }


/* ---------------------------------------------Axios Type--------------------------------------------- */
  

interface CustomInstance extends AxiosInstance{
    getUri(config?: AxiosRequestConfig): string;
    request<T>(config: AxiosRequestConfig): Promise<T>;
    get<T>(url: string, config?: AxiosRequestConfig): Promise<T>;
    delete<T>(url: string, config?: AxiosRequestConfig): Promise<T>;
    head<T>(url: string, config?: AxiosRequestConfig): Promise<T>;
    options<T>(url: string, config?: AxiosRequestConfig): Promise<T>;
    post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
    put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
    patch<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
}

  
    const apiUtil:CustomInstance = axios.create({ 
        baseURL:BASE_URL,
        withCredentials: true,
        headers: {
            "Content-Type": 'application/json'
        },
    });
    const apiUtil2:CustomInstance = axios.create({ 
        baseURL:BASE_URL,
        withCredentials: true,
        headers: {
            "Content-Type": 'application/json'
        },
    });

    apiUtil.interceptors.request.use(
        async (config:AxiosRequestConfig) => {
            const token = await AsyncStorage.getItem('token')
            //request 정상
            //api 공통 헤더(token 등)를 심을 때 일괄처리
            return config;
        },
        error => {
            //request 에러
            return Promise.reject(error);
        }
    );

    apiUtil.interceptors.response.use(
        async (response) => {
            //response 정상
            return response;
        },
        error => {
            //response 에러
            //token에러 등 공통 에러에 대한 예외처리 지정
            return Promise.reject(error);
        }
);


export default apiUtil