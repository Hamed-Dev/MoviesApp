import React from 'react'
import { StyleSheet, TouchableWithoutFeedback, Keyboard, ImageBackground, SafeAreaView, View, Text } from 'react-native'
import { hp, wp } from '../../utils/dimensions'
import AppOverlayLoading from '../../common/AppOverlayLoading'
import FontsSizes from '../../constants/FontsSizes'
import { moderateScale } from '../../utils/ResponsiveDimentions'
import colors from '../../utils/colors'

const ScreenListComponent = (props) => {

    return (
        <View style={{ flex: 1, backgroundColor: props.backgroundColor ? backgroundColorbackgroundColor : 'white' }}>

            {props.data ?
                ////// if prop.data key is found
                props.data.length <= 0 && !props.loading ?
                    ///// if the prop.data key length <=0 mean is empty  and in the same time the props.loading = false
                    <>
                    {/* show input form if data is empty */}
                        {props.viewIfNoData ?
                            props.viewIfNoData
                            :
                            null}

                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ textAlign: 'center', fontSize: FontsSizes.font22, marginTop: moderateScale(5) }}>
                                No data found
                            </Text>
                        </View>
                    </>
                    :
                    <View style={{ flex: 1, }}>
                        {props.children}
                    </View>
                :
                <View style={{ flex: 1, }}>
                    {props.children}
                </View>
            }
            {props.loading && <AppOverlayLoading />}
        </View>
    )
}

export default ScreenListComponent

const styles = StyleSheet.create({
    screenView: {
        flex: 1,
        backgroundColor: 'white'

    },
})
