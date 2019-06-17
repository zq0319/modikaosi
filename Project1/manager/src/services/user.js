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