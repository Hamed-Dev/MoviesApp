import * as yup from 'yup';

//// validation for add new category
export const addCategorySchema = () => {
    return yup.object().shape({
        categoryName: yup.string().trim().required('Required'),
        categoryDescription: yup.string().trim().required('Required'),

    });
}

//// validation for add new / update movie
export const addUpdateMovieSchema = () => {
    return yup.object().shape({
        movieName: yup.string().trim().required('Required'),
        movieDescription: yup.string().trim().required('Required'),
        movieRate: yup.number()
        .typeError("You must specify a number") /// This validation for rate type .... must specify a number 
        .max(5, 'maximum rate is 5') /// This validation for rate value ... max vale is 5
        .min(0, 'minimum rate is 0').required('Required'), /// This validation for rate value ... min vale is 0
    });
}