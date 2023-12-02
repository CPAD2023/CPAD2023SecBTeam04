import React from 'react';
import BlockCard from './cards/BlockCard';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Title from './common/Title';

const FeaturedNews = ({data}) => {
    const navigation = useNavigation();
    return(
        <>
            <Title>FEATURED NEWS</Title>
            <FlatList data={data}  horizontal 
                showsHorizontalScrollIndicator={false} 
                renderItem={({item}) => 
                <BlockCard onPress={() => navigation.navigate('NewsDetail', { item })} item={item} /> } 
            />
        </>
    )
};

export default FeaturedNews;