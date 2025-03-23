import { createSlice } from "@reduxjs/toolkit";

const chackToLocalstorage = () => {
  const data = localStorage.getItem("formData");
  return data ? JSON.parse(data) : [];
};

const formSlice = createSlice({
  name: "form",
  initialState: {
    data: chackToLocalstorage(),
  },

  reducers: {
    addFormData: (state, action) => {
      const existingData = chackToLocalstorage();
      const newData = existingData.length
        ? [...existingData, action.payload]
        : [action.payload];

      state.data = newData;
      localStorage.setItem("formData", JSON.stringify(newData));
    },
  },
});

export const { addFormData } = formSlice.actions;
export default formSlice.reducer;
