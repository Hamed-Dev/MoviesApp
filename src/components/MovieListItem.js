// packge import
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import FastImage from 'react-native-fast-image';
import colors from '../utils/colors';
import FontsSizes from '../constants/FontsSizes';
import { wp, hp } from '../utils/dimensions';
import { moderateScale } from '../utils/ResponsiveDimentions';
import { Rating } from 'react-native-ratings'
import { deleteMoviesById, updateMovieData } from '../MoviesLocalDB/MoviesTableScript'
import { deleteMovie, updateMovie } from '../redux/features/movies/moviesSlice';
import Input from './ui/Input';
import Button from './ui/Button';
import Modal from "react-native-modal";
import { Formik } from 'formik';
import { addUpdateMovieSchema } from '../controllers/ValidationSchema';

const MovieListItem = (props) => {
    const dispatch = useDispatch();
    const formikRef = useRef()
    const [modalAlertVisible, setModalAlertVisible] = useState(false)


    const editMovieDataModal = () => {
        return (
            <Modal
                transparent
                isVisible={modalAlertVisible}
                onBackdropPress={() => setModalAlertVisible(prev => !prev)}
            >
                <Formik
                    innerRef={formikRef}
                    initialValues={{ movieName: props.item.movieName, movieDescription: props.item.movieDescription, movieRate: props.item.movieRate.toString() }}
                    validateOnMount={true}
                    onSubmit={values => {
                        setModalAlertVisible(false)
                        updateMovieData(props.item.id, values.movieName, values.movieDescription, values.movieRate) //// update movie in DB
                        dispatch(updateMovie({ id: props.item.id, movieName: values.movieName, movieDescription: values.movieDescription, movieRate: values.movieRate }))  //// update movie in redux

                    }}
                    validationSchema={addUpdateMovieSchema} >
                    {({ handleChange, handleBlur, handleSubmit, values, touched, errors, isValid }) => (

                        <View style={[{ width: '90%', alignSelf: 'center', backgroundColor: 'white' }, styles.inputForm]} >

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

                            <Button mainBtn btnStyle={{ height: hp(5.5), marginTop: 30 }} txtStyle={{ fontWeight: 'bold' }} title='UPDATE MOVIE'
                                onPress={handleSubmit}
                            />
                        </View>
                    )}
                </Formik>
            </Modal>
        )
    }



    const rateSectionView = () => {
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                <Rating
                    type={'star'}
                    ratingCount={5}
                    readonly
                    imageSize={moderateScale(4.5)}
                    startingValue={props.item.movieRate}
                    starContainerStyle={{ marginHorizontal: 10 }}
                />
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '30%' }}>
                    <Text style={{ color: colors.primary, fontSize: FontsSizes.font12 }}
                        onPress={() => {
                            setModalAlertVisible(true)
                        }}>Edit</Text>
                    <Text style={{ color: colors.alarmColor, fontSize: FontsSizes.font12, marginHorizontal: 14 }}
                        onPress={() => {
                            deleteMoviesById(props.item.id) //// delete current movie from DB
                            dispatch(deleteMovie({ id: props.item.id })) /// delete current movie from redux
                        }}>Delete</Text>
                </View>
            </View>
        )
    }

    return (
        <View style={{ width: '100%', alignItems: 'center', marginTop: moderateScale(10) }}>
            <View style={{ width: '90%', flexDirection: 'row', justifyContent: 'space-between' }}>

                <FastImage source={props.img} style={[{ alignSelf: 'center', height: wp(35), width: wp(25) }, styles.img]} resizeMode='stretch' />
                <View style={{ width: wp(62), }}>
                    <View style={{ height: wp(30) }}>
                        <Text style={[styles.titleStyle]}>{props.item.movieName}</Text>
                        <Text numberOfLines={1} style={[styles.descStyle]}>{props.item.movieDescription}</Text>
                    </View>
                    {rateSectionView()}
                </View>
            </View>
            {editMovieDataModal()}
        </View>


    );
};

const styles = StyleSheet.create({
    img: {
        borderRadius: moderateScale(3),
        backgroundColor: 'white',
        elevation: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: .2,
        shadowRadius: 8,
    },
    titleStyle: {
        textAlign: 'left',
        fontSize: FontsSizes.font14,
        marginTop: 5,
        fontWeight: 'bold',
        color: 'black'
    },
    descStyle: {
        textAlign: 'left',
        fontSize: FontsSizes.font12 - 1,
        marginTop: 5,
        color: colors.descriptionColor
    },
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

});

export default MovieListItem;
