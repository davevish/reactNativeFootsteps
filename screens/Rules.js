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

export default class Rules extends React.Component {
  static navigationOptions = {
    title: 'Rules',
  };

  render() {
    return(
		<Text style={styles.title}>Here Are The Rules</Text>
	);
  }
}

const styles = StyleSheet.create({
	title: {
		marginTop: 10,
		width: 300,
		textAlign: 'center',
		justifyContent: 'center'
	}
});