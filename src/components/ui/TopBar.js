import React from 'react'
import { StyleSheet, Text, Image, View, SafeAreaView, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'
import { hp, wp } from '../../utils/dimensions'
import colors from '../../utils/colors'
import responsiveFont from '../../utils/responsiveFont'
import FontsSizes from '../../constants/FontsSizes'
import AppIcon from './../ui/AppIcon'
import FastImage from 'react-native-fast-image'

const TopBar = (props) => {
    const { color, backgroundColor } = props
    return (

        <SafeAreaView style={{
            width: wp(100),
            height: hp(6),
            backgroundColor: backgroundColor ? backgroundColor : colors.primary,
            flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',

        }}>
            <View style={{ alignItems: 'center', justifyContent: 'center', width: '20%' }}>
                {props.back ?
                    <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} onPress={() => props.navigation.pop()}>
                        <AppIcon type='MaterialIcons' name='arrow-back-ios' style={{ color: 'white', fontSize: FontsSizes.font22 + 6, transform: [{ rotate: '0deg' }] }} />
                    </TouchableOpacity>
                    :

                    <View style={{ alignItems: 'center', justifyContent: 'flex-start', width: '20%' }} />

                }
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'flex-start', width: '55%' }}>
                <Text allowFontScaling={false} style={{fontSize: FontsSizes.font22, color: 'white' }}>{props.title}</Text>
            </View>



            <View style={{ alignItems: 'center', justifyContent: 'flex-start', width: '20%' }} />

        </SafeAreaView >


    )


}

export default TopBar

const styles = StyleSheet.create({
    container: (isRtl) => ({
        width: wp(100),
        height: hp(14),
        flexDirection: isRtl ? 'row-reverse' : 'row',
        backgroundColor: 'white',
        elevation: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.15,
        shadowRadius: 1,
    })
})
