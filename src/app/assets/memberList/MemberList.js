import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import pending from '../icons/pending.png';


export default function MemberList({navigation, members}) {
    const displayMembers = members.slice(0, 4)
    return (
        // <View>
        <View style={{alignItems: 'center', flexDirection: 'row', alignContent: 'center', paddingVertical: 10}}>
                {displayMembers.map((l, i) => (
                    <View style={{margin:5, alignItems: 'center'}}>
                        <Avatar i={i}  size="medium" rounded source={{uri: l.avatar_url}}  />
                        <Text>{l.name}</Text>
                    </View>
                ))}
                <View>
                    <TouchableOpacity style={{margin:5, alignItems: 'center'}} onPress={()=> {navigation.navigate('UserListPage', {members: members})}}>
                        <Avatar size="medium" rounded source={pending} />
                        <Text>More</Text>
                    </TouchableOpacity>
                </View>
            {/* </ScrollView> */}
        </View>
    )
}