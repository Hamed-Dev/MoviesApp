// packge import
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    View,
    Text,
    StyleSheet, TouchableOpacity
} from 'react-native';
import FastImage from 'react-native-fast-image';
import colors from '../utils/colors';
import FontsSizes from '../constants/FontsSizes';
import { wp, hp } from '../utils/dimensions';
import { moderateScale } from '../utils/ResponsiveDimentions';

const CategoryListItem = (props) => {


    return (
        <View style={{ width: wp(95) / 2, alignItems: 'center', marginTop:moderateScale(10) }}>
            <TouchableOpacity style={{ width: wp(85) / 2 }}
                onPress={() => props.navigation.navigate('MoviesList', { category: props.item })}>

                <FastImage source={props.img} style={[{ alignSelf: 'center', height: wp(55), width: '100%' }, styles.img]} resizeMode='stretch' />

                <Text style={[styles.titleStyle]}>{props.item.categoryName}</Text>
                <Text numberOfLines={1} style={[styles.descStyle]}>{props.item.categoryDescription}</Text>
            </TouchableOpacity>
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
        fontWeight: 'bold'
    },
    descStyle: {
        textAlign: 'left',
        fontSize: FontsSizes.font12,
        marginTop: 5,
        color: colors.primary
    }

});

export default CategoryListItem;
