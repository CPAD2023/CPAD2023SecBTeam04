import React from 'react';
import { View, StyleSheet } from 'react-native';
import HorizontalList from './HorizontalList';

const TechNews = ({data}) => {
    return(
        <HorizontalList title='TechNews' data={data} />
    )
}

const styles = StyleSheet.create({
    container: {}
})

export default TechNews;