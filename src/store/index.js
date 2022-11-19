import { configureStore } from "@reduxjs/toolkit"; //第一个api，代替createstore API
//创建store
import counterReducer from "./features/counter"; //counterReducer =name + reducer
import homeReducer from "./features/home"; // home模块组件

//同时完成reducer.js中的初始值设置
const store = configureStore({
  reducer: {
    counter: counterReducer,
    home: homeReducer,
  },
});

// 对比createstore 定义store的方式不同（reducer）
// const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store; //真正导出的是
