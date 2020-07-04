import {
    REGISTER_USER,
    LOGIN_USER
} from './types';

const sendRequest = async (query) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(query),
        redirect: 'follow'
    };
    const res = await fetch('/api_v2', requestOptions);
    const JSONData = await res.json();
    return JSONData;
}

export const registerUser = (user) => async dispatch => {
    try {
        const query = {
            query: `
                mutation {
                    registerUser (userInput: {name: "${user.name}", email: "${user.email}", password: "${user.password}"}) {
                        token
                        user {
                            name
                            email
                        }
                    }
                }
            `
        }
        const data = await sendRequest(query);
        if (data.errors) {
            return console.log(data.errors);
        }
        dispatch({
            type: REGISTER_USER,
            payload: data.data.registerUser
        });
    } catch (e) {
        console.log(e);
    }
};

export const loginUser = (user) => async dispatch => {
    try {
        const query = {
            query: `
                mutation {
                    loginUser(userInput: {email: "${user.email}", password: "${user.password}"}){
                        token
                        user {
                            name
                            email
                        }
                    }
                }
            `
        };
        const data = await sendRequest(query);
        if (data.errors) {
            return console.log(data.errors);
        }
        dispatch({
            type: LOGIN_USER,
            payload: data.data.loginUser
        });
    } catch (e) {
        console.log(e);
    }
}