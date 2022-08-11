//
import React, { Component } from "react";
import { Text, View } from "react-native";


import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import EvilIcon from 'react-native-vector-icons/EvilIcons'
import FeatherIcon from 'react-native-vector-icons/Feather'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import FontAwesome5ProIcon from 'react-native-vector-icons/FontAwesome5Pro'
import FontistoIcon from 'react-native-vector-icons/Fontisto'
import FoundationIcon from 'react-native-vector-icons/Foundation'
import IoniconsIcon from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIconsIcon from 'react-native-vector-icons/MaterialIcons'
import OcticonsIcon from 'react-native-vector-icons/Octicons'


const AppIcon = (props) => {
    return (
        props.type == 'AntDesign' ?
            <AntDesignIcon name={props.name} style={props.style} />
            :
            props.type == 'Entypo' ?
                <EntypoIcon name={props.name} style={props.style} />
                :
                props.type == 'EvilIcons' ?
                    <EvilIcon name={props.name} style={props.style} />
                    :
                    props.type == 'FontAwesome' ?
                        <FontAwesomeIcon name={props.name} style={props.style} />
                        :
                        props.type == 'FontAwesome5' ?
                            <FontAwesome5Icon name={props.name} style={props.style} />
                            :
                            props.type == 'FontAwesome5Pro' ?
                                <FontAwesome5ProIcon name={props.name} style={props.style} />
                                :
                                props.type == 'Fontisto' ?
                                    <FontistoIcon name={props.name} style={props.style} />
                                    :
                                    props.type == 'Foundation' ?
                                        <FoundationIcon name={props.name} style={props.style} />
                                        :
                                        props.type == 'Ionicons' ?
                                            <IoniconsIcon name={props.name} style={props.style} />
                                            :
                                            props.type == 'MaterialCommunityIcons' ?
                                                <MaterialCommunityIconsIcon name={props.name} style={props.style} />
                                                :
                                                props.type == 'MaterialIcons' ?
                                                    <MaterialIconsIcon name={props.name} style={props.style} />
                                                    :
                                                    props.type == 'Octicons' ?
                                                        <OcticonsIcon name={props.name} style={props.style} />
                                                        :
                                                        props.type == 'Feather' ?
                                                            <FeatherIcon name={props.name} style={props.style} />
                                                            :
                                                            <AntDesignIcon name='question' color='black' size={25} />
    )
}

export default AppIcon