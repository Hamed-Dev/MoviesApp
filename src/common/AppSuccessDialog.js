//
import React, { Component } from "react";
import { useTheme } from '@react-navigation/native';
import { Text, View, ActivityIndicator, TouchableOpacity, TouchableWithoutFeedback, ScrollView } from "react-native";
import * as Animatable from 'react-native-animatable';
import FastImage from 'react-native-fast-image'
import dimensions from "../constants/dimensions";
import responsiveFont from "../constants/responsiveFont";
import colors from '../utils/colors'
import FontsSizes from "../constants/FontsSizes";


const AppSuccessDialog = (props) => {

    //const { myColors } = useTheme();

    // const { RTL, open, message, onPress } = this.props
    //opne: use it to show/hide bottom sheet (require)
    //onOutPress : action to close bottom sheet when press out of it (require)
    return (
        props.open ?
            <TouchableOpacity
                activeOpacity={1} style={{ zIndex: 10000000, elevation: 10, position: 'absolute', left: 0, bottom: 0, right: 0, top: 0, backgroundColor: 'rgba(0,0,0,0.4)', alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}
            >

                <TouchableOpacity activeOpacity={1}>
                    <Animatable.View useNativeDriver duration={500} animation='slideInDown'>
                        <View style={{ alignItems: 'center', width: dimensions.width * .9, height: dimensions.height * .28, backgroundColor: 'white', borderRadius: 6 }} >
                            <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, height: 80, borderRadius: 40, backgroundColor: 'white', marginTop: -26 }} >
                                {/*<Icon name='check' type='AntDesign' style={{ fontSize: responsiveFontSize(20), color: colors.mainColor }} />*/}
                                <FastImage source={require('../assets/images/shopping-check.png')} style={{ width: dimensions.width * .13, height: dimensions.width * .13 }} resizeMode={FastImage.resizeMode.contain} />
                            </View>

                            <Text allowFontScaling={false} style={{ fontSize: FontsSizes.font20, color: colors.primary, marginTop: '2%',  }} >{'Success'}</Text>

                            <Text allowFontScaling={false} style={{ fontSize: FontsSizes.font18, color: 'black', marginTop: '4%',  width: dimensions.width * .8, textAlign: 'center' }} >{props.message}</Text>

                            <TouchableOpacity
                                onPress={() => {
                                    if (props.onPress) {
                                        props.onPress()
                                    }
                                }}
                                style={{ justifyContent: 'center', alignItems: 'center', marginTop: '7%', width: dimensions.width * .7, borderRadius: 4, height: dimensions.height * .06, backgroundColor: colors.primary }} >
                                <Text allowFontScaling={false} style={{ fontSize: FontsSizes.font16, color: 'white',  }} > {'ok'} </Text>
                            </TouchableOpacity>
                        </View>
                    </Animatable.View>
                </TouchableOpacity>
            </TouchableOpacity>
            : null

    )

}




const mapStateToProps = state => ({
    RTL: state.Language.RTL,
});

export default AppSuccessDialog;
