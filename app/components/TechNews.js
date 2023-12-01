import React from 'react';
import HorizontalList from './HorizontalList';

const TechNews = ({data}) => {
    return(
        <HorizontalList title='TechNews' data={data} />
    )
}

export default TechNews;