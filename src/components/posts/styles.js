import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        margin:20,
    },
    image: {
        width: '100%',
        aspectRatio: 3 / 2,
        resizeMode: 'cover',
        borderRadius: 10,
        // height:20,
    },
    bedroom: {
        marginVertical: 10,
        color: '#778899',
    },
    description: {
        fontSize: 18,
        lineHeight: 26,
    },
    prices: {
        fontSize: 18,
      marginVertical: 10,
    },
    oldPrice: {
        color: '#778899',
        textDecorationLine: 'line-through',
    },
    newPrice: {
        fontWeight: 'bold',
    },
    totalPrice: {
        color: '#778899',
        textDecorationLine: 'underline',
    },
})


export default styles;