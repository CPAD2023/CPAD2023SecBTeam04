import React from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import Title from '../common/Title';
import Subtitle from '../common/Subtitle';
import { fallbackImage } from '../../../api/newsDB'

const BlockCard = ({style, imageStyle, item}) => {
    const {urlToImage, title, description} = item;
    return(
        <View style={[styles.container, style]}>
            <Image source={{uri: urlToImage ? urlToImage : fallbackImage}} style={[styles.image, imageStyle]} />
            <View style={styles.contentContainer}>
                <Title>{title}</Title>
                <Subtitle>{description}</Subtitle>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width / 1.1,
        height: Dimensions.get('window').height / 2.3,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: '#fff'
    },
    image: {
        width: '100%',
        height: 200
    }, 
    contentContainer: {
        padding: 5
    }
})

export default BlockCard;