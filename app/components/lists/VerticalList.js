import React from 'react';
import { View, StyleSheet } from 'react-native';
import Title from '../common/Title';
import FlatCard from '../cards/FlatCard';
import { useNavigation } from '@react-navigation/native';

const VerticalList = ({title, data}) => {
    const navigation = useNavigation();
    return(
        <View>
            <Title>{title}</Title>
            <View style={styles.container}>
                {data.map(item => <FlatCard onPress={() => navigation.navigate('NewsDetail', { item })} item={item} />)}
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 15
    }
});

export default VerticalList;