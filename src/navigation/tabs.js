import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Tab1 from '../screens/tabs/Tab1';
import Tab2 from '../screens/tabs/Tab2';
import Tab3 from '../screens/tabs/Tab3';


const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}
            tabBarOptions={{
                showLabel: false,
                style: {
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    evevation: 0,
                    backgroundColor: '#ffffff',
                    borderRadius: 15,
                    height: 90,
                    ...styles.shadow

                }
            }}
        >
            <Tab.Screen
                name="Tab1"
                component={Tab1}
                options={{
                    tabBarIcon: ( { focused } ) => (
                        <View style={{ alignItems: "center", justifyContent: "center" }}>
                            <Image
                                source={require( '../../assets/icons/home.png' )}
                                resizeMode="contain"
                                style={{
                                    width: 20,
                                    height: 20,
                                    tintColor: focused ? '#e32f45' : '#748c94',
                                }}
                            />
                            <Text
                                style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 10 }}>
                                HOME
                            </Text>
                        </View>
                    ),
                }} />
            <Tab.Screen name="Tab2" component={Tab2} options={{
                tabBarIcon: ( { focused } ) => (
                    <View style={{ alignItems: "center", justifyContent: "center" }}>
                        <Image
                            source={require( '../../assets/icons/home.png' )}
                            resizeMode="contain"
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: focused ? '#e32f45' : '#748c94',
                            }}
                        />
                        <Text
                            style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 10 }}>
                            HOME
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
