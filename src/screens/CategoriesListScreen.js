import React, { useEffect, useState, useRef } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import ScreenListComponent from "../components/ui/ScreenListComponent"; /// container screen for flatlist 
import Button from '../components/ui/Button'
import { clearCategories } from '../redux/features/categories/categorySlice';
import Input from '../components/ui/Input';
import { moderateScale } from '../utils/ResponsiveDimentions';
import { hp, wp } from '../utils/dimensions';
import CategoryListItem from '../components/CategoryListItem';
import { insertIntoCategoryTable, getAllCategories } from '../MoviesLocalDB/CategoryTableScript';
import { Formik } from 'formik';
import { addCategorySchema } from '../controllers/ValidationSchema';
import TopBar from '../components/ui/TopBar';
import AppSuccessDialog from '../common/AppSuccessDialog'



const CategoriesListScreen = ({ navigation }) => {
    const categories = useSelector(state => state.category.categories)
    const dispatch = useDispatch()
    const formikRef = useRef()
    const [loading, setLoading] = useState(true)
    const [isSuccess, setIsSuccess] = useState(false)

    useEffect(() => {
       // dispatch(clearCategories())  //// clear categories from redux
        getAllCategories(dispatch)  //// get all categories from categories table (local db) and assign into categories redux to show in flatlist 
        setTimeout(() => {
            setLoading((false))

        }, 200);
    }, [])

    const addNewCategoryView = () => {
        return (
            <Formik
                innerRef={formikRef}
                initialValues={{ categoryName: '', categoryDescription: '' }}
                validateOnMount={true}
                onSubmit={values => {
                    insertIntoCategoryTable(values.categoryName, values.categoryDescription, dispatch)  ///// insert new data into Category table in local db
                    setIsSuccess(true)
                }}
                validationSchema={addCategorySchema} >
                {({ handleChange, handleBlur, handleSubmit, values, touched, errors, isValid }) => (
                    <View style={[{ width: '90%', alignSelf: 'center' }, styles.inputForm]}>

                        <Input
                            title='Category Name'
                            inputIconType='Ionicons'
                            inputIconName='document-text-outline'
                            handleChange={handleChange('categoryName')}
                            handleBlur={handleBlur('categoryName')}
                            value={values.categoryName}
                            errors={errors.categoryName}
                            touched={touched.categoryName}
                        />

                        <Input
                            title='Category Description'
                            inputIconType='Ionicons'
                            inputIconName='document-text-outline'
                            handleChange={handleChange('categoryDescription')}
                            handleBlur={handleBlur('categoryDescription')}
                            value={values.categoryDescription}
                            errors={errors.categoryDescription}
                            touched={touched.categoryDescription}
                        />

                        <Button mainBtn btnStyle={{ height: hp(5.5), marginTop: 30 }} txtStyle={{ fontWeight: 'bold' }} title='CREATE'
                            onPress={handleSubmit}
                        />
                    </View>
                )}
            </Formik>
        )
    }

    return (
        <View style={{flex:1}}>
            <TopBar navigation={navigation} title={'Categories'} />
            <ScreenListComponent data={categories} loading={loading} viewIfNoData={addNewCategoryView()}>

                <View>
                    <FlatList
                        ListHeaderComponent={
                            addNewCategoryView()
                        }
                        contentContainerStyle={{ alignSelf: 'center', width: wp(95), paddingBottom: 10 }} data={categories} numColumns={2} keyExtractor={item => item.id} renderItem={({ item, index }) =>
                            <CategoryListItem navigation={navigation} item={item} img={require('../assets/images/film-img.jpg')} />
                        }
                    />
                </View>

            </ScreenListComponent>
            <AppSuccessDialog
                open={isSuccess}
                message={'Category added successfully'}
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

export default CategoriesListScreen
