import {examType,subject,getQuestionsType} from '../services/index'
console.log(examType)
export default {
    // 命名空间
    namespace: 'add',

    // 模块内部的状态
    state: {
        add:[]
    },

    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
           
        },
    },

    // 异步操作
    effects: {
        *examTypes({payload}, { call, put}){
            let exam_type = yield call(examType);
            let data = yield call(subject);
            let data1 = yield call(getQuestionsType);
            console.log(exam_type.data,data,data1)
            yield put({type:'save',payload:exam_type.data})
            yield put({type:'subject',payload:data.data})
            yield put({type:'getQuestionsType',payload:data1.data})
        }
    },

    // 同步操作
    reducers: {
        save(state, action) {
            return {
                ...state,
                detail: action.payload,
            };
        },
        subject(state, action){
            return {
                ...state,
                subject: action.payload,
            };
        },
        getQuestionsType(state,action){
            return {
                ...state,
                getQuestionsType: action.payload,
            };
        }
    },

};