import React from 'react';
import {
	Image,
	Platform,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	KeyboardAvoidingView,
	View,
} from 'react-native';
import Form from './form';

export default class Signup extends React.Component {
	static navigationOptions = {
		header: null,
	};

	render() {
		return (
			<KeyboardAvoidingView behavior="padding" style={styles.container}>
				<View style={styles.logoContainer}>
					<Image
						style={styles.logo}
						source={require('../assets/images/footstepicon.png')}
					/>
					<Text style={styles.title}>Footsteps</Text>
					<Text style={styles.caption}>A new way to interact with your surroundings</Text>
				</View>
				<View style={styles.formContainer}>
					<Form type="Signup"/>
				</View>
				<TouchableOpacity style={styles.signupTextCont}>
					<Text style={styles.signupButton}>Login With Existing Account</Text>
				</TouchableOpacity>
			</KeyboardAvoidingView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#33ccff',
		flex: 1
	},
	logoContainer: {
		alignItems: 'center',
		flexGrow: 1,
		justifyContent: 'center'
	},
	logo: {
		width: 200,
		height: 200
	},
	title: {
		fontWeight: 'bold',
		fontSize: 80,
		color: '#FFF',
		marginTop: 10,
		width: 300,
		textAlign:'center'
	},
	caption: {
		fontSize: 25,
		color: '#575757',
		width: 300,
		textAlign:'center'
	},
	signupTextCont: {
		flexGrow: 1,
		alignItems: 'center',
		justifyContent: 'flex-end',
		paddingVertical: 15
	},
	signupButton: {
		color: 'rgba(255,255,255,0.7)',
		fontSize: 10,
		fontWeight: '800'
	}
	// tabBarInfoContainer: {
	// position: 'absolute',
	// bottom: 0,
	// left: 0,
	// right: 0,
	// ...Platform.select({
	//   ios: {
	// 	shadowColor: 'black',
	// 	shadowOffset: { height: -3 },
	// 	shadowOpacity: 0.1,
	// 	shadowRadius: 3,
	//   },
	//   android: {
	// 	elevation: 20,
	//   },
	// }),
	// alignItems: 'center',
	// backgroundColor: '#fbfbfb',
	// paddingVertical: 20,
	// },
	// tabBarInfoText: {
	// fontSize: 17,
	// color: 'rgba(96,100,109, 1)',
	// textAlign: 'center',
	// },
});
