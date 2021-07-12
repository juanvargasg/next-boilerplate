import axios from 'axios';

/**
 * Create a new instance of axios with a custom config.
 * @link https://github.com/axios/axios#creating-an-instance
 * @param {int} timeout Specifies the number of milliseconds before the request times out.
 * If the request takes longer than `timeout`, the request will be aborted.
 * @returns AxiosInstance
 */
const Constructor = (timeout = 20000) => {
  const headers = {
    'content-type': 'application/json',
    Accept: '*/*',
  };

  return axios.create({
    baseURL: '/api/proxy', // All requests must go through the proxy
    headers,
    responseType: 'json',
    responseEncoding: 'utf8',
    timeout,
    type: 'json',
  });
}

export default Constructor;
