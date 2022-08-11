import React from 'react'
import { StyleSheet, Text, View,ActivityIndicator } from 'react-native'

import colors from '../../utils/colors';

const Loading = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <ActivityIndicator color={colors.primary} size='small' />
        </View>
    )
}

export default Loading

const styles = StyleSheet.create({})
