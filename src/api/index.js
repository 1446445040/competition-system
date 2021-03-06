import axios from './axios';

export const login = data => axios.post('/auth/login', data);
export const refreshToken = originToken => {
  return axios.get('/auth/refresh', {
    headers: {
      authorization: originToken,
    },
  });
};

/**
 * 用户
 */
export const getUserList = type => axios.get('/user/list', { params: { type } });
export const addUser = (type, data) => axios.post('/user/add', { type, data });
export const deleteUser = (type, data) => {
  return axios.delete('/user/delete', { data: { type, data } });
};
export const updateUser = (type, data) => {
  return axios.put('/user/update', { type, data });
};
export const updatePassword = data => axios.patch('/user/password', data);
export const resetPassword = data => axios.put('/user/reset', data);

/**
 * 赛事
 */
export const getRaceList = params => axios.get('/race/list', { params });
export const addRace = data => axios.post('/race/add', data);
export const updateRace = data => axios.put('/race/update', data);
export const deleteRace = data => {
  return axios.delete('/race/delete', { data });
};

/**
 * 参赛记录
 */
export const getRecordList = params => axios.get('/record/list', { params });
export const addRecord = data => axios.post('/record/add', data);
export const updateRecord = record => axios.patch('/record/update', record);
export const deleteRecord = data => {
  return axios.delete('/record/delete', { data });
};
export const getToken = params => axios.get('/record/auth', { params });
export const getFileInfo = params => axios.get('/record/file', { params });
export const getDownloadUrl = params => axios.get('/record/download', { params });
export const fresh = params => axios.get('/record/fresh', { params });
