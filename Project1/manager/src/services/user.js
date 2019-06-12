import request from '../utils/request';

export function login(params) {
  return request({
    url:"/user/login",
    method:"POST",
    data:params
  },
  {
    url:"/user/userInfo",
    method:"GET",
    data:params
  });
}
