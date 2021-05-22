import React,{useState} from 'react';
import { View, Text, Pressable } from "react-native"
import styles from '../GuestScreens/styles';
import {useNavigation} from '@react-navigation/native'




const GuestsScreen = (props) => {
    const [adults, setAdults] = useState(0)
    const [children, setChildren] = useState(0)
  const [infants, setInfants] = useState(0)
  
  const navigation = useNavigation();

    return (
      <View style={{justifyContent:'space-between',height: '100%'}}>
        
        <View>
        <View style={{flexDirection: 'row',justifyContent: 'space-between',paddingVertical:20,alignItems:'center',padding:10,borderBottomWidth: 1, borderColor: '#778899'}}>
        <View>
            <Text style={{fontWeight: 'bold'}}>Adults</Text>
            <Text style={{color:'#483D8B'}}>Ages 13 or aove</Text>
        </View>
        <View style={{flexDirection: 'row', padding:10, alignItems: 'center'}}>
                <Pressable
                    style={styles.button}
            onPress={() => setAdults(Math.max(0,adults - 1))} 
            >
              <Text style={{padding:10,fontSize:16,color:'#483D8B'}}>-</Text>
            </Pressable>
                
                <Text style={{ marginHorizontal: 10, fontSize: 16, color: '#483D8B' }}>{adults}</Text>
                
                <Pressable
                     style={styles.button}
                onPress={() => setAdults(adults + 1)}
            >
              <Text style={{padding:10,fontSize:16,color:'#483D8B'}}>+</Text>
            </Pressable>
        </View>
        </View>
        
        {/* // second */}
        <View style={{flexDirection: 'row',justifyContent: 'space-between',paddingVertical:20,alignItems:'center',padding:10,borderBottomWidth: 1, borderColor: '#778899'}}>
        <View>
            <Text style={{fontWeight: 'bold'}}>Children</Text>
            <Text style={{color:'#483D8B'}}>Ages 2 to 12</Text>
        </View>
        <View style={{flexDirection: 'row', padding:10, alignItems: 'center'}}>
                <Pressable
                    style={styles.button}
            onPress={() => setChildren(Math.max(0,children - 1))} 
            >
              <Text style={{padding:10,fontSize:16,color:'#483D8B'}}>-</Text>
            </Pressable>
                
                <Text style={{ marginHorizontal: 10, fontSize: 16, color: '#483D8B' }}>{children}</Text>
                
                <Pressable
                     style={styles.button}
                onPress={() => setChildren(children + 1)}
            >
              <Text style={{padding:10,fontSize:16,color:'#483D8B'}}>+</Text>
            </Pressable>
        </View>
        </View>

        
     {/* third
             */}
        <View style={{flexDirection: 'row',justifyContent: 'space-between',paddingVertical:20,alignItems:'center',padding:10,borderBottomWidth: 1, borderColor: '#778899'}}>
        <View>
            <Text style={{fontWeight: 'bold'}}>Infants</Text>
            <Text style={{color:'#483D8B'}}>Below 2</Text>
        </View>
        <View style={{flexDirection: 'row', padding:10, alignItems: 'center'}}>
                <Pressable
                    style={styles.button}
            onPress={() => setInfants(Math.max(0,infants - 1))} 
            >
              <Text style={{padding:10,fontSize:16,color:'#483D8B'}}>-</Text>
            </Pressable>
                
                <Text style={{ marginHorizontal: 10, fontSize: 16, color: '#483D8B' }}>{infants}</Text>
                
                <Pressable
                     style={styles.button}
                onPress={() => setInfants(infants + 1)}
            >
              <Text style={{padding:10,fontSize:16,color:'#483D8B'}}>+</Text>
            </Pressable>
        </View>
        </View>
            
        </View>

          <Pressable style={{marginBottom:20, backgroundColor:'#f15454', alignItems: 'center', justifyContent: 'center', height: 50, marginHorizontal: 20, borderRadius: 10}}   onPress={() => navigation.navigate('SearchResults Screen')}>
            <Text style={{fontSize:20, color: 'white', fontWeight: 'bold'}}>Search</Text>
          </Pressable>

            
    
    </View>

    )
}

export default GuestsScreen;