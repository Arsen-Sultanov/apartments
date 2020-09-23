import axios from './axios';

export default {
  async create(body) {
    return axios.post('./sign', body);
  },
  async delete() {
    return axios.delete('./sign');
  }
};
