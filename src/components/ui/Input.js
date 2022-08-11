// package import
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, TextInput, Image, View, TouchableOpacity } from 'react-native'

// utils import
import colors from '../../utils/colors'
import { wp, hp } from '../../utils/dimensions'

import FontsSizes from '../../constants/FontsSizes'
import { moderateScale } from '../../utils/ResponsiveDimentions'
// icons import
import AppIcon from './AppIcon';
const Input = (props) => {
    const [inputType, setInputType] = useState(props.secureTextEntry ? true : false)  /// if input is password type 

    return (

        <View style={{ width: '100%', alignSelf: 'center', marginTop: moderateScale(8) }}>

            <View style={{ marginBottom: 2, borderBottomWidth: 1, borderBottomColor: ((props.errors && props.touched) || props.inputError) ? 'red' : colors.borderColor, borderRadius: moderateScale(4) }}>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: moderateScale(3) }}>
                    {props.inputIconType &&
                        <AppIcon type={props.inputIconType} name={props.inputIconName} style={{ color: colors.placeholderColor, fontSize: FontsSizes.font20, marginHorizontal: moderateScale(2) }} />
                    }
                    <TextInput allowFontScaling={false}
                        style={[styles.input, props.style]}
                        placeholder={props.title}
                        placeholderTextColor={colors.placeholderColor}
                        onChangeText={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.value}
                        secureTextEntry={inputType}
                        {...props}
                    />

                    {props.dropDownInput &&
                        /// this absolute TouchableOpacity ....  if input is dropdown list to click on it to fire any callback action
                        <TouchableOpacity onPress={() => props.handleClick(true)}
                            style={{ position: 'absolute', width: '100%', height: '100%' }}>
                        </TouchableOpacity>
                    }

                    {props.secureTextEntry &&
                        ///  eye icon to hide or show password text ..... if input is password type
                        <TouchableOpacity onPress={() => setInputType(!inputType)}
                            style={{ width: wp(10), height: hp(6), alignItems: 'center', justifyContent: 'center' }}>
                            <AppIcon type={'MaterialCommunityIcons'} name={inputType ? 'eye-off' : 'eye'} style={{ color: colors.primary, fontSize: FontsSizes.font20 }} />
                        </TouchableOpacity>
                    }
                </View>
            </View >
            {(props.errors && props.touched) &&
                <Text allowFontScaling={false} style={[styles.errorMsg, { textAlign: 'right', paddingHorizontal: wp(2), }]}>{props.errors}</Text>
            }
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    errorMsg: {
        color: 'red',
        fontSize: FontsSizes.font12,
    },
    inputCon: {

    },
    input: {
        width: '90%', height: hp(5.5), color: 'black', fontSize: FontsSizes.font14

    }
})
