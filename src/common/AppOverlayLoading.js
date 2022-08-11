//
import React, { Component } from "react";
import { Text, View, ActivityIndicator, TouchableOpacity, TouchableWithoutFeedback, ScrollView } from "react-native";
import dimensions from "../constants/dimensions";
import colors from "../utils/colors";

const AppOverlayLoading = (props) => {

    return (
        <View style={{ zIndex: 10000000, elevation: 10, shadowOffset: { height: 0, width: 2 }, shadowOpacity: 0.2, shadowColor: 'black', shadowRadius: 2.62, position: 'absolute', bottom: 0, left: 0, right: 0, top: 0, backgroundColor: 'rgba(0,0,0,0.4)', alignItems: 'center', justifyContent: 'center' }} >

            <View style={{ backgroundColor: 'black', borderRadius: 6, width: dimensions.width * .25, height: dimensions.width * .25, alignSelf: 'center', justifyContent: 'center', alignItems: 'center', opacity: 0.5 }}>
                <ActivityIndicator color={colors.primary} size='large' />
            </View>

        </View>
    )

}

export default AppOverlayLoading;
