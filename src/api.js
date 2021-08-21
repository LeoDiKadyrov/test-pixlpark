/* eslint-disable no-unused-vars */
import { store } from "./store/index.js"
const sha1 = require('js-sha1');
const PRIVATE_KEY = "8e49ff607b1f46e1a5e8f6ad5d312a80";
const PUBLIC_KEY = "38cd79b5f2b2486d86f562e3c43034f8";
const API_URL = "http://api.pixlpark.com/";

export const getReqToken = async () => {
    const reqToken = await fetch(`${API_URL}/oauth/requesttoken`),
        { RequestToken } = await reqToken.json();

    return RequestToken;
}

const getParams = async () => {
    let reqToken = await getReqToken();
    let concatenatedPassword = reqToken + PRIVATE_KEY;
    let hashedPassword = sha1(concatenatedPassword);

    return { reqToken, hashedPassword };
}

export const getAccessToken = async () => {
    let {reqToken, hashedPassword } = await getParams();
    const acsToken = await fetch(`${API_URL}/oauth/accesstoken?oauth_token=${reqToken}&grant_type=api&username=${PUBLIC_KEY}&password=${hashedPassword}`),
            { AccessToken }  = await acsToken.json();
            
    return AccessToken;
}

export const getOrders = async () => {
    let AccessToken = await getAccessToken();
    const ordersRequest = await fetch(`${API_URL}/orders?oauth_token=${AccessToken}`),
        orders = await ordersRequest.json();
    
    return orders.Result;
}

export const sendOrdersToStore = async () => {
    let orders = await getOrders();
    store.dispatch("actionSetOrders", orders);
}

sendOrdersToStore();


