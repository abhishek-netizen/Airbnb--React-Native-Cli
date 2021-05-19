import React from "react";
import { View, Text, StyleSheet,Image } from 'react-native';
import styles from "../../components/posts/styles";

const Post = (props) => {
    return (
        <View style={styles.container}>
            {/*image*/}
            <Image style={styles.image} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6WsnJbW_fSy-DtiZF5ZluaSloXh-Out3tyIpueCOl9Bfjsfa1vXK6sSQGTGHa6LHnl0Q&usqp=CAU'}}   />

            {/*bed and bedroom */}
            <Text style={styles.bedroom}>1 bed. 1 bedroom</Text>
            {/*Type and Description*/}
            <Text style={styles.description} numberOfLines={2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </Text>
            {/*old and new price*/}
            <Text style={styles.prices}>
                <Text style={styles.oldPrice}>$46 </Text>
                <Text style={styles.newPrice}> $38 </Text>
                / night
            </Text>
            {/*total price */}
            <Text style={styles.totalPrice}>$240 total</Text>
        </View>
    )
}




export default Post;