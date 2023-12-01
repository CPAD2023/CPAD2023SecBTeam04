import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import SmallCard from './SmallCard';
import Title from './Title';

const HorizontalList = ({title, data}) => {
    
    return(
        <>
            <Title size={20}>{title}</Title>
            <View style={styles.listStyle}>
                <FlatList data={data}  horizontal 
                    showsHorizontalScrollIndicator={false} 
                    renderItem={({item}) => <SmallCard item={item} /> } />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    listStyle: {
        marginVertical: 15
    }
})

export default HorizontalList;