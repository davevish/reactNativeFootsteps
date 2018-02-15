import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	View,
	Text,
	Dimensions
} from 'react-native';

import MapView from 'react-native-maps';

const {width, height} = Dimensions.get('window')

const SCREEN_HEIGHT = height
const SCREEN_WIDTH = width
const ASPECT_RATIO = height / width
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LONGITUDE_DELTA * ASPECT_RATIO

export default class GoogleMap extends Component {
	constructor (props) {
		super (props)

		this.state = {
			initialPosition: {
				latitude: 0,
				longitude: 0,
				latitudeDelta: 0,
				longitudeDelta: 0
			},
			markerPosition: {
				latitude: 0,
				longitude: 0
			}
		}
	}

	watchID: ?number = null

	componentDidMount () {
		navigator.geolocation.getCurrentPosition((position) => {
			var lat = parseFloat(position.coords.latitude)
			var long = parseFloat(position.coords.longitude)

			var initalRegion = {
				latitude: lat,
				longitude: long,
				latitudeDelta: LATITUDE_DELTA,
				longitudeDelta: LONGITUDE_DELTA
			}

			this.setState({initialPosition: initalRegion})
			this.setState({markerPosition: initalRegion})
		},
		(error) => alert(JSON.stringify(error)),
		{enableHighAccuracy: true, timeout: 2000, maximumAge: 1000})

		this.watchID = navigator.geolocation.watchPosition((position) => {
			var lat = parseFloat(position.coords.latitude)
			var long = parseFloat(position.coords.longitude)

			var lastRegion = {
				latitude: lat,
				longitude: long,
				longitudeDelta: LONGITUDE_DELTA,
				latitudeDelta: LATITUDE_DELTA
			}

			this.setState({initialPosition: lastRegion})
			this.setState({markerPosition: lastRegion})
		})
	}

	componentWillUnmount() {
		navigator.geolocation.clearWatch(this.watchID)
	}

	render() {
		return(
			<View style={styles.container}>
				<MapView
					style={styles.map}
					region={this.state.initialPosition}>

					<MapView.Marker
						coordinate={this.state.markerPosition}>
						<View style={styles.radius}>
							<View style={styles.radius}>
							</View>
						</View>
					</MapView.Marker>
				</MapView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems:'center',
		backgroundColor: '#F5FCFF',
	},
	map:{
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		position: 'absolute'
	},
	welcome: {
		textAlign:'center',
		fontSize: 20,
		margin: 10,
	},
	instructions: {
		textAlign:'center',
		color: "#333333",
		marginBottom: 5,
	},
	radius: {
		height: 50,
		width: 50,
		borderRadius: 50 / 2,
		overflow: 'hidden',
		borderWidth: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	marker: {
		height: 20,
		width: 20,
		borderRadius: 20 / 2,
		overflow: 'hidden',
		backgroundColor: '#007AFF',
		borderWidth: 3,
		borderColor: 'white'

	},
});

AppRegistry.registerComponent('GoogleMap', () => Googlemap);