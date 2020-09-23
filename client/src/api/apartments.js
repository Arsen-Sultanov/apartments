import axios from './axios';

export default {
  async get(params) {
    return axios.get('./apartments', { params: params });
  }
};
