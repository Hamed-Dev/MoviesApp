import { db, createMoviesTable } from "./DBConnection";
import { addNewMovie } from "../redux/features/movies/moviesSlice";


/// insert Into Movie Table 
export const insertIntoMoviesTable = async (name, description, rate, cat_id, dispatch) => {
    createMoviesTable()
    await db.transaction((trx) => {
        trx.executeSql('INSERT INTO movies (movie_name, movie_description, movie_rate, cat_id ) '
            + ' VALUES ("' + name + '","' + description + '",' + rate + ', ' + cat_id + ')',
            [],
            (trx, result) => {
                getMovieById(result.insertId, dispatch)
            })
    })
}


/// insert Into Movie Table 
export const updateMovieData = async (id, name, description, rate) => {

    await db.transaction((trx) => {
        trx.executeSql('UPDATE movies '
            + ' SET movie_name= "' + name + '"'
            + ' , movie_description= "' + description + '"'
            + ' , movie_rate = ' + rate
            + ' WHERE id =' + id,
            [],
            (trx, result) => {

            })
    })
}


/// select from  Movie Table by id
export const getMovieById = (id, dispatch) => {
    db.transaction((trx) => {
        trx.executeSql('SELECT * FROM movies WHERE id = ' + id,
            [],
            (trx, results) => {
                var reslt = results.rows.item(0)
                dispatch(addNewMovie({ id: reslt.id, movieName: reslt.movie_name, movieDescription: reslt.movie_description, movieRate: reslt.movie_rate, categoryId: reslt.cat_id }))
            })
    })
}


/// select from  Movie Table by category id
export const getAllMoviesByCategoryId = (categoryId, dispatch) => {
    return db.transaction((trx) => {
        trx.executeSql('SELECT * FROM movies WHERE cat_id = ' + categoryId,
            [],
            (trx, results) => {
                var reslt = results.rows
                for (let i = 0; i <= results.rows.length; i++) {
                    /// get all movies from moviees table and add into movies redux 
                    dispatch(addNewMovie({ id: reslt.item(i).id, movieName: reslt.item(i).movie_name, movieDescription: reslt.item(i).movie_description, movieRate: reslt.item(i).movie_rate, categoryId: reslt.item(i).cat_id }))
                }

            })
    })
}

/// delete from  Movie Table by movie id
export const deleteMoviesById = (id) => {
    db.transaction((trx) => {
        trx.executeSql('DELETE FROM movies WHERE id = ' + id,
            [],
            (trx, results) => {

            })
    })
}