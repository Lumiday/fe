import axios from 'axios';

export const IPADDR = 'https://158.179.174.73:30010'; //'https://admin.nstri.net:8443/';

export const instance = axios.create({
  baseURL: IPADDR,
});

export const authInstance = axios.create({
  baseURL: IPADDR,
});
