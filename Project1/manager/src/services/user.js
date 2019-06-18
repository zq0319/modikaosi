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
//添加试题接口
export function questionsAdd(params){
  return request({
    url: `/exam/questions`,
    method: 'POST',
    data:params
  })
}

//更新试题
export function update(params){
  return request({
    url: `/exam/questions/update`,
    method: 'POST',
    data:params
  })
}

//展示用户数据
export function userView(){
  return request({
    url: `/user/user`,
    method: 'GET'
  })
}


//展示身份数据
export function identity(){
  return request({
    url: `/user/identity`,
    method: 'GET'
  })
}


//展示api权限接口
export function api_authority(){
  return request({
    url: `/user/api_authority`,
    method: 'GET'
  })
}

//展示身份和api权限关系
export function identity_api_authority_relation(){
  return request({
    url: `/user/identity_api_authority_relation`,
    method: 'GET'
  })
}

//获取视图权限数据
export function view_authority(){
  return request({
    url: `/user/view_authority`,
    method: 'GET'
  })
}

//展示身份和视图权限关系
export function authority_relation(){
  return request({
    url: `/user/identity_view_authority_relation`,
    method: 'GET'
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
export function identityato(params){
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

//创建试卷接口
export function examfnDate(params){
  return request({
    url: `/exam/exam`,
    method: 'POST',
    data:params
  })
}

//创建试卷接口
export function examStudentList(params){
  return request({
    url: `/exam/exam`,
    method: 'GET'
  })
}
