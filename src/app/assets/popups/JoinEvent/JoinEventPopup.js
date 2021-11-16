import React, { Component, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, Animated, Dimensions, Alert, Divider, ScrollView } from 'react-native'
import { Avatar, Icon } from 'react-native-elements';
import pending from '../../icons/pending.png';

const WIDTH = Dimensions.get('screen').width
const HEIGHT = Dimensions.get('screen').height

const list = [
    {
      name: 'Full Name',
      avatar_url: 'https://picsum.photos/seed/picsum/200/300',
      about: 'About section for interests etc',
      followed: true,
    },
    {
      name: 'Full Name',
      avatar_url: 'https://picsum.photos/id/237/200/300',
      about: 'About section for interests etc',
      followed: false,
    },
	{
		name: 'Full Name',
		avatar_url: 'https://picsum.photos/seed/picsum/200/300',
		about: 'About section for interests etc',
		followed: true,
	  },
	
]

class JoinPopup extends Component {
	static popupInstance

	static show({ ...config }) {
		this.popupInstance.start(config)
	}

	static hide() {
		this.popupInstance.hidePopup()
	}

	state = {
		positionView: new Animated.Value(HEIGHT),
		opacity: new Animated.Value(0),
		positionPopup: new Animated.Value(HEIGHT),
		popupHeight: 0,
		mic: true,
		cam: true,
	}

	start({ ...config }) {
		this.setState({
			title: config.title,
			type: config.type,
			nav: config.nav,
			icon: config.icon !== undefined ? config.icon : false,
			textBody: config.textBody,
			friends: config.friends,
			button: config.button !== undefined ? config.button : true,
			callback: config.callback !== undefined ? config.callback : this.defaultCallback(),
			background: config.background || 'rgba(0, 0, 0, 0.5)',
			timing: config.timing,
			autoClose: config.autoClose !== undefined ? config.autoClose : false
		})

		Animated.sequence([
			Animated.timing(this.state.positionView, {
				toValue: 0,
				duration: 100,
				useNativeDriver: false
			}),
			Animated.timing(this.state.opacity, {
				toValue: 1,
				duration: 300,
				useNativeDriver: false
			}),
			Animated.spring(this.state.positionPopup, {
				toValue: (HEIGHT / 2) - (this.state.popupHeight / 2),
				bounciness: 15,
				useNativeDriver: true
			})
		]).start()

		if (config.autoClose && config.timing !== 0) {
			const duration = config.timing > 0 ? config.timing : 5000
			setTimeout(() => {
				this.hidePopup()
			}, duration)
		}
	}

	hidePopup() {
		Animated.sequence([
			Animated.timing(this.state.positionPopup, {
				toValue: HEIGHT,
				duration: 250,
				useNativeDriver: true
			}),
			Animated.timing(this.state.opacity, {
				toValue: 0,
				duration: 300,
				useNativeDriver: false
			}),
			Animated.timing(this.state.positionView, {
				toValue: HEIGHT,
				duration: 100,
				useNativeDriver: false
			})
		]).start()
	}

	defaultCallback() {
		return Alert.alert(
			'Callback!',
			'Callback complete!',
			[
				{ text: 'Ok', onPress: () => this.hidePopup() }
			]
		)
	}

	render() {
		const { title, type, nav, textBody, button, friends, callback, background } = this.state
		let el = null;
		if (this.state.button) {
			el = 
			<TouchableOpacity style={styles.createBtn} onPress={() => {nav.navigate('LiveEvent')}}>
				<Text style={styles.createText}>Join Event</Text>
			</TouchableOpacity>
		}
		else {
			el = <Text></Text>
		}

		return (
			<Animated.View
				ref={c => this._root = c}
				style={[styles.Container, {
					backgroundColor: background || 'transparent',
					opacity: this.state.opacity,
					transform: [
						{ translateY: this.state.positionView }
					]
				}]}>
				<Animated.View
					onLayout={event => {
						this.setState({ popupHeight: event.nativeEvent.layout.height })
					}}
					style={[styles.Message, {
						transform: [
							{ translateY: this.state.positionPopup }
						]
					}]}

				>
					<View style={styles.CrossHair}>
						<TouchableOpacity  onPress={callback}>
							<Image source={require('../../icons/closePopup.png')}/>
						</TouchableOpacity>
					</View>
					<View style={{alignItems: 'center', borderBottomColor: '#DADADA', borderBottomWidth: 1}}>
						<Text style={styles.Title}>Members on Call</Text>
						<ScrollView horizontal={true} style={{marginTop: 20, marginBottom: 20, marginLeft: 10, marginRight: 10}}>
						{list.map((l, i) => (
							<View style={{margin:5, alignItems: 'center'}}>
								<Avatar i={i}  size="medium" rounded source={{uri: l.avatar_url}}  />
								<Text>{l.name}</Text>
							</View>
						))}
						<View>
							<TouchableOpacity style={{margin:5, alignItems: 'center'}} onPress={()=> {nav.navigate('UserListPage')}}>
								<Avatar size="medium" rounded source={pending} />
								<Text>More</Text>
							</TouchableOpacity>
						</View>
						</ScrollView>
					</View>
					<View style={{alignItems: 'center', marginTop: 20, }}>
						<Text style={styles.Title}>Join Call With</Text>
						<View style={{flexDirection: 'row', margin: 20}}>
							<TouchableOpacity style={{marginRight: 30}} onPress={()=> this.setState({ mic: !this.state.mic })}>
								{this.state.mic ?
								<Icon name='mic'type='material' size={32}/>
								:
								<Icon name='mic-off'type='material' size={32} />
								}
								<Text>Microphone</Text>
							</TouchableOpacity>
							<TouchableOpacity style={{marginLeft: 30}} onPress={()=> this.setState({ cam: !this.state.cam })}>
								{this.state.cam ? 
									<Icon name='videocam'type='material' size={32}/>
									:
									<Icon name='videocam-off'type='material' size={32}/>
								}
								<Text>Camera</Text>
							</TouchableOpacity>
						</View>
					</View>
					<View style={{alignItems: 'center',}}>
						{el}
					</View>
				</Animated.View>
			</Animated.View>
		)
	}
}

const styles = StyleSheet.create({
	Container: {
		position: 'absolute',
		zIndex: 99999,
		width: WIDTH,
		height: HEIGHT,
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
		alignItems: 'center',
		top: 0,
		left: 0
	},
	CrossHair: {
		alignItems: 'flex-end', 
		paddingRight: 15,
		paddingTop: 15,
	},
	Message: {
		maxWidth: 329,
		width: 329,
		minHeight: 369,
		backgroundColor: '#fff',
		borderRadius: 30,
		overflow: 'hidden',
		position: 'absolute',
		display: 'flex', 
	},
	Content: {
		padding: 20,
		alignItems: 'center'
	},
	Header: {
		height: 230,
		width: 230,
		backgroundColor: '#FBFBFB',
		borderRadius: 100,
		marginTop: -120
	},
	Image: {
		padding: 20,
	},
	Title: {
		fontWeight: 'bold',
		fontSize: 18,
		color: '#333'
	},
	Desc: {
		textAlign: 'center',
		color: '#666',
		marginTop: 14
	},
	Button: {
		borderRadius: 10,
		height: 40,
		width: 130,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 30
	},
	TextButton: {
		color: '#fff',
		fontWeight: 'bold'
	},
	UserProfilePopUp: {
		backgroundColor: '#008080',
		shadowColor: "#008080",
		shadowOffset: {
			width: 0,
			height: 5,
		},
		shadowOpacity: 0.36,
		shadowRadius: 6.68,
		elevation: 11
	},
    createBtn: {
		width: 122,
		height: 52,
		borderRadius: 5,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#008080",
	  },
	  createText: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 20,
		textAlign: 'center',
	  },
})

export default JoinPopup