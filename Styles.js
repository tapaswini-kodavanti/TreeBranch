import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Dimensions, ImageBackground, Image, ScrollView } from 'react-native';
import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    
    background: {
        height: deviceHeight / 2,
        width: deviceWidth,
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    navBar: {
        height: deviceHeight / 10,
        width: deviceWidth,
        backgroundColor: 'rgba(92, 92, 92, 0.5)' ,
        flexDirection: 'row',
        justifyContent: 'space-around',
        
    },
    
    navBarButton: {
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    
    navBarImage: {
        height: (deviceHeight / 266) * 15,
        width: (deviceWidth / 10),
    },
    
    navBarButtonText: {
        fontFamily: 'Avenir',
        fontSize: (deviceHeight / 266) * 5,
        color: '#6b504e',
    },
    
    
    
    // ---------- Start Screen ---------- \\

     // Title container
    titleContainer: {
        backgroundColor: 'rgba(92, 92, 92, 0.5)' ,
        borderColor: 'white',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        // width: (deviceWidth / 4) * 3,
        width: deviceWidth,
        height: deviceHeight / 3,
        
        alignItems: 'center',
        // justifyContent: 'center',
    },

    titleText: {
        margin: (deviceHeight / 266) * 5,
        fontSize: (deviceHeight / 133) * 4,
        // fontWeight: 'bold',
        fontFamily: 'Avenir',
        textAlign: 'center',
        color: 'white',
    },
    
    // Buttons
    buttonContainer: {
        height: (deviceHeight / 5) * 2,
        width: deviceWidth,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    
    button: {
        backgroundColor: 'gray',
        borderColor: '#6b504e',
        borderWidth: 2,
        height: deviceHeight / 7, 
        width: (deviceWidth / 7) * 6,
        borderRadius: 10,
        
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonText: {
        fontFamily: 'Avenir',
        color: '#6b504e',
        fontSize: (deviceHeight / 266) * 12,
    },
    
    // Attributions

    attributionsContainer: {
        // height: (deviceHeight / 10) * 9,
        // width: deviceWidth,
    },

    attributionText: {
        fontSize: (deviceHeight / 133) * 3,
        fontFamily: 'Avenir',
        color: '#6b504e',
        marginTop: (deviceHeight / 266) * 5,
        marginLeft: 30,
    },
    
    


    // ---------- Projects Screen ---------- \\


    // Containers
    projectContainer: {
        height: (deviceHeight / 3) * 1,
        width: (deviceWidth / 6) * 5,
        borderRadius: 10,
        marginTop: 30,
        marginBottom: 2,
        flexDirection: 'row',
        alignItems: 'center',
    },

    projectTextContainer: {
        height: (deviceHeight / 3) * 1,
        width: (deviceWidth / 12) * 7,
        // justifyContent: 'space-around',
    },


    // Text styles
    projectTitle: {
        marginLeft: 10,
        marginTop: 20,
        fontSize: (deviceHeight / 266) * 10,
        fontFamily: 'Avenir',

    },

    projectDesc: {
        marginLeft: 10,
        marginBottom: 30,
        fontSize: (deviceHeight / 266) * 5,
        fontFamily: 'Avenir',
    },

    projectInfo: {
        marginLeft: 10,
        fontSize: (deviceHeight / 266) * 6,
        fontFamily: 'Avenir',
    },

    projectIcon: {
        height: 80,
        width: 80,
    },

    // Heading Container

    headingContainer: {
        height: (deviceHeight / 10) * 1.5,
        width: deviceWidth, 
        justifyContent: 'center',
    },

    header: {
        fontFamily: 'Avenir',
        fontWeight: "800",
        color: 'black',
        fontSize: (deviceHeight / 266) * 18,
        marginLeft: 30,
        marginTop: 15,
    },


    // ---------- Request Screen ---------- \\

    inputContainer: {
        // backgroundColor: 'lightgray',
        height: (deviceHeight / 6),
        justifyContent: 'space-around',
    },

    inputLabel: {
        fontSize: (deviceHeight / 133) * 4,
        fontFamily: 'Avenir',
        color: 'black',
        // marginLeft: 30,
    },

    textInput: {
        backgroundColor: 'rgba(92, 92, 92, 0.5)' ,
        borderColor: '#6b504e',
        borderWidth: 2,
        height: (deviceHeight / 10),
        width: (deviceWidth / 6) * 5,
        borderRadius: 10,
        // marginLeft: 30,
        justifyContent: 'center',
        fontSize: (deviceHeight / 133) * 3,
        fontFamily: 'Avenir',
        color: '#ffffff',
    },

    pickerContainer: {
        // backgroundColor: 'lightgray',
        height: (deviceHeight / 6),
        // justifyContent: 'space-around',
        // marginBottom: 30,

    },

    pickerStyle: {
        // height: 50, 
        // width: 150, 
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
    },
    
});

module.exports = styles;
