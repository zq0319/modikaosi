
import { login } from '../services/index'
export default {
    // 命名空间
    namespace: 'user',

    // 模块内部的状态
    state: {
        arr:{name:1}
    },

    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line

        },
    },

    // 异步操作
    effects: {
        *login({ payload }, { call, put }) {
            let data = yield call(login, payload);
            // console.log('data...', payload);
            yield put({ type: 'save', payload: data });
        }
    },

    // 同步操作
    reducers: {
        save(state, action) {
            return {
                ...state,
                detail: action.payload,
            };
        }
    },

};