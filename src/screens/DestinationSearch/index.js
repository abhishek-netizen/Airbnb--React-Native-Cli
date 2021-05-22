import React,{useState} from 'react';
import { View, TextInput, FlatList,Pressable, Text  } from 'react-native';
import styles from '../DestinationSearch/styles';
import searchResults from '../../../assets/data/search';
import Entypo from "react-native-vector-icons/Entypo";
import {useNavigation} from '@react-navigation/native';



const DestinationSearchScreen = (props) => {
    const [inputText, setInputText] = useState("")
    const navigation = useNavigation()
    

    return (
        <View style={styles.container}>
            <TextInput value={inputText} onChangeText={setInputText} placeholder="Where are you going?" style={styles.TextInput} />
            <FlatList
                data={searchResults}
                renderItem={({ item }) =>
                    <Pressable style={styles.row} onPress={()=>navigation.navigate('Guest Screens')}>
                        <View style={styles.iconContainer}>
                        <Entypo name={"location-pin"} size={25} />
                         </View>
                        <Text style={styles.locationText}>{item?.description}</Text>
                    </Pressable>
                }
            />
        </View>  
    )
}

export default DestinationSearchScreen;