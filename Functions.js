import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Dimensions, ImageBackground, Image, ScrollView } from 'react-native';
import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export class Functions extends Component {
	constructor(props) {
		super(props);
		this.state = {
			homePageDisplay: 'block',
			projectsPageDisplay: 'none',
			requestPageDisplay: 'none',
		}
	}

	

	render() {

	}
}

const functions = new Functions();
export default functions;