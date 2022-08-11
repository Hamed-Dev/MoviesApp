import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import FastImage from 'react-native-fast-image';
import fonts from '../constants/fonts';
import FontsSizes from '../constants/FontsSizes';
import { wp } from '../utils/dimensions';
import responsiveFont from '../utils/responsiveFont';

const NoFoundData = (props) => {
    return (
        <View style={[{ width:'100%',height:'100%', justifyContent: 'center', alignItems: 'center', },props.containerStyle]}>
            
            {props.image &&
                <FastImage source={props.image} style={[{ width: wp(20), height: wp(20) }, props.imgStyle]} resizeMode={FastImage.resizeMode.contain} />
            }
            <Text allowFontScaling={false} style={[{ marginTop: 5, color:props.color? props.color: 'white', fontFamily: fonts.lexendMedium, fontSize:FontsSizes.font20 }, props.titleStyle]}>{props.title}</Text>
        </View>
    )
}

export default NoFoundData

const styles = StyleSheet.create({})
