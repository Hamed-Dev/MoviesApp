import sqlite, { SQLiteDatabase } from "react-native-sqlite-storage";
import { db, createCategoryTable } from "./DBConnection";
import { addNewCategory, resetNewCategoies } from "../redux/features/categories/categorySlice";


/// insert Into categories Table 
export const insertIntoCategoryTable = async (name, description, dispatch) => {
    createCategoryTable()
    await db.transaction((trx) => {
        trx.executeSql('INSERT INTO categories (cat_name, cat_description ) '
            + ' VALUES ("' + name + '","' + description + '")',
            [],
            (trx, result) => {
                getCategoryById(result.insertId, dispatch)
            })
    })
}

/// select from  categories Table by id
export const getCategoryById = (id, dispatch) => {
    db.transaction((trx) => {
        trx.executeSql('SELECT * FROM categories WHERE id = ' + id,
            [],
            (trx, results) => {
                var reslt = results.rows.item(0)
                dispatch(addNewCategory({ id: reslt.id, categoryName: reslt.cat_name, categoryDescription: reslt.cat_description }))  /// add last inserted category into redux 
            })
    })
}

/// select all from  categories Table 
export const getAllCategories = async (dispatch) => {
    await db.transaction((trx) => {
        trx.executeSql('SELECT * FROM categories ',
            [],
            (trx, results) => {
                var reslt = results.rows
                var categoriesArr = []
                for (let i = 0; i < results.rows.length; i++) {
                    /// get all categories from categories table and add into categories redux 
                    categoriesArr.push({ id: reslt.item(i).id, categoryName: reslt.item(i).cat_name, categoryDescription: reslt.item(i).cat_description })

                }
                dispatch(resetNewCategoies(categoriesArr))
            })
    })
}

/// delete from  Movie Table by movie id
export const deleteCategoriesById = (id) => {
    db.transaction((trx) => {
        trx.executeSql('DELETE FROM categories WHERE id = ' + id,
            [],
            (trx, results) => {
            })
    })
}