import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import BlockCard from './BlockCard';

const SmallCard = ({item}) => {
    return(
        <BlockCard  item={item} style={styles.container} imageStyle={styles.image} />
    )
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width / 2,
        marginRight: 15,
        height: Dimensions.get('window').height / 2.3
    },
    image: {
        height: 220
    }
})

export default SmallCard;