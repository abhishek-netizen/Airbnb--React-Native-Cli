import React from "react";
import { View, Text, StyleSheet,Image } from 'react-native';
import styles from "../../components/posts/styles";


const Post = (props) => {
    // console.log(props)
    const post = props.post;
    console.log(post)
    // console.log(post?.description)
    // console.log(post.bed)


 
// console.log(post?.image)


    return (
        <View style={styles.container}>
            {/*image*/}
            <Image style={styles.image} source={{uri: post?.image}}   />

            {/*bed and bedroom */}
            <Text style={styles.bedroom}>{post?.bed} bed {post?.bedroom} bedroom</Text>
            {/*Type and Description*/}
            <Text style={styles.description} numberOfLines={2}>
            {post?.description}
            </Text>
            {/*old and new price*/}
            <Text style={styles.prices}>
                <Text style={styles.oldPrice}> {post?.oldPrice}$ </Text>
                <Text style={styles.newPrice}> {post?.newPrice}$ </Text>
                / night
            </Text>
            {/*total price */}
            <Text style={styles.totalPrice}>{post?.totalPrice}$ total price</Text>
        </View>
    )
}




export default Post;