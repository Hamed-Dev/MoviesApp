import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categories: [],
}

export const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addNewCategory: (state, action) => {
      if (state.categories.filter(itm => itm.categoryName === action.payload.categoryName).length <= 0) { /// check if the new category name is inserted before
        state.categories = [action.payload, ...state.categories]
      }
    },
    clearCategories: (state, action) => {
      state.categories = []
    },

  },
})

// Action creators are generated for each case reducer function
export const { addNewCategory, clearCategories } = categorySlice.actions

export default categorySlice.reducer