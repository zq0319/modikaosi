import request from '../utils/request';

// 登陆接口
export function login(params){
  return request({
    url: '/user/login',
    method: 'POST',
    data: params
  })
}


export function type() {
  return request({
    url:"/exam/getQuestionsType",
    method:"GET"
  })
}

//获取试题类型
export function examType(){
  return request({
    url: '/exam/examType',
    method: 'GET',
  })
}

//获取考试类型
export function subject(){
  return request({
    url: '/exam/subject',
    method: 'GET',
  })
}

//获取考试类型
export function getQuestionsType(){
  return request({
    url: '/exam/getQuestionsType',
    method: 'GET',
  })
}


//获取所有的试题
export function questions(){
  return request({
    url: '/exam/questions/new',
    method: 'GET',
  })
}



