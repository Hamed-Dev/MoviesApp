import axios from 'axios'
import React, { useEffect, useState, useRef, Children } from 'react'
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native'
import { Rating } from 'react-native-ratings'
import Button from '../components/ui/Button'
import TopBar from '../components/ui/TopBar'
import colors from '../utils/colors'
import { hp, wp } from '../utils/dimensions'
import { useSelector, useDispatch } from 'react-redux'
import Modal from 'react-native-modal';
import Strings from '../constants/Strings'

import fonts from '../constants/fonts'

import FontsSizes from '../utils/FontsSizes'
import { moderateScale, responsiveWidth } from '../utils/ResponsiveDimentions'
import { NavigationContainer } from '@react-navigation/native'
//import Modal from 'react-native-modal';


const SuccessModal = (props) => {
 
    const reduxState = useSelector(state => state)
    const currentUser = reduxState.auth.currentUser
    const isRtl = reduxState.lang.isRtl

    const [isVisible, setIsVisible] = useState(props.open)

    const {open,onOutPress,children,style, load} = props

console.log('PROPROPRO', props.open)
    return (
        <Modal isVisible={isVisible} onBackdropPress={() => setIsVisible(prev => !prev)} style={{ width: wp(57), height: hp(21), alignSelf: 'center' }}
            onModalHide={() => props.back ? props.navigation.pop() : null}>
            {children}
        </Modal>
    )


}

export default SuccessModal