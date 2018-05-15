import axios from 'axios';

import { API_ROOT_V1, HEADERS } from '../constants/index';

export const fetchRequest = async (method, route, requestData = {}) => {
  let response = null;
  let apiRoute = API_ROOT_V1 + route;
  let opts = {
    method: method,
    headers: HEADERS,
    data: requestData
  };

  switch (method) {
    case 'post':
      try {
        response = await axios.post(apiRoute, opts);
      } catch (e) {
        console.log(e);
      }
      break;
    case 'GET':
      try {
        response = await axios.get(apiRoute, requestData);
      } catch (e) {
        console.log(e);
      }
      break;
    case 'UPDATE':
      try {
        response = await axios.put(apiRoute, requestData);
      } catch (e) {
        console.log(e);
      }
    default:
  }
  // const json = await response.json();

  return response;
};
