
import {userView,identity,api_authority,identity_api_authority_relation,view_authority,authority_relation} from '../services/index'
export default {
    // 命名空间
    namespace: 'view',

    // 模块内部的状态
    state: {

    },

    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
        
      },
    },

    // 异步操作
    effects: {
        *userView({payload }, { call, put }) {
            let data = yield call(userView)
            let data1 = yield call(identity)
            let data2 = yield call(api_authority)
            let data3 = yield call(identity_api_authority_relation)
            let data4 = yield call(view_authority)
            let data5 = yield call(authority_relation)

            yield put({type:'userViews',play:data.data})
            yield put({type:'identity',play:data1.data})
            yield put({type:'api_authority',play:data2.data})
            yield put({type:'identity_api_authority_relation',play:data3.data})
            yield put({type:'view_authority',play:data4.data})
            yield put({type:'authority_relation',play:data5.data})
        }
    },

    // 同步操作
    reducers: {
      userViews(state,action){
        return {
          ...state,
          userList:action.play
        }
      },
      identity(state,action){
        return {
          ...state,
          identityList:action.play
        }
      },
      api_authority(state,action){
        return {
          ...state,
          api_authorityList:action.play
        }
      },
      identity_api_authority_relation(state,action){
        return {
          ...state,
          identity_apiList:action.play
        }
      },
      view_authority(state,action){
        return {
          ...state,
          view_authorityList:action.play
        }
      },
      authority_relation(state,action){
        return {
          ...state,
          authorityList:action.play
        }
      },
    },

};