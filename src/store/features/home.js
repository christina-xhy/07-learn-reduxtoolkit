import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchHomeMultidataAction = createAsyncThunk(
  "fetch/HomeMultidata",
  async () => {
    const res = await axios.get("http://123.207.32.32:8000/home/multidata");
    return res.data;
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState: {
    banners: [],
    recommend: [],
  },
  reducers: {
    changeBanners(state, { payload }) {
      state.banners = payload;
    },
    changeRecommend(state, { payload }) {
      state.recommend = payload;
    },
  },

  extraReducers: {
    [fetchHomeMultidataAction.pending](state, action) {
      console.log("1");
    },
    [fetchHomeMultidataAction.fulfilled](state, { payload }) {
      // const banners = res.data.data.banner.list;
      // const recommend = res.data.data.recommend.list;
      state.banners = payload.data.banner.list;
      state.recommend = payload.data.recommend.list;
      console.log("2");
    },
    [fetchHomeMultidataAction.rejected](state, action) {
      console.log("3");
    },
  },
});

export const { changeBanners, changeRecommend } = homeSlice.actions;
export default homeSlice.reducer;
