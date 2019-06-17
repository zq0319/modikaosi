import { adduser, identity, edit,authorityApi,usernew,authority } from '../services/index'
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
        *examTypes({ payload }, { call, put }) {
            let addusr = yield call(adduser, payload)
            console.log(addusr)
            yield put({ type: 'addusr', payload: addusr.data })
            let identit = yield call(identity)
            console.log(identit)
            yield put({ type: 'identit', payload: identit.data })
            if (payload) {
                let edi = yield call (edit,payload)
                console.log(payload)
                yield put ({type:'edi',payload:edi})
            }
            // let authority = yield call(authorityApi,payload)
            // console.log(authority)
            // yield put({ type: 'authority', payload: authority.data })
            let userne = yield call(usernew,payload)
            console.log(userne)
            yield put({ type: 'userne', payload: userne.data })
            let author = yield call(authority,payload)
            console.log(author)
            yield put({ type: 'author', payload: author.data })
        }
    },

    // 同步操作
    reducers: {
        adduser(state, action) {
            return {
                ...state,
                adduser: action.payload,
            };
        },
        identity(state, action) {
            return {
                ...state,
                identity: action.payload,
            };
        },
        edit(state, action) {
            return {
                ...state,
                edit: action.payload,
            };
        },
        // authorityApi(state, action) {
        //     return {
        //         ...state,
        //         authorityApi: action.payload,
        //     };
        // },
        usernew(state, action) {
            return {
                ...state,
                usernew: action.payload,
            };
        },
        authority(state, action) {
            return {
                ...state,
                authority: action.payload,
            };
        }
    },

};