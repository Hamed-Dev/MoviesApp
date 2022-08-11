import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    movies: [],
}

export const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        addNewMovie: (state, action) => {
            if (state.movies.filter(itm => itm.movieName === action.payload.movieName).length <= 0) { /// check if the new movie name is inserted before
                state.movies = [action.payload, ...state.movies]
            }
        },
        deleteMovie: (state, action) => {
            var newMovies = state.movies.filter(itm => itm.id != action.payload.id)/// get movies redux without selected movie
            state.movies = newMovies /// assign new filtered movies without selected movie

        },
        clearMovies: (state, action) => {
            state.movies = []
        },
        updateMovie: (state, action) => {
            var movies = state.movies
            var currentMovieIndex = movies.findIndex(itm => itm.id === action.payload.id) /// get current movie to edit 
            movies[currentMovieIndex]['movieName'] = action.payload.movieName
            movies[currentMovieIndex]['movieDescription'] = action.payload.movieDescription
            movies[currentMovieIndex]['movieRate'] = action.payload.movieRate
            state.movies = movies /// reset the updated movie
        },
        resetNewMovies: (state, action) => {
            state.movies = action.payload /// set new movies 
        },

    },
})

// Action creators are generated for each case reducer function
export const { addNewMovie, clearMovies, updateMovie, deleteMovie, resetNewMovies } = moviesSlice.actions

export default moviesSlice.reducer