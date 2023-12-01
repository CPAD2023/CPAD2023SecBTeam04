import React from 'react';
import { View, StyleSheet } from 'react-native';
import Title from '../common/Title';
import FlatCard from '../cards/FlatCard';

const VerticalList = ({title, data}) => {
    return(
        <View>
            <Title>{title}</Title>
            <View style={styles.container}>
                {data.map(item => <FlatCard item={item} />)}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 15
    }
})

export default VerticalList;