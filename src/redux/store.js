import { configureStore } from '@reduxjs/toolkit'
import galleryReducer from './gallerySlice'

export const store = configureStore({
  reducer: {
    pictures: galleryReducer,
  },
})