import { createSlice } from "@reduxjs/toolkit"; // 每个单独的组件的index.js
// 设置reducer的初始化的值

//创建counterSlice,多个东西（片段）的集合，此处只需要导出reducer
const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counter: 100,
  },
  //这里的reducers有一个   s        一定注意
  reducers: {
    addNumber(state, { payload }) {
      state.counter = state.counter + payload;
    },
    subNumber(state, { payload }) {
      state.counter = state.counter - payload;
    },
  },
});
//相当于case语句，获取action，根据action ，修改state。

export const { addNumber, subNumber } = counterSlice.actions;
//先结构再导出两个action函数

export default counterSlice.reducer; // 导出reducer

// 方便在index.js ———— 也就是创建的store中重新调用和渲染reducer
