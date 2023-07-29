//this is to imitate when a reducer is doing asynchronus activity like api calls

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const STATUS = Object.freeze({
  IDEAL: "ideal",
  LOADING: "loading",
  ERROR: "error",
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: STATUS.ideal,
  },
//   reducers: {
//     setProducts(state, action) {
//       //we can never make api calls because reducers ae pure functions andare called synchronously
//       state.data = action.payload;
//     },
//     setStatus(state, action) {
//       state.status = action.payload;
//     },
//   },
  extraReducers: (builder) => {
    builder
    .addCase(fetchProducts.pending, (state,action)=>{
        state.status = 'loading';
    })
    .addCase(fetchProducts.fulfilled,(state,action)=>{
        state.data = action.payload;
        state.status = 'ideal';
    })
    .addCase(fetchProducts.rejected, (state,action)=>{
        state.status= 'error';
    })
  }
});

// export const { setProducts, setStatus } = productSlice.actions;

export default productSlice.reducer;

//Thunks so we basically use thunks middlewae to make api/asynchronous calls thunk is basically a
//function which returns another function

export const fetchProducts = createAsyncThunk("product/fetch", async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return data;
});

// export function fetchProduct() {
//   return async function fetchProductThunk(dispatch, getState) {
//     dispatch(setStatus(STATUS.LOADING));
//     try {
//       const response = await fetch("https://fakestoreapi.com/products");
//       const data = await response.json();
//       dispatch(setProducts(data));
//       dispatch(setStatus("ideal"));
//     } catch (err) {
//       console.log(err);
//       dispatch(setStatus(err));
//     }
//   };
// }
