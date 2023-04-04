import AsyncStorage from "@react-native-async-storage/async-storage";


const isEmpty = function (value) {
    if (value === '' || value === null || value === undefined || (value !== null && typeof value === 'object' && !Object.keys(value).length)) {
        return true;
    } else {
        return false;
    }
};

// AsyncStorage get 함수 모듈
export const getItemFromAsync = async (storageName) => {
    if (isEmpty(storageName)) {
        throw Error('Storage Name is empty');
    }

    try {
        const value = await AsyncStorage.getItem(storageName);
        if(value !== null) {
            return JSON.parse(value);
        }
    } catch(e) {
        console.log(e);
    }
};

// AsyncStorage set 함수 모듈
export const setItemToAsync = async (storageName, item) => {
    if (isEmpty(storageName)) {
        throw Error('Storage Name is empty');
    }

    try {
        const value = JSON.stringify(item);
        await AsyncStorage.setItem(storageName, value);
    } catch(e) {
        console.log(e);
    }
};