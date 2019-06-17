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

//添加试题类型
export function insertQuestionsType(params){
  return request({
    url: `/exam/insertQuestionsType?text=${params.text}&sort=${params.sort}`,
    method: 'GET'
  })
}

//添加试题类型
export function condition(){
  return request({
    url: `/exam/questions/condition`,
    method: 'GET'
  })
}
export function questionsAdd(params){
  return request({
    url: `/exam/questions`,
    method: 'POST',
    data:params
  })
}

//添加用户
export function adduser(params){
  return request({
    url: `/user`,
    method: 'POST',
    data:params
  })
}
//展示身份
export function identity(params){
  return request({
    url: `/user/identity`,
    method: 'GET',
    data:params
  })
}
//添加身份
export function edit(params){
  return request({
    url: `/user/identity/edit?identity_text=${params.text}`,
    method: 'GET'
  })
}
//添加身份
// export function authorityApi(params){
//   return request({
//     url: `/user/authorityApi/edit?api_authority_text=${params.api_authority_text}&api_authority_url=${params.api_authority_url}&api_authority_mehtod${params.api_authority_mehtod}`,
//     method: 'GET'
//   })
// }

//添加试题容器接口
export function usernew(params){
  return request({
    url: `/user/identity_api_authority_relation`,
    method: 'GET'
  })
}

//添加视图权限
export function authority(params){
  return request({
    url: `/user/view_authority`,
    method: 'GET'
  })
}