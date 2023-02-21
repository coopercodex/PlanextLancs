import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pictures: []
}

export const gallerySlice = createSlice({
  name: "pictures",
  initialState,
  reducers: {
    addToGallery: (state, action) => {
      const item = state.pictures.find((picture) => picture.id === action.payload.id)
      if (!item) {
        state.pictures.push(action.payload)
      } 
    },
    removeFromGallery: (state, action) => {
      state.pictures = state.pictures.filter(picture => picture.id !== action.payload)
    },
  },
}) 

export const { addToGallery, removeFromGallery } = gallerySlice.actions;
export const selectItems = (state) => state.pictures.pictures;
export default gallerySlice.reducer;