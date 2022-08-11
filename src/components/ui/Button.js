import React from 'react'
import { StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native'
import colors from '../../utils/colors'
import { wp, hp } from '../../utils/dimensions'
import Loading from './Loading'
import { moderateScale } from '../../utils/ResponsiveDimentions'
import FontsSizes from '../../constants/FontsSizes'

const Button = (props) => {
    return (
        <TouchableOpacity disabled={props.disabled} activeOpacity={0.7} style={[styles.btnStyle, { backgroundColor: props.mainBtn ? colors.primary : 'transparent', borderColor: props.mainBtn ? 'transparent' : colors.primary, borderWidth: 1, opacity: props.disabled || props.loading ? 0.7 : 1, height: hp(5.5) }, props.btnStyle]} onPress={props.onPress}>
            {props.loading ?
                <Loading color='white' />
                :
                <Text allowFontScaling={false} style={[{ color: props.mainBtn ? 'white' : colors.primary }, styles.title, props.txtStyle, props.icon ? { paddingEnd: '1%' } : null]}>{props.title}</Text>
            }
            {/* <Loading /> */}
            {props.img && <Image source={props.img} style={{ width: wp(6), marginEnd: '7.5%', height: wp(8), resizeMode: 'contain', tintColor: 'white' }} />}
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    btnStyle: {

        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: moderateScale(3),
        flexDirection: 'row',
        overflow: 'hidden',
        alignSelf: 'center',
        width: '100%'
    },
    title: {
        fontSize: FontsSizes.font18
    }
})
