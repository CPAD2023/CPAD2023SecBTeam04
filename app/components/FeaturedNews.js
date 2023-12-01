import React from 'react';
import BlockCard from './BlockCard';
import { FlatList } from 'react-native';

const FeaturedNews = ({data}) => {
    return(
        <FlatList data={data}  horizontal 
                    showsHorizontalScrollIndicator={false} 
                    renderItem={({item}) => <BlockCard item={item} /> } />
    )
}

export default FeaturedNews;