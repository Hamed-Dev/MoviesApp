import sqlite, { openDatabase } from "react-native-sqlite-storage";

export const db =
    sqlite.openDatabase({
        name: 'MoviesDB',
        location: 'default',
        createFromLocation: '~www/MoviesDB.db',
    },
        () => { console.log('Connection Success',) },
        error => console.log(error)
    )


//// Create Categories Table if not exist
export const createCategoryTable = () => {
    db.transaction((trx) => {
        console.log('DDB', trx)
        trx.executeSql('CREATE TABLE IF NOT EXISTS categories (id INTEGER PRIMARY KEY AUTOINCREMENT, cat_name VARCHAR(30), cat_description VARCHAR(255))',
            []
        )
    })
}

//// Drop Categories Table 
export const dropCategoryTable = () => {
    db.transaction((trx) => {
        trx.executeSql('DROP TABLE  categories ')
    })
}

///////////////////////////////////////

//// Create Movies Table if not exist
export const createMoviesTable = () => {
    db.transaction((trx) => {
        console.log('DDB', trx)
        trx.executeSql('CREATE TABLE IF NOT EXISTS movies (id INTEGER PRIMARY KEY AUTOINCREMENT, movie_name VARCHAR(30), movie_description VARCHAR(255), movie_rate NUMBER, cat_id INTEGER)',
            []
        )
    })
}

//// Drop Movies Table 
export const dropMoviesTable = () => {
    db.transaction((trx) => {
        trx.executeSql('DROP TABLE  movies ')
    })
}