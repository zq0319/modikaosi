import request from '../utils/request';
import {getToken} from "../utils/user"
//code码
let str = getToken("key")
console.log(str)
//登录
export function login(params) {
  return request({
    url:"/user/login",
    method:"POST",
    data:params
  })
}
//试题分类
export function type() {
  return request({
    url:"/exam/getQuestionsType",
    method:"GET"
  })
}
//查看试题
export function view() {
  return request({
    url:"/exam/exam",
    method:"GET"
  })
}
