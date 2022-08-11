import React, { useEffect, useState, useRef } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import ScreenListComponent from "../components/ui/ScreenListComponent"; /// container screen for flatlist 
import Button from '../components/ui/Button'
import { addNewMovie, clearMovies } from '../redux/features/movies/moviesSlice';
import Input from '../components/ui/Input';
import { moderateScale } from '../utils/ResponsiveDimentions';
import { hp, wp } from '../utils/dimensions';
import { getAllMoviesByCategoryId, insertIntoMoviesTable } from '../MoviesLocalDB/MoviesTableScript';
import MovieListItem from '../components/MovieListItem';
import { Formik } from 'formik';
import { addUpdateMovieSchema } from '../controllers/ValidationSchema';
import TopBar from '../components/ui/TopBar'
import AppSuccessDialog from '../common/AppSuccessDialog'



const MoviesListScreen = ({ navigation, route }) => {
    const movies = useSelector(state => state.movies.movies)
    const { category } = route.params //// data from category list screen
    const dispatch = useDispatch()
    const formikRef = useRef()
    const [loading, setLoading] = useState(true)
    const [isSuccess, setIsSuccess] = useState(false)

    useEffect(() => {
        // dispatch(clearMovies())  //// clear movies from redux
        getAllMoviesByCategoryId(category.id, dispatch) //// get all movies from movies table (local db) and assign into movies redux to show in flatlist
        setTimeout(() => {
            setLoading((false))
        }, 400);
    }, [])



    const addNewMovieView = () => {
        return (
            <Formik
                innerRef={formikRef}
                initialValues={{ movieName: '', movieDescription: '', movieRate: '' }}
                validateOnMount={true}
                onSubmit={values => {
                    insertIntoMoviesTable(values.movieName, values.movieDescription, values.movieRate, category.id, dispatch)  ///// insert new data into movies table in local db
                    setIsSuccess(true)
                }}
                validationSchema={addUpdateMovieSchema} >
                {({ handleChange, handleBlur, handleSubmit, values, touched, errors, isValid }) => (
                    <View style={[{ width: '90%', alignSelf: 'center' }, styles.inputForm]}>

                        <Input
                            title='Movie Name'
                            inputIconType='Ionicons'
                            inputIconName='document-text-outline'
                            handleChange={handleChange('movieName')}
                            handleBlur={handleBlur('movieName')}
                            value={values.movieName}
                            errors={errors.movieName}
                            touched={touched.movieName}
                        />

                        <Input
                            title='Movie Description'
                            inputIconType='Ionicons'
                            inputIconName='document-text-outline'
                            handleChange={handleChange('movieDescription')}
                            handleBlur={handleBlur('movieDescription')}
                            value={values.movieDescription}
                            errors={errors.movieDescription}
                            touched={touched.movieDescription}
                        />

                        <Input
                            title='Movie Rate'
                            inputIconType='Ionicons'
                            inputIconName='document-text-outline'
                            handleChange={handleChange('movieRate')}
                            handleBlur={handleBlur('movieRate')}
                            value={values.movieRate}
                            errors={errors.movieRate}
                            touched={touched.movieRate}
                        />

                        <Button mainBtn btnStyle={{ height: hp(5.5), marginTop: 30 }} txtStyle={{ fontWeight: 'bold' }} title='ADD MOVIE'
                            onPress={handleSubmit}
                        />
                    </View>
                )}
            </Formik>
        )
    }

    return (
        <View style={{ flex: 1 }}>
            <TopBar back navigation={navigation} title={'Movies'} />
            <ScreenListComponent data={movies} loading={loading} viewIfNoData={addNewMovieView()}>

                <View>
                    <FlatList
                        ListHeaderComponent={
                            addNewMovieView()
                        }
                        contentContainerStyle={{ alignSelf: 'center', width: '100%', paddingBottom: 10 }} data={movies} keyExtractor={item => item.id} renderItem={({ item, index }) =>
                            <MovieListItem navigation={navigation} item={item} img={require('../assets/images/film-img.jpg')} />
                        }
                    />
                </View>
            </ScreenListComponent>
            <AppSuccessDialog
                open={isSuccess}
                message={'Movie added successfully'}
                onPress={() => setIsSuccess(false)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    inputForm: {
        marginTop: moderateScale(10),
        padding: moderateScale(8),
        borderRadius: moderateScale(3),
        backgroundColor: 'white',
        elevation: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: .15,
        shadowRadius: 8,
    }
})

export default MoviesListScreen
