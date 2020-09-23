import axios from './axios';

export default {
  async add(body) {
    return axios.post('./user', body);
  }
  // async delete() {
  //   return axios.delete('./api/v1/user');
  // }
};
