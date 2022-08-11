import { configureStore } from '@reduxjs/toolkit'

import categoryReducer from "./features/categories/categorySlice";
import moviesReducer from './features/movies/moviesSlice';
export const store = configureStore({
    reducer: {
        category: categoryReducer,
        movies: moviesReducer
    },
})