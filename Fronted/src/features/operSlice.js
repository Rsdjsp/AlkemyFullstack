import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { get } from "../config";

export const operations = createAsyncThunk("alloperations", async () => {
  const response = await get("/operations");
  return response.data.data;
});

const operationSlice = createSlice({
  name: "operations",
  initialState: {
    registers: [],
    error: false,
    loading: false,
    modal: false,
  },
  reducers: {
    modalChange(state,action) {
      state.modal = action.payload;
    },
  },

  extraReducers(builder) {
    builder
      .addCase(operations.pending, (state) => {
        state.loading = true;
      })
      .addCase(operations.fulfilled, (state, action) => {
        state.registers = action.payload;
      })
      .addCase(operations.rejected, (state) => {
        state.error = true;
      });
  },
});

const operationReducer = operationSlice.reducer;
export const { modalChange } = operationSlice.actions;
export default operationReducer;
