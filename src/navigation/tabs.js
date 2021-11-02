import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { StyleSheet, Text, View, Image, TouchableOpacity, StatusBar } from 'react-native';
import Tab1 from '../screens/tabs/Tab1';
import Tab2 from '../screens/tabs/Tab2';
import Tab3 from '../screens/tabs/Tab3';



const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <StatusBar backgroundColor='black' barStyle='light-content' />,
        <Tab.Navigator
            screenOptions={{ headerShown: false, }}
            tabBarOptions={{
                headerShown: false,
                showLabel: false,
                activeTintColor: 'white',
                inactiveTintColor: 'white',
                activeBackgroundColor: 'darkcyan',
                inactiveBackgroundColor: '#8fcbbc',
                statusBarStyle: 'light-content',
            }}
        >
            <Tab.Screen
                name="Events"
                component={Tab1}
                options={{
                    tabBarIcon: ( { focused } ) => (
                        <View style={{ alignItems: "center", justifyContent: "center" }}>
                            <Image
                                source={require( '../../assets/icons/Event.png' )}
                                resizeMode="contain"
                                style={{
                                    width: 20,
                                    height: 20,
                                    tintColor: focused ? 'white' : 'white',
                                }}
                            />

                            <Text
                                style={{ color: focused ? 'white' : 'white', fontSize: 10 }}>
                                HOME
                            </Text>

                        </View>
                    ),
                }} />
            <Tab.Screen name="Groups" component={Tab2} options={{
                tabBarIcon: ( { focused } ) => (
                    <View style={{ alignItems: "center", justifyContent: "center" }}>
                        <Image
                            source={require( '../../assets/icons/Groups.png' )}
                            resizeMode="contain"
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: focused ? 'white' : 'white',
                            }}
                        />
                        <Text
                            style={{ color: focused ? 'white' : 'white', fontSize: 10 }}>
                            Groups
                        </Text>
                    </View>
                ),
            }} />

            <Tab.Screen name="Chat" component={Tab3} options={{
                tabBarIcon: ( { focused } ) => (
                    <View style={{ alignItems: "center", justifyContent: "center" }}>
                        <Image
                            source={require( '../../assets/icons/Chat.png' )}
                            resizeMode="contain"
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: focused ? 'white' : 'white',
                            }}
                        />
                        <Text
                            style={{ color: focused ? 'white' : 'white', fontSize: 10 }}>
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
    }
} )

export default Tabs;
