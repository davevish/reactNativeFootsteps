import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, StatusBar } from 'react-native';

export default class Form extends Component {

	render () {
		return (
			<View style={styles.container}>
				<StatusBar
					barStyle = "light-content"
				/>
				<TextInput
					placeholder="username or email"
					placeholderTextColor='rgb(143,143,143)'
					returnKeyType="next"
					onSubmitEditing={() => this.passwordInput.focus()}
					keyboardType="email-address"
					style={styles.input}
				/>
				<TextInput
					placeholder="password"
					returnKeyType="go"
					placeholderTextColor='rgb(143,143,143)'
					secureTextEntry
					style={styles.input}
					ref={(input)=> this.passwordInput = input}
				/>
				<TouchableOpacity style={styles.buttonContainer}>
					<Text style={styles.buttonText}>{this.props.type}</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		padding: 20
	},
	input: {
		height: 40,
		textAlign: 'center',
		backgroundColor: 'rgba(255,255,255,0.5)',
		marginBottom: 10,
		color: '#FFFFFF',
		paddingHorizontal: 10,
		borderRadius: 30
	},
	buttonContainer: {
		backgroundColor: '#2980b9',
		paddingVertical: 15,
		borderRadius: 30
	},
	buttonText: {
		textAlign: 'center',
		color: '#FFFFFF',
		fontWeight: '700'
	}
});