import React from 'react';
import { View, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import Title from '../common/Title';
import Subtitle from '../common/Subtitle';
import { fallbackImage } from '../../../api/newsDB'

const FlatCard = ({item, onPress}) => {
    const {urlToImage, title, description} = item;
    return(
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={[styles.container]}>
                <Image source={{uri: urlToImage ? urlToImage : fallbackImage}} style={[styles.image]} />
                <View style={styles.contentContainer}>
                    <Title>{title}</Title>
                    <Subtitle>{description}</Subtitle>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 8,
        overflow: 'hidden',
        marginBottom: 10,
        height: 80
    },
    image: {
        flex: 0.35,
        height: '100%'
    },
    contentContainer: {
        flex: 0.65,
        paddingHorizontal: 5
    }
});

export default FlatCard;