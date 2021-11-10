import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { StyleSheet, Text, View, Image, Header, TouchableOpacity, StatusBar } from 'react-native';
import Tab1 from '../screens/tabs/Events';
import ChatsLanding from '../screens/Chats/Chats'
import GroupsSubNavigation from './GroupsSubNavigation'



const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (

        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: "white",
                tabBarInactiveTintColor: "white",
                tabBarActiveBackgroundColor: "darkcyan",
                tabBarInactiveBackgroundColor: "#8fcbbc",
                tabBarShowLabel: false,
                tabBarStyle: [{ "display": "flex" }, null]
            }}
        >
            <Tab.Screen
                name="Events"
                component={Tab1}
                options={{
                    tabBarIcon: ( { focused } ) => (
                        <View style={{ alignItems: "center", justifyContent: "center" }}>
                            <Image
                                source={require( '../assets/icons/Event.png' )}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? 'white' : 'white',
                                }}
                            />

                            <Text
                                style={{ color: focused ? 'white' : 'white', fontSize: 14, fontWeight: 'bold' }}>
                                Events
                            </Text>

                        </View>
                    ),
                }} />
            <Tab.Screen name="Groups" component={GroupsSubNavigation} options={{
                tabBarIcon: ( { focused } ) => (
                    <View style={{ alignItems: "center", justifyContent: "center" }}>
                        <Image
                            source={require( '../assets/icons/Groups.png' )}
                            resizeMode="contain"
                            style={{
                                // width: 25,
                                height: 23,
                                tintColor: focused ? 'white' : 'white',
                            }}
                        />
                        <Text
                            style={{ color: focused ? 'white' : 'white', fontSize: 14, fontWeight: 'bold' }}>
                            Groups
                        </Text>
                    </View>
                ),
                headerShown: false
            }} />

            <Tab.Screen name="Chat" component={ChatsLanding} options={{
                tabBarIcon: ( { focused } ) => (
                    <View style={{ alignItems: "center", justifyContent: "center" }}>
                        <Image
                            source={require( '../assets/icons/Chat.png' )}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? 'white' : 'white',
                            }}
                        />
                        <Text
                            style={{ color: focused ? 'white' : 'white', fontSize: 14, fontWeight: 'bold' }}>
                            Chat
                        </Text>
                    </View>
                ),
            }} />
        </Tab.Navigator>
    );

}
const styles = StyleSheet.create( {
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    },
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        marginTop: 100
    },
} )

export default Tabs;
